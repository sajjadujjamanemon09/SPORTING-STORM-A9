/* eslint-disable react/prop-types */


const Events = ({events}) => {

    const {name, image} = events;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
          <img src={image} alt="Events" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn bg-red-500 text-white">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Events;