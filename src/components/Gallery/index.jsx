import React from 'react'
import styles from './Gallery.module.scss'
import Tags from '../Tags'
import pictures from './pictures.json'
import Cards from './Cards'


export default function Gallery() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags/>
       <Cards pictures={pictures} styles={styles}/>
    </section>
  )
}
