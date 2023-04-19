import Image from "next/image"

const Navbar = () => {
  return (
    <div className=" bg-transperent z-40 px-8 " style={{background: "transperent"}}>
      <header className="text-white bg-transperent bg-opacity-0 body-font" style={{background: "transperent"}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-[#FFFFFF] mb-4 md:mb-0">
     <Image src="/icons/riota.png" width={200} height={150} className="w-[103px] h-[23px]" />
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-[#FFFFFF]">Home</a>
      <a className="mr-5 hover:text-[#FFFFFF]">Digital Transformation</a>
      <a className="mr-5 hover:text-[#FFFFFF]">Product & Solutions</a>
      <a className="mr-5 hover:text-[#FFFFFF]">About Us</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-[#12172D] rounded-full text-base mt-4 md:mt-0 text-[#12172D]">Contact Us
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
