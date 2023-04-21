import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

import bg from "../public/icons/background.png";
import Image from "next/image";
import Whitebg from "./Whitebg";

const Layout = ({ children }) => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <Head></Head>
      <Navbar />
      {/* <NextNProgress height={6} color="#07F300 
  " /> */}
      {children}
      <Whitebg />
      <Footer />
    </div>
  );
};
export default Layout;
