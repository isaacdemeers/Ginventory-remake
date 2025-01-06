import { motion, useScroll, useTransform } from "framer-motion"

import Image, { StaticImageData } from "next/image";
import { BS_Medium, BS_Light_Italic } from "@/lib/fonts";

interface Props {
    id: number;
    number?: string;
    text?: string;
    image: StaticImageData;
    gravity?: string;
    className?: string;
}

export default function Card({ id, number, text, image, gravity, className }: Props) {

    const { scrollYProgress } = useScroll();
    const yPos = useTransform(scrollYProgress, [0, 1], [0, 10]);


    let customContainer = {
        1: 'w-40 h-48',

        2: 'bg-white max-h-[800px] pt-4 justify-start',
        3: 'bg-accentColor max-h-[400px] pt-4 justify-start',
        5: 'max-h-[570px] pt-4 justify-start bg-gray-600 text-white',
        6: 'bg-accentColor max-h-[550px] pt-4 justify-start',
        8: 'bg-white pb-4 max-h-[600px] justify-end',
    }

    let customImage = {
        1: 'w-full h-full object-cover',
        4: 'w-full h-full object-cover',
        7: 'w-full h-full object-cover',
    }

    let container = 'w-full h-full flex flex-col my-10 items-center  gap-4 overflow-hidden rounded-[40px] ' + customContainer[id as keyof typeof customContainer];



    const Figure = () => {
        return (
            <figure className={`w-full h-full flex justify-center ${gravity === 'top' ? 'items-start' : 'items-end'} ${gravity ? 'px-10' : ''}`}>
                <Image src={image} alt="Preview" className={customImage[id as keyof typeof customImage]} />
            </figure>
        )
    }

    const Content = () => {
        return (
            <div className={`w-full h-40 flex flex-col items-center justify-center py-4  gap-4`}>
                <h1 className={`${BS_Light_Italic.className} text-text text-md font-bold ${id === 5 ? 'text-white' : ''}`}>{number}</h1>
                <p className={`${BS_Medium.className} w-3/4  text-text text-center text-2xl ${id === 5 ? 'text-white' : ''}`}>{text}</p>
            </div>
        )
    }

    let card: any = null;

    if (text) {

        if (gravity === "bottom") {
            card = <>
                <Figure />
                <Content />
            </>
        }

        if (gravity === "top") {
            card = <>
                <Content />
                <Figure />
            </>
        }

        else {
            card = <>
                <Content />
                <Figure />
            </>
        }
    }
    else {
        card = <Figure />
    }

    return <motion.div
        className={`${container} ${className}`}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        {card}
    </motion.div>
}
