import styles from "./components.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.links}>
                    <h2>Usefuls Links</h2>
                    <ul>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/about.html">About us</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/news.html">Our news</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/contact.html">Start a return</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/contact.html">Contact Us</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/shop.html">Shipping</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/faq.html">FAQ</Link></li>
                    </ul>                
                </div>
                <div className={styles.services}>
                    <h2>Our Services</h2>
                    <ul>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/service-details.html">Printing Services</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/service-details.html">Digital Scanning</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/service-details.html">Design services</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/service-details.html">Copying Services</Link></li>
                        <li><span>&gt;</span> <Link href="https://dolphprint.com/service-details.html">Customize Design</Link></li>
                    </ul>                
                </div>
                <div className={styles.newsletter}> 
                    <h2>Newsletter</h2>        
                    <p >
                    Plus besoin de vous deplacer, Dolphprint prends vos commandes, vos coordonnées et livre chez vous.
                    </p>    
                    <form>
                        <input className={styles.input} type="text" placeholder="Enter your mail address"/>
                        <input className={styles.subscribe} type="submit" value="Subscribe Now" />
                    </form>          
                </div>
            </div>
            <div className={styles.band}>
                <img src="/white-logo.png" className={styles.logo}/>
                <img src="/pament-method.png" className={styles.paiment}/>
                <p>
                    &copy; 2023 Dolphprint. Tout droit reservé.
                </p>
            </div>
        </>
    )
}