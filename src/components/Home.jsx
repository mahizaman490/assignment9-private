
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import Gallery from "./Gallery";
import HappyClients from "./HappyClients";
import ServicesSection from "./ServicesSection";
import SliderComponent from "./SliderComponent";


const Home = () => {
const {events} = useLoaderData()

console.log(events)

    return (
        <div>
          <Banner></Banner>
          <ServicesSection events={events}></ServicesSection>
          <Gallery></Gallery>
          <HappyClients></HappyClients>
          <SliderComponent></SliderComponent>

        </div>
    );
};

export default Home;