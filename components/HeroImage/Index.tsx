import styles from './HeroImage.module.css'
interface TextProps {
    heading: string
    text: string
}
const HeroImage = ({ heading, text }: TextProps) =>{
    return(
        <div className={styles.heroImg}>
            <div className={styles.heading}>
                <h1 className={styles.heroH1}>{heading}</h1>
                <p className={styles.p}>{text}</p>
            </div>
        </div>
    )
}

export default HeroImage;