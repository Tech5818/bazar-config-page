import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ArcheryList } from "../Archery/ArcheryList"
import { Menu } from "../Menu/Menu"
import { JegichagiList } from "../Jegichagi/JegichagiList"
import { TuhoList } from "../Tuho/Tuho"

export const MainPage = () => {
    
    return(
        <>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<ArcheryList/>} />
                    <Route path="/tuho" element={<TuhoList/>} />
                    <Route path="/jegichagi" element={<JegichagiList/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}