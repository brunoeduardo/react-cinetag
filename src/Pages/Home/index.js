import Banner from "Components/Banner";
import Card from "Components/Card";
import Title from "Components/Title";
import cardList from "../../json/db.json"
import CardContainer from "Components/CardContainer";

const Home = () => {
    return(<>
        <Banner imageName="home"/>
        <Title>A place to store your videos and movies!</Title>
        <CardContainer>
            {cardList.map((item) => (<Card key={item.id} id={item.id} imageSrc={item.cover} title={item.title}/>))}
        </CardContainer>
    </>)
}

export default Home;