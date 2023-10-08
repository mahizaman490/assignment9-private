
import EventCard from "./EventCard";

const ServicesSection = ({events}) => {
    console.log(events)
    return (
        <div className="w-10/12 mx-auto md:py-40">
            <h1 className="text-3xl text-red-500 font-semibold text-center md:text-6xl"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">OUR</h1> 
            <p className="text-2xl text-yellow-400 font-semibold text-center md:text-5xl py-3"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">SERVICES</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

            {

         events && events?.map(event => <EventCard key={event.id} event={event}> </EventCard> )


            }


            </div>
        </div>
    );
};

export default ServicesSection;
