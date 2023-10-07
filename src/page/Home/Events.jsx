/* eslint-disable react/prop-types */
import { FaForward } from "react-icons/fa";

import { Link } from "react-router-dom";


const Events = ({events}) => {

    const {name, image, description, id, price} = events;

    return (
        <div className="card w-96 bg-cyan-50 shadow-xl">
        <figure className="px-6 pt-6">
          <img src={image} alt="Events" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
        
        <p className="text-cyan-700 py-3">
        {
          description.length > 200 
          ? <p>{description.slice(0,110)}</p>
          : <p>{description}</p>
        }
        </p>
        <p> <span className="text-xl text-black font-medium py-4">Entry Fee:</span> <span className="text-red-500 text-xl font-bold">${price}</span> <span>/participants</span></p>
        
          <div className="card-actions">
           <Link to={`/events/${id}`}> <button className="btn bg-cyan-500 text-white">Learn More <FaForward></FaForward> </button></Link>
          </div>
        </div>
      </div>
    );
};

export default Events;