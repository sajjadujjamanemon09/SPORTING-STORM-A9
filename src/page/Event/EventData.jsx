/* eslint-disable react/prop-types */
import { FaLocationDot, FaCalendarDays, FaRegMap } from "react-icons/fa6";

const EventData = ({events}) => {
    const {name, description, price, image, location, time, venue} = events
    return (
        <div className='px-6 pb-14'>
            <h1 className="text-5xl font-bold py-10 ">{name}</h1>
           <div><img className="hero h-full " src={image} alt="" /></div>

        <p className=" font-bold text-2xl flex items-center gap-2 pt-4">
        <FaCalendarDays  className="text-cyan-500"></FaCalendarDays>{time}
        </p>

        <p className=" font-bold text-2xl flex items-center gap-2 pt-4">
        <FaRegMap  className="text-cyan-500"></FaRegMap>{venue}
        </p>

        <p className=" font-bold text-2xl flex items-center gap-2 pt-4"><FaLocationDot className="text-cyan-500"></FaLocationDot>{location}</p>

        <p className="py-10"><span className="font-extrabold text-xl">About Tournament : </span>{description}</p>
        
        {/* <ToastContainer></ToastContainer> */}
        <button className="btn text-xl bg-cyan-500 text-white">Participate For Only <span className="text-black text-2xl font-extrabold">${price}</span></button>
        </div>
    );
};

export default EventData;


