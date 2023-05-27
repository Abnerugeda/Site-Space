import React from "react";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import instagram from "./instagram.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.linkedin.com/in/abner-ugeda/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="ícone do linkedin" />
        </a>
        <a
          href="https://github.com/abnerugeda"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="ícone do github" />
        </a>
        <a
          href="https://www.instagram.com/abner_ugeda/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Abner Ugeda</p>
    </footer>
  );
}