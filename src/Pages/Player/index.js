import styles from "./Player.module.css"
import Banner from "Components/Banner"
import Title from "Components/Title"
import { useParams } from "react-router-dom"
import cardList from "../../json/db.json"
import NotFound from "Pages/NotFound"

const Player = () => {
    const param = useParams()
    const playerItem = cardList.filter((item) => item.id === Number(param.id))[0]
    
    if (!playerItem) return <NotFound/> 

    return(<>
        <Banner imageName="player"/>
        <Title>Player - {playerItem.title}</Title>
        <section className={styles.video}>
            {
                <iframe 
                    width="900" 
                    height="550"
                    src={playerItem.link} 
                    title={playerItem.title} ></iframe>
            }
        </section>
        </>
    )
}

export default Player