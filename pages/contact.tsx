import Navbar from "../components/Navbar/Index";
import Footer from "../components/Footer/Index";
import HeroImage from "../components/HeroImage/Index";
import ContactComp from "../components/Contact/Index";
const Contact = () => {
    return(
        <div>
            <Navbar />
            <HeroImage heading="CONTACT" text='Contact AS Software' />
            <ContactComp />
            <Footer />
        </div>
    )
}

export default Contact;