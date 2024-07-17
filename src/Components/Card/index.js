import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import noFavoriteIcon from "./no-favorite.png"
import favoriteIcon from "./favorite.png"
import useFavoriteContext from "hooks/useFavorite"

const Card = ({id, imageSrc, title}) => {
    const { favorite, addFavorite} = useFavoriteContext()
    const isFavorite = favorite.some((fav)=> fav.id === id)
    const icon = isFavorite ? favoriteIcon : noFavoriteIcon;
    return(
            <div className={styles.container}>
                <img className={styles.image} src={imageSrc} alt={title} />
                <div className={styles.info}>
                    <Link className={styles.link} to={`/player/${id}`}>
                        <h2>{title}</h2>
                    </Link>
                    <img src={icon} alt="Favorite movie" className={styles.favorite} onClick={() => addFavorite({id, imageSrc, title})}/>
                </div>
            </div>
    )
}

export default Card