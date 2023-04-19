import bg from "../public/icons/background.png";
const Hero2 = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
          <img
            className="object-cover object-center rounded z-10"
            alt="hero"
            src="/icons/database.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h3 className="text-[#FFFFFF] text-3xl">
            04 - BI CONSULTING - Need right partner for right start
          </h3>
          <ul>
            <li>● Readiness assessment and defining strategic roadmap</li>
            <li>● Architecture Design and Case Implementation</li>
            <li>● Migration Strategy & Planning</li>
            <li>● BI tool evaluation and standardization</li>
            <li>● Reports and Dashboard assessment and design</li>
          </ul>

          <h3 className="text-[#FFFFFF] text-3xl">
            05 - DATA-WAREHOUSING & INTEGRATION - Heart of Business Intelligence
            system
          </h3>
          <ul>
            <li>● DW Architecture Design and Modeling</li>
            <li>● Data-acquisition Migration, and Integration</li>
            <li>● Maintenance and Support.</li>
          </ul>

          <h3 className="text-[#FFFFFF] text-3xl">
            06 - DATA-VISUALIZATION - Simple yet actionable data representation
          </h3>
          <ul>
            <li>● Customized dashboard creation</li>
            <li>● Customized reports design● Mobile Responsive BI</li>
            <li>● 2Dand 3D Map/Geo visualization.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
