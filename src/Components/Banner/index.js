import styles from "./Banner.module.css"

const Banner = ({imageName}) => {
    return(
        <div className={styles.cover} style={{backgroundImage: `url('/images/banner-${imageName}.png')`}}> 

        </div>
    )
}

export default Banner