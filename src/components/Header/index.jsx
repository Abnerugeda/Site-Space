import logo from './logo.png'
import search from './search.png'
import styles from './Header.module.scss'

export default function Header(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da Alura Space"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?"/>
                <img src={search} alt="icone de lupa" />
            </div>
        </header>
    )
}