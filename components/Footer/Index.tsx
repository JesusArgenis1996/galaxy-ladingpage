import styles from './Footer.module.css'
import {FaFacebook,FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.location}>
                        <h4>
                            <FaSearchLocation size={20} style={{color: '#fffff', marginRight: '2rem'}} />
                        </h4>
                        <div>
                            <p className={styles.footerP}>Plaza Centenario 123</p>
                            <h4 className={styles.footerH4}>Mexicali, BC</h4>
                        </div>
                        
                    </div>
                    
                    <div className={styles.phone}>
                        <h4 className={styles.footerH4}><FaPhone size={20} style={{color: '#fffff', marginRight: '2rem'}}/></h4>
                        <p className={styles.footerP}>686-329-4731</p>
                    </div>

                    <div className={styles.email}>
                        <h4 className={styles.footerH4}><FaMailBulk size={20} style={{color: '#fffff', marginRight: '2rem'}}/></h4>
                        <p className={styles.footerP}>argenis.sanchez@uabc.edu.mx</p>
                    </div>
                </div>

                <div className={styles.right}>
                    <h4 className={styles.footerH4}>About the company</h4>
                    <p className={styles.footerP}>Desarrollo de software a tu medida</p>
                    <div className={styles.social}>
                        <h4><FaFacebook size={30} style={{color: '#fffff', marginRight: '1rem'}}/></h4>
                        <h4><FaTwitter size={30} style={{color: '#fffff', marginRight: '1rem'}}/></h4>
                        <h4><FaLinkedin size={30} style={{color: '#fffff', marginRight: '1rem'}}/></h4>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;