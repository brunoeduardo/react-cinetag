import Template from "Components/Template";
import Favorite from "Pages/Favorite";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import Player from "Pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouters = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template/>}>
                    <Route index element={<Home/>}/>
                    <Route path="favorites" element={<Favorite/>}/>
                    <Route path="player/:id" element={<Player/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>       
        </BrowserRouter>
    )
}

export default AppRouters;