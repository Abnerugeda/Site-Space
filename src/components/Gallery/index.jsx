import React from 'react'
import styles from './Gallery.module.scss'
import Tags from '../Tags'
import pictures from './pictures.json'
import open from "./open.png"
import favorite from "./favorito.png"


export default function Gallery() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <ul className={styles.galeria__cards}>
          {pictures.map((pictures) => {
            return(
              <li key={pictures.id} className={styles.galeria__card}>
                <img 
                  className={styles.galeria__imagem}
                  src={pictures.imagem} 
                  alt={pictures.titulo} 
                />
              <p className={styles.galeria__descricao}>{pictures.titulo}</p>
              <div>
                <p>{pictures.creditos}</p>
                <span>
                  <img src={favorite} alt="ícone coração de curtir" />
                  <img src={open} alt="ícone de abrir modal" />
                </span>
              </div>
              </li>
            )
          })}
        </ul>
    </section>
  )
}
