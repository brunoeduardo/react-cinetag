import styles from "./CardContainer.module.css"

const CardContainer = ({children}) => {
    return(
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default CardContainer