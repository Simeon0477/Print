import styles from "./components.module.css"
import Link from "next/link"

export default function Header(){
    return (
        <>
            <div className={styles.header}>
                <div>
                    <img src="/logo.png" className={styles.logo} />
                </div>
                <div className={styles.Link}>
                    <ul>
                        <li><Link href="https://dolphprint.com/index.html">Accueil</Link></li>
                        <li><Link href="/">Produit +</Link></li>
                        <li><Link href="https://dolphprint.com/tarifs.html">Tarifs</Link></li>
                        <li><Link href="https://dolphprint.com/a-propos.html">A propos</Link></li>
                        <li><Link href="https://dolphprint.com/contact.html">Contact</Link></li>
                        
                    </ul>
                    <ul className={styles.connect}>
                        <li><Link href="https://dolphprint.com/creer-compte.html">Créer Un Compte</Link></li>
                        <li><Link href="https://dolphprint.com/se-connecter.html">Se Connecter</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}