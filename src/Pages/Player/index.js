import styles from "./Player.module.css"
import Banner from "Components/Banner"
import Title from "Components/Title"
import { useParams } from "react-router-dom"
import NotFound from "Pages/NotFound"
import { useEffect, useState } from "react"

const Player = () => {
    const [video, setVideos] = useState([])
    const param = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/brunoeduardo/cinetag-api/videos?id=${param.id}`)
        .then((response => response.json()))
        .then(data => {
            setVideos(...data)
        })
    }, [])

    if (!video) return <NotFound/> 

    return(<>
        <Banner imageName="player"/>
        <Title>Player - {video.title}</Title>
        <section className={styles.video}>
            {
                <iframe 
                    width="900" 
                    height="550"
                    src={video.link} 
                    title={video.title} ></iframe>
            }
        </section>
        </>
    )
}

export default Player