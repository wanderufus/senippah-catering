import Navbar from "../components/Navbar";  
import Hero from "../components/Hero";  
import ServiceSection from "../components/ServiceSecion";
import Services from "./Services";

const Home =()=>{
    return(
        <div>
           <Navbar />
           <Hero />
              <ServiceSection />
              {/* <Services /> */}
        </div>
    )

}

export default Home;