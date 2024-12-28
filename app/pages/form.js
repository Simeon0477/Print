import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./form.module.css"
import {useState} from "react"
import axios from 'axios';

export default function Form() {
  const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert("Veuillez sélectionner un fichier.");
            return;
        }

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("Téléchargement réussi !");
        } catch (error) {
            console.error("Erreur lors du téléchargement :", error);
            alert("Échec du téléchargement.");
        }
    };

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
              <input type="file" multiple accept="images/*" className={styles.file_hidden} onChange={handleFileChange}/>
            </label>
            <br/>
            <br/>
            <button className={styles.submit} onClick={handleSubmit}>Valider</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
