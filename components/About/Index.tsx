import Image from 'next/image'
import Lap from '../../assets/laptop.jpg'
import Link from 'next/link'
import styles from './About.module.css'
const About = () => {
    return(
        <div className={styles.about}>
            <div className={styles.left}>
                <h1 className={styles.h1}>Tecnologias</h1>
                <p className={styles.p}>Descripcion de proyectos</p>
                <Link className={`btn`} href='/contact'>Contactanos</Link>
            </div>
            <div className={styles.right}>
                <div className='mx-10'>
                    <Image src={Lap} className={styles.img} alt='' />
                </div>
            </div>
            
        </div>
    )
}

export default About;