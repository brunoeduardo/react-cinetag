import { Suspense } from "react"

const { default: Container } = require("Components/Container")
const { default: Footer } = require("Components/Footer")
const { default: Header } = require("Components/Header")
const { default: FavoriteProvider } = require("context/Favorite")
const { Outlet } = require("react-router-dom")

const Template = () => {
    return(<>
        <Header/>
        <Container>
            <FavoriteProvider>
                <Suspense fallback={<h1> Loading ...</h1>}>
                <Outlet/>
                </Suspense>
            </FavoriteProvider>
        </Container>
        <Footer/>
    </>
    )
}

export default Template