import styles from './Video.module.css'
import Link from 'next/link';

const Video = () => {
    return(
        <div className={styles.hero}>
            <video autoPlay loop muted id={styles.video}>
                <source src={require('../../assets/earth.mp4')} type='video/mp4'/>
            </video>
            <div className={styles.content}>
                <h1 className={styles.videoH1}>We make your idea</h1>
                <p className={styles.videoP}>Best software for your company</p>
                <div>
                    <Link className='btn' href='/about'>Talk Us</Link>
                    <Link className={`btn btn-light ${styles.btn}`} href='/contact'>Projects</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Video;