import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./logo.png"
import HeaderNav from "./HeaderNav"

const Header = () => {
    return(<header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <Link to={'/'}>
                <img src={logo} alt="Cine tag logo" />
            </Link>
            <nav className={styles.navContainer}>
                <HeaderNav url="/">Home</HeaderNav>
                <HeaderNav url="/favorites">Favorites</HeaderNav>
            </nav>
        </div>
    </header>)
}

export default Header