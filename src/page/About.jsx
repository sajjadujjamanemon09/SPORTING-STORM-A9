

const About = () => {
    return (
        <div className="max-w-7xl mx-auto p-2">
            <div className="text-center ">
            <h2 className="text-center text-5xl font-bold text-cyan-500 mt-16 mb-10">About US</h2>
            </div>
            <div className="md:flex justify-between items-center">
                <div className="md:w-2/4" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <img src="https://i.ibb.co/g4GBYzS/27208.jpg" alt="" />
                </div>
                <div className="md:w-2/4" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <p className="text-cyan-700">WHO WE ARE</p>
                    <h1 className="text-3xl max-w-sm py-4">Highly Tailored Sporting, Management & Support Services.</h1>
                    <p className="max-w-md pb-8 text-cyan-900">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible talent for all your development needs.</p>
                    <p><hr className="w-3/4 border-t border-black" /></p>
                    <div className="md:flex gap-14 pt-8">
                        <div className="md:w-1/4">
                            <h1 className="text-xl font-semibold pb-2">Our Mission</h1>
                            <p>Accelerate innovation with world-class tech teams. We help businesses elevate their value.</p>
                        </div>
                        <div className="md:w-1/4">
                            <h1 className="text-xl font-semibold pb-2">Customize</h1>
                            <p>Accelerate innovation with world-class tech teams. We help businesses elevate their value.</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default About;