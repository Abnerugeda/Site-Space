import React from 'react'
import styles from './Gallery.module.scss'
import Tags from '../Tags'
export default function Gallery() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <ul></ul>
    </section>
  )
}
