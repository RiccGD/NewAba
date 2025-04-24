import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../../mages/Hollow.png'

function Menu() {
    return(
        <header className={styles.header}>
            <img src={Logo} alt="Minha foto" />
            <span>Matheus.dev</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projeto">Projeto</Link>
                <Link to="/Test">Test</Link>
            </nav>
        </header>
    )
}

export default Menu