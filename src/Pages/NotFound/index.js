import styles from "./NotFound.module.css"

const NotFound = () => {
    return(<>
    <section className={styles.content}>

        <h1>
            Ops! Page not found
        </h1>

        <p>
            Are you sure this is what you were looking for?
        </p>
    </section>

    </>)
}

export default NotFound