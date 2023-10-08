import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const EventCard = ({event}) => {
  const {id,name,image,price,description} = event || {}
    return (
        <div>
            <div className="relative flex  flex-col rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl lg:rounded-full bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      {name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      {price}
      </p>
    </div>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
    {description}
    </p>
  </div>
  <div className="p-6 pt-0">
  <Link to={`/events/${id}`}>
  <button
      className="block w-full text-white select-none rounded-lg bg-red-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Add to Cart
    </button>
  
  
  </Link>
  </div>
</div>
        </div>
    );
};

export default EventCard;
EventCard.propTypes = {
  event: PropTypes.node
}