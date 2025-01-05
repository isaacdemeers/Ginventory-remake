import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion"


import { BS_Light, BS_Medium } from "@/lib/fonts";

import GetApp from "./getApp";

import Logo from "@img/Ginventory/logo-ginventory-simple.png";
import LogoApple from "@img/Ginventory/leaf.png";

export default function CallToAction() {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"]
    });
    const rotateLeft = useTransform(scrollYProgress, [0, 1], [-40, -20]);
    const rotateRight = useTransform(scrollYProgress, [0, 1], [150, 190]);


    return (
        <section className={`${BS_Medium.className} relative w-full flex items-center justify-center flex-col gap-12  py-10`}>
            <motion.div style={{ rotate: rotateLeft }} transition={{ duration: 0.5, delay: 0.5 }} className="absolute top-[-10%] left-[-40%] md:block w-[680px] aspect-square">
                <Image src={LogoApple} alt="Ginventory Logo" className=" w-full h-full" />
            </motion.div>

            <motion.div style={{ rotate: rotateRight }} className="absolute bottom-[-10%] right-[-30%] md:block">
                <Image src={LogoApple} alt="Ginventory Logo" className=" w-full h-full" />
            </motion.div>

            <Image src={Logo} alt="Ginventory Logo" width={73} className="mb-10" />
            <div className="flex items-center justify-center flex-col gap-4">
                <h1 className={`text-3xl font-bold text-text ${BS_Light.className}`}>Just test Ginventory, you won&apos;t regret it</h1>
                <p className="text-xl text-text">4,5/5 note on Apple Store</p>
            </div>
            <GetApp />

            <div className="flex items-center justify-center flex-col gap-4 rounded-3xl bg-white p-6  mt-16">
                <p className="text-text text-xl text-center px-10">We missed a Gin ? <Link href="/" className="underline">Please share it with us</Link></p>
            </div>
        </section>
    )
}




