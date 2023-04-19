import Hero from "@/Components/Hero";
import Hero1 from "@/Components/Hero1";
import Hero2 from "@/Components/Hero2";
import Hero3 from "@/Components/Hero3";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:px-10 md:px-8 px-1 py-4">
      <Head></Head>
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </div>
  );
}
