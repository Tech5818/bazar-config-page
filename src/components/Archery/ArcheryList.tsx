import { useState, useEffect } from "react";
import { getDatas } from "../../apis/Archery/getDatas";
import { List, ListItem, ListItemText, Stack } from "@mui/material";

interface RankData {
    name: string;
    score: number;
}

export const ArcheryList = () => {
    const [data, setData] = useState<Array<object> | null>(null);

    const getArchery = async () => {
        const fetchData:Array<object> = await getDatas();
        setData(fetchData);
    }
    useEffect(() => {
        /**
         * @todo "data" state에 값 불러오기
         */
        if (data === null) {  // 무한 반복 방지
            getArchery();
        }
        console.log(data);
    }, [data])
    return(
        <>
            <Stack width={300}>
            <List>
                {data?.filter((element): element is RankData => {
                    return typeof (element as RankData).name === 'string' && typeof (element as RankData).score === 'number'; 
                }).map((element, idx) => (
                    <ListItem key={idx}>
                        <ListItemText
                            primary={element.name}

                        />
                    </ListItem>
                ))}
            </List>
            </Stack>
        </>
    )
}