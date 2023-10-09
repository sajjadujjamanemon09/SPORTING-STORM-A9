

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div data-aos="zoom-in-down" data-aos-easing="linear"
     data-aos-duration="2000" className="hero md:h-[70vh] w-full" style={{backgroundImage: 'url(https://i.ibb.co/x7kTPB8/runner-79590-1280.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="text-neutral-content">
    <div className="w-2/4 p-12">
      <h1 className="mb-5 text-6xl font-bold">THE ULTIMATE SPORTING HEROES</h1>
      <p className="mb-5">Welcome to the exhilarating realm of Sporting Storm, a sports event that not only embraces the excitement of athletic endeavors but also fosters a close-knit community of passionate sports enthusiasts.</p>
      <button className="btn border-none bg-cyan-600 text-white">JOIN US NOW</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;