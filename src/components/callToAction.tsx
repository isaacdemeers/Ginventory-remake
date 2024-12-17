
import Image from "next/image";
import Link from "next/link";

import { BS_Light, BS_Medium } from "@/lib/fonts";

import GetApp from "./getApp";

import Logo from "@img/Ginventory/logo-ginventory-simple.png";
import LogoApple from "@img/Ginventory/leaf.png";

export default function CallToAction() {


    return (
        <section className={`${BS_Medium.className} relative w-full flex items-center justify-center flex-col gap-12  py-10`}>
            <Image src={LogoApple} alt="Ginventory Logo" className="hidden absolute top-0 left-[-60%] -rotate-45 md:block" width={680} />
            <Image src={LogoApple} alt="Ginventory Logo" className="hidden absolute top-0 right-[-60%]  rotate-[150deg] md:block" width={680} />

            <Image src={Logo} alt="Ginventory Logo" width={73} className="mb-10" />
            <div className="flex items-center justify-center flex-col gap-4">
                <h1 className={`text-3xl font-bold text-text ${BS_Light.className}`}>Just test Ginventory, you won't regret it</h1>
                <p className="text-xl text-text">4,5/5 note on Apple Store</p>
            </div>
            <GetApp />

            <p className="text-text text-xl text-center mt-16">We missed a Gin ? <Link href="/" className="underline">Please share it with us</Link></p>
        </section>
    )
}