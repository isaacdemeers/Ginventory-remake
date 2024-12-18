"use client"

import Image from "next/image";
import Header from "@/components/header";
import GetApp from "@/components/getApp";
import Footer from "@/components/footer";
import Infos from "@/components/infos";
import CallToAction from "@/components/callToAction";

import { BS_Light, BS_Light_Italic } from "@/lib/fonts";
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className={`antialiased w-[90vw] flex flex-col items-center justify-center mx-auto`}>
      <Header />


      <section className="flex items-center justify-center flex-col w-full h-fit gap-10 py-10">
        <h1 className={`${BS_Light.className} text-9xl text-text text-center font-bold tracking-wider`}>Find your next favorite <span className={`${BS_Light_Italic.className} text-9xl text-text text-center font-bold tracking-wider`}>Gin</span></h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <GetApp />
      </section>


      <Infos />
      <CallToAction />
      <Footer />
    </div>
  );
}

