import React from 'react'
import open from "./open.png"
import favorite from "./favorito.png"

export default function Cards({styles, pictures}) {
    return (
        <ul className={styles.galeria__cards}>
            {pictures.map((pictures) => {
                return (
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
    )
}
