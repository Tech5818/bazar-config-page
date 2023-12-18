import { useEffect, useState } from "react"
import { getDatas } from "../../apis/Archery/getDatas";

export const MainPage = () => {
    const [data, setData] = useState<object | null>(null);

    const getArchery = async () => {
        const fetchData:object = await getDatas();
        setData(fetchData);
    }
    useEffect(() => {
        getArchery();
        console.log(data);
    }, [data])
    return(
        <>
            {data}
        </>
    )
}