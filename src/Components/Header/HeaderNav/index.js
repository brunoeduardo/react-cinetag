import { Link } from "react-router-dom"
import styles from "./HeaderNav.module.css"

const HeaderNav = ({children, url}) => {
    return(
        <li className={styles.listContent}>
            <Link to={url}>{children}</Link>
        </li>
    )
}

export default HeaderNav