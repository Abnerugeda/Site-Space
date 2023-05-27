import React from 'react'
import picturesPopular from './pictures-popular.json'
import styles from './Popular.module.scss'

export default function Popular(){
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {picturesPopular.map((pictures) => {
                return (
                    <li key={pictures.id}>
                        <img src={pictures.path} alt={pictures.alt} />
                    </li>
                );
            })}
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
