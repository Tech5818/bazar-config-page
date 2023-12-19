import { useState, useEffect } from "react";
import { getDatas } from "../../apis/Jegichagi/getDatas";

export const JegichagiList = () => {
    const [data, setData] = useState<object | null>(null);

    const getJegichagi = async () => {
        const fetchData:object = await getDatas();
        setData(fetchData);
    }
    useEffect(() => {
        /**
         * @todo "data" state에 값 불러오기
         */
        if (data === null) {  // 무한 반복 방지
            getJegichagi();
        }
        console.log(data);
    }, [data])
    return(
        <>
        
        </>
    )
}