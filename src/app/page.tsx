import Image from "next/image";
import { geistSans, geistMono } from "@/lib/fonts";
import Header from "@/components/header";
import GetApp from "@/components/getApp";
import Footer from "@/components/footer";
import Infos from "@/components/infos";
import { BS_Light, BS_Light_Italic } from "@/lib/fonts";

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-red-200 w-[90vw] flex flex-col items-center justify-center mx-auto`}>
      <Header />


      <section className="flex items-center justify-center flex-col w-full h-fit bg-red-400 gap-10 py-10">
        <h1 className={`${BS_Light.className} text-9xl text-center font-bold tracking-wider`}>Find your next favorite <span className={`${BS_Light_Italic.className} text-9xl text-center font-bold tracking-wider`}>Gin</span></h1>
        <GetApp />
      </section>


      <Infos />

      <Footer />
    </div>
  );
}

