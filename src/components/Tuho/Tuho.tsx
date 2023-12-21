import { useState, useEffect } from "react";
import { getDatas } from "../../apis/Tuho/getDatas";
import { ListItem } from "../ListItem";
import { StyledLists } from "../../styles/List/ListsStyle";
import { StyledContentContainer, StyledMobileContentContainer } from "../../styles/Content/ContentStyle";
import { Mobile, PC } from "../../responsive";

interface RankData {
    name: string;
    score: number;
}

export const TuhoList = () => {
    const [data, setData] = useState<Array<object> | null>(null);

    const getTuho = async () => {
        const fetchData:Array<object> = await getDatas();
        setData(fetchData);
    }
    useEffect(() => {
        /**
         * @todo "data" state에 값 불러오기
         */
        if (data === null) {  // 무한 반복 방지
            getTuho();
        }
    }, [data])
    return(
        <>
            <PC>
                <StyledContentContainer>
                    <StyledLists>
                        {data?.filter((element): element is RankData => {
                            return typeof (element as RankData).name === 'string' && typeof (element as RankData).score === 'number'; 
                        }).sort((a,b) => b.score - a.score).map((element, idx) => (
                            <ListItem name={element.name} score={element.score} key={idx} rank={idx + 1} />
                        ))}
                    </StyledLists>
                </StyledContentContainer>
            </PC>
            <Mobile>
                <StyledMobileContentContainer>
                    <StyledLists>
                        {data?.filter((element): element is RankData => {
                            return typeof (element as RankData).name === 'string' && typeof (element as RankData).score === 'number'; 
                        }).sort((a,b) => b.score - a.score).map((element, idx) => (
                            <ListItem name={element.name} score={element.score} key={idx} rank={idx + 1} />
                        ))}
                    </StyledLists>
                </StyledMobileContentContainer>
            </Mobile>
        </>
    )
}