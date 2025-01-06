import { motion, useScroll, useTransform } from "framer-motion"
import Card from "@/components/card"
import Logo from "@img/Ginventory/logo-ginventory-simple.png"
import Picture1 from "@img/Ginventory/picture-2.jpg"
import Picture2 from "@img/Ginventory/iphone1.png"
import Picture3 from "@img/Ginventory/iphone2.png"
import Picture4 from "@img/Ginventory/picture-3.jpg"
import Picture5 from "@img/Ginventory/iphone3.png"
import Picture6 from "@img/Ginventory/iphone4.png"
import Picture7 from "@img/Ginventory/picture-4.jpg"
import Picture8 from "@img/Ginventory/iphone5.png"

export default function Scroll() {
    const { scrollYProgress } = useScroll();
    const xPos = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yPos = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (

        <div className=" w-full min-h-screen  grid grid-cols-12 grid-rows-20 gap-4">
            <Card id={1} image={Picture1} className="col-span-2 row-span-2 col-start-3 row-start-2" />
            <Card id={2} number={'01'} text="Search for a specific Gin, a tonic or a botanical" image={Picture2} gravity="top" className="col-span-6 row-span-4 col-start-6 row-start-2" />
            <Card id={3} number={'02'} text="Find Gins and their perfect serve" image={Picture3} gravity="top" className="col-span-4 row-span-4 col-start-2 row-start-5" />
            <Card id={4} image={Picture4} className="col-span-5 row-span-4 col-start-8 row-start-8" />
            <Card id={5} number={'03'} text="Rate or save any Gin" image={Picture5} gravity="top" className="col-span-5 row-span-3 col-start-6 row-start-10" />
            <Card id={6} number={'04'} text="Manage your Collection" image={Picture6} gravity="top" className="col-span-4 row-span-4 col-start-0 row-start-12" />
            <Card id={7} image={Picture7} className="col-span-6 row-span-4 col-start-4 row-start-14" />
            <Card id={8} number={'05'} text="Buy Gins from online partner stores" image={Picture8} gravity="bottom" className="col-span-6 row-span-4 col-start-7 row-start-14" />



        </div>

    )
}

