import React, { useState } from 'react'
import styles from './Gallery.module.scss'
import Tags from '../Tags'
import pictures from './pictures.json'
import Cards from './Cards'


export default function Gallery() {
  const [items, setItems] = useState(pictures);
  const tags = [...new Set(pictures.map((value) => value.tag))]

  const pictureFilter = (tag) => {
    const newPictures = pictures.filter((value) => {
      return value.tag === tag;
    })
    setItems(newPictures)
  }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filterPictures={pictureFilter} setItems={setItems}/>
       <Cards pictures={items} styles={styles}/>
    </section>
  )
}
