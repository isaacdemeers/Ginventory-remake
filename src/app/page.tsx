"use client"

import Image from "next/image";
import Header from "@/components/header";
import GetApp from "@/components/getApp";
import Footer from "@/components/footer";
import Infos from "@/components/infos";
import CallToAction from "@/components/callToAction";
import Scroll from "@/components/scroll";
import { BS_Light, BS_Light_Italic } from "@/lib/fonts";
import { motion } from "motion/react"
import { section } from "motion/react-client";

export default function Home() {
  return (
    <section className="antialiased w-screen flex flex-col items-center justify-center mx-auto overflow-x-hidden ">
      <div className={` w-[90%] flex flex-col items-center justify-center gap-10`}>
        <Header />


        <section className="flex items-center justify-center flex-col w-full h-fit gap-10 py-10">
          <h1 className={`${BS_Light.className} text-9xl text-text text-center font-bold tracking-wider`}>Find your next favorite <span className={`${BS_Light_Italic.className} text-9xl text-text text-center font-bold tracking-wider`}>Gin</span></h1>


          <GetApp />
        </section>

        <Scroll />


        <Infos />
        <CallToAction />
      </div>
      <Footer />
    </section>
  );
}

