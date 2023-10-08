
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import Gallery from "./Gallery";
import HappyClients from "./HappyClients";
import ServicesSection from "./ServicesSection";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
const {events} = useLoaderData()

console.log(events)
const authInfo = useContext(AuthContext)
console.log(authInfo)
    return (
        <div>
          <Banner></Banner>
          <ServicesSection events={events}></ServicesSection>
          <Gallery></Gallery>
          <HappyClients></HappyClients>

        </div>
    );
};

export default Home;