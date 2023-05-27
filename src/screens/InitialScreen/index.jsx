import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Popular from "../../components/Popular";
import banner from './banner.png';
import styles from './InitialScreen.module.scss'

export default function InitialScreen(){
    return(
        <>
            <Header/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço"/>
                    </div>
                </section>
            <div className={styles.galeria}>
                <Gallery/>
                <Popular/>
            </div>
            </main>
           
            <Footer/>
        </>
    )
}