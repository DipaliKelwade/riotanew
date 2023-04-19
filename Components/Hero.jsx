import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
          <h3 className="text-[#FFEE40] text-3xl">DIGITAL TRANSFORMATION</h3>
          <h1 className="text-[#FFFFFF] text-6xl">
            <b>Advanced analytics</b>
          </h1>
          <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px]">
            Advanced analytics is the foundation for cognitive computing,
            machine learning, AI and bots. it brings static data to life and
            unlocks the insight you've been searching for.We offer comprehensive
            solutions across industries in information management, data
            governance and advanced analytics that unlock organisational
            potential, enabling informed decision making, leveraging your
            company’s most valuable data assets to increase shareholder value.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
          
          <img
            className="object-cover object-center rounded z-10"
            alt="hero"
            src="/icons/earth.png"
          />
        </div>
      </div>
      <div className="container md:px-5 px-1">

      <h5 className="text-6xl">Our Analytics Platform Takes <br />
Away The Hard Process Of Data Processing</h5>
      </div>
    </section>
  );
};

export default Hero;
