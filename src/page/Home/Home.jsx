import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Events from "./Events";

const Home = () => {

    const events = useLoaderData()
    console.log(events);

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-6xl font-bold text-red-500 my-16">Our Program & Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    events.map(events => <Events
                    key={events.id}
                    events = {events}
                    ></Events> )
                }

            </div>
        </div>
    );
};

export default Home;