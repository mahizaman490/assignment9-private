
import Banner from "./Banner";

import Gallery from "./Gallery";
import HappyClients from "./HappyClients";
import ServicesSection from "./ServicesSection";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ServicesSection></ServicesSection>
          <Gallery></Gallery>
          <HappyClients></HappyClients>

        </div>
    );
};

export default Home;