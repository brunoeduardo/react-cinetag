import Banner from "Components/Banner";
import Card from "Components/Card";
import Title from "Components/Title";
import CardContainer from "Components/CardContainer";
import { useEffect, useState } from "react";

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoeduardo/cinetag-api/videos')
        .then((response => response.json()))
        .then(data => {
            setVideos(data)
        })
    }, [])

    return(<>
        <Banner imageName="home"/>
        <Title>A place to store your videos and movies!</Title>
        <CardContainer>
            {videos.map((item) => (<Card key={item.id} id={item.id} imageSrc={item.cover} title={item.title}/>))}
        </CardContainer>
    </>)
}

export default Home;