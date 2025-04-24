import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/sobre";
import Projeto from "./paginas/Projeto";
import Page404 from "./paginas/Page404";
import PageBase from "./paginas/PageBase";

function AppRouters(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={<Home />}></Route>
                    <Route path="/Sobre" element={<Sobre />}></Route>
                    <Route path="/Projeto" element={<Projeto />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters
