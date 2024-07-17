import Container from "Components/Container";
import Footer from "Components/Footer";
import Header from "Components/Header";
import FavoriteProvider from "context/Favorite";
import Favorite from "Pages/Favorite";
import Home from "Pages/Home";
import Player from "Pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouters = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Container>
                    <FavoriteProvider>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/favorites" element={<Favorite/>}/>
                            <Route path="/player/:id" element={<Player/>}/>
                        </Routes>
                    </FavoriteProvider>
                </Container>
            <Footer/>
        </BrowserRouter>
        
    )
}

export default AppRouters;