import Navbar from "../components/Navbar/Index";
import Footer from "../components/Footer/Index";
import PricingComp from '../components/Pricing/Index'
import HeroImage from "../components/HeroImage/Index";
const Pricing = () => {
    return(
        <div>
            <Navbar />
            <HeroImage heading="Precios baratos" text="el mejor precio del mercado"/>
            <PricingComp />
            <Footer />
        </div>
    )
}

export default Pricing;