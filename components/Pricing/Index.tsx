import styles from './Pricing.module.css'
import Link from 'next/link';
const Pricing = () => {
    return(
        <div className={styles.pricing}>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h3 className={styles.h3}>- Basic -</h3>
                    <span className={styles.bar}></span>
                    <p className={styles.btc}>10 dlls</p>
                    <p className={styles.p}>1 mes de desarrollo</p>
                    <p className={styles.p}>Ayuda</p>
                    <p className={styles.p}>Featured</p>
                    <p className={styles.p}>Solicitar</p>
                    <Link className='btn' href='/conact'>Book</Link>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.h3}>- Pro -</h3>
                    <span className={styles.bar}></span>
                    <p className={styles.btc}>100 dlls</p>
                    <p className={styles.p}>1 mes de desarrollo</p>
                    <p className={styles.p}>Ayuda</p>
                    <p className={styles.p}>Featured</p>
                    <p className={styles.p}>Solicitar</p>
                    <Link className='btn' href='/conact'>Book</Link>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.h3}>- Company -</h3>
                    <span className={styles.bar}></span>
                    <p className={styles.btc}>1000 dlls</p>
                    <p className={styles.p}>1 mes de desarrollo</p>
                    <p className={styles.p}>Ayuda</p>
                    <p className={styles.p}>Featured</p>
                    <p className={styles.p}>Solicitar</p>
                    <Link className='btn' href='/conact'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing;