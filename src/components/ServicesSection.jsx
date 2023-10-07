
import EventCard from "./EventCard";

const ServicesSection = ({events}) => {
    console.log(events)
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-red-500 font-semibold text-center md:text-6xl">OUR</h1> 
            <p className="text-2xl text-yellow-400 font-semibold text-center md:text-5xl py-3">SERVICES</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">

            {

         events && events?.map(event => <EventCard key={event.id}> </EventCard> )


            }


            </div>
        </div>
    );
};

export default ServicesSection;