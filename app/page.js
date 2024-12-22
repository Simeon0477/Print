import Header from "../components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.main}>
        <div className={styles.printDiv}>
          <h1>Envoyez vos photos et images</h1>
          <form>
            <button className={styles.file}>Choisir les fichiers</button>
            <br/>
            <button className={styles.submit}>Valider</button>
          </form>
        </div>
      </div>
    </>
  );
}
