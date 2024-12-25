import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "./page.module.css"
import useState from "react"

export default function Home() {

  return (
    <>
      <Header/>
      <div className={styles.main}>
        <div className={styles.printDiv}>
          <h1>Envoyez vos photos et images</h1>
          <br/>
          <form>
            <label className={styles.file}>
              Choisissez vos fichiers
              <input type="file" accept="images/*" className={styles.file_hidden} />
            </label>
            <br/>
            <br/>
            <button className={styles.submit}>Valider</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
