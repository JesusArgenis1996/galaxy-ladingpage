import styles from './Contact.module.css'
const Contact = () => {
    return(
        <div>
            <form className={styles.form}>
                <label className={styles.label}>Your Name</label>
                <input className={styles.input} type='text'></input>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type='text'></input>
                <label className={styles.label}>Subject</label>
                <input className={styles.input} type='text'></input>
                <label className={styles.label}>Details</label>
                <textarea className={styles.textarea} rows={5} placeholder='Type a shor message'></textarea>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;