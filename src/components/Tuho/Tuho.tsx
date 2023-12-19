import { useState, useEffect } from "react";
import { getDatas } from "../../apis/Tuho/getDatas";

export const TuhoList = () => {
    const [data, setData] = useState<object | null>(null);

    const getTuho = async () => {
        const fetchData:object = await getDatas();
        setData(fetchData);
    }
    useEffect(() => {
        /**
         * @todo "data" state에 값 불러오기
         */
        if (data === null) {  // 무한 반복 방지
            getTuho();
        }
        console.log(data);
    }, [data])
    return(
        <>
        
        </>
    )
}