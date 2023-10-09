import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Events from "./Events";
import Blog from "../Blog";
import About from "../About";

const Home = () => {

    const events = useLoaderData()
    console.log(events);

    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <div className="text-center ">
            <h2 className="text-center text-7xl font-bold text-cyan-500 mt-16">Our Program & Events</h2>
            <p className="my-8 max-w-5xl mx-auto text-xl">Sports events, a showcase of skill and determination, captivate audiences worldwide. Athletes push boundaries, celebrate teamwork, and inspire with moments of triumph and sportsmanship</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {
                    events.map(events => <Events
                    key={events.id}
                    events = {events}
                    ></Events> )
                }

            </div>
            <Blog></Blog>
            <About></About>
        </div>
    );
};

export default Home;