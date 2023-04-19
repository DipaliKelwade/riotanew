import bg from "../public/icons/background.png";
const Hero1 = () => {
  return (
    <section className="text-white">
    <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col-reverse items-center">
      <div className="lg:flex-grow md:w-1/2 lg:mr-24 md:mr-16 mr-0  flex flex-col md:items-start md:text-left items-center text-center">
        <h3 className="text-[#FFFFFF] text-3xl mb-7">01 - ENTERPRISE DATA</h3>
        <p className="mb-7">Implement transactional ERP data, CRM systems and a wide variety of semistructured and unstructured data sets present in content repositories.</p>
        <ul className="mb-7">
            <li>● Data-Governance</li>
            <li>● Master Data-Management</li>
            <li>● Data Quality Management</li>
            <li>● Data-Integration ● Data-Security</li>
        </ul>
        <h3 className="text-[#FFFFFF] text-3xl">02 - MACHINE DATA</h3>
        <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px] mb-7">
          Improve end-to-end transactional visibility to log files and other machinegenerated data for gaining complete insights into an IT infrastructure.
        </p>

        <h3 className="text-[#FFFFFF] text-3xl">03 - SENSOR-GENERATED DATA</h3>
        <p className="text-[#FFFFFF] text-[18px] mt-[25px] max-w-[717px]">
        Improve end-to-end transactional visibility to log files and other machinegenerated data for gaining complete insights into an IT infrastructure.
        </p>        
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10">
        <img
          className="object-cover object-center rounded z-10"
          alt="hero"
          src="/icons/data.png"
        />
      </div>
    </div>
  </section>
  );
};

export default Hero1;
