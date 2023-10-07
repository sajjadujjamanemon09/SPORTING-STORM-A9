import { useLoaderData, useParams } from "react-router-dom";
import EventData from "./EventData";


const Event = () => {
  const events = useLoaderData()
    const {id} = useParams()
    return (
      <div className="max-w-7xl mx-auto ">
       {
        events.map(event => event.id == id ? <EventData
          key={events.id}
          events = {event}
          ></EventData> : '' )
       }
      </div>
    );
};

export default Event;




  //       <div className='px-6'>
  //       <div className="relative">
  //          <div><img className="hero h-[70vh] " style={imageStyle} src={image} alt="" /></div>
  //  <div className="absolute inset-x-0 left-0 bottom-0 bg-opacity-50 py-5 bg-black">
  //  <button onClick={handleAddToDonation} 
  //  className="btn  text-white ml-8 " style={{backgroundColor:text_button_bg_color}}>Donate ${price}</button>
  //    </div>
  //  </div>
  //  <h1 className="text-3xl font-bold py-5">{title}</h1>
  //  <p>{id}</p>
  //  {/* <ToastContainer></ToastContainer> */}
  //  </div>