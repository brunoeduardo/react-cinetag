import styles from "./Player.module.css"
import Banner from "Components/Banner"
import Title from "Components/Title"
import { useParams } from "react-router-dom"
import cardList from "../../json/db.json"

const Player = () => {
    const param = useParams()
    const playerItem = cardList.filter((item) => item.id === Number(param.id))[0]
    
    return(<>
        <Banner imageName="player"/>
        <Title>Player - {playerItem.title}</Title>
        <section className={styles.video}>
            {
                <iframe 
                    width="560" 
                    height="315"
                    src={playerItem.link} 
                    title={playerItem.title} ></iframe>
            }
        </section>
        </>
    )
}

export default Player