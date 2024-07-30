import Template from "Components/Template";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRouters = () => {
    const Favorite = lazy(() => import("Pages/Favorite"))
    const Player = lazy(() => import("Pages/Player"))

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