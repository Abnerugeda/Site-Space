import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'




export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="Icone home" />
                <a href="">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="Icone Mais curtidas" />
                <a href="">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="Icone Mais Vistas"/>
                <a href="">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="Icone  Novas" />
                <a href="">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="Icone Surpreenda-me" />
                <a href="">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
