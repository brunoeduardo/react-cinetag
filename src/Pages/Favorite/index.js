import Banner from "Components/Banner"
import Card from "Components/Card"
import CardContainer from "Components/CardContainer"
import Title from "Components/Title"
import useFavoriteContext from "hooks/useFavorite"

const Favorite = () => {
    const {favorite} = useFavoriteContext();

    return(
        <>
            <Banner imageName="favorites"/>
            <Title>My favorites</Title>
            <CardContainer>
                { favorite.map((item) => (<Card key={item.id} {...item} />))

                 }  
            </CardContainer>
            
        </>
    )
}

export default Favorite
