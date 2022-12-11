import Footer from "../components/Footer/Index";
import Navbar from "../components/Navbar/Index";
import AboutComp from "../components/About/Index";
import HeroImage from "../components/HeroImage/Index";
const About = () =>{
    return(
        <div>
            <Navbar />
            <HeroImage heading="Quienes somos" text="Desarrolladores"/>
            <AboutComp />
            <Footer />
        </div>
    )
}

export default About;