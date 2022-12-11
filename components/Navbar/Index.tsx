import Link from 'next/link'
import styles from './Navbar.module.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react';

const Navbar = () => {

    const[click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

   

    return (
        <div className={styles.header}>
            <h1><Link href='/'>AS Business</Link></h1>
            <ul className={click ? `${styles['navMenu']} ${styles['active']}` : styles['navMenu']}>
                <li>
                    <Link className={styles.link} href='/'>Home</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/about'>Quienes somos</Link>
                </li>
                
                <li>
                    <Link className={styles.link} href='/contact'>Contacto</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={handleClick}>
                {click ? <FaTimes size={20} style={{color: '#fff'}}/> : <FaBars size={20} style={{color: '#fff'}}/>}
            </div>
        </div>
    )
}

export default Navbar;