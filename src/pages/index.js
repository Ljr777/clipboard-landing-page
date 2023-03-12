import Head from "next/head";
import Image from "next/image";

import Hero from "components/Hero";
import Cta from "components/Cta";
import Features from "components/Features";
import Testimonials from "components/Testimonials";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="px-5 pt-10 pb-7">
          <Hero />
          <Features />
          <Testimonials />
          <Cta />
          <Footer />
        </div>
      </main>
    </>
  );
}
