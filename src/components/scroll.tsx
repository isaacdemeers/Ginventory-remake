import { motion, useScroll, useTransform } from "framer-motion"
import Card from "@/components/card"

export default function Scroll() {
    const { scrollYProgress } = useScroll();
    const xPos = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yPos = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (

        <div className=" w-full min-h-screen bg-white grid grid-cols-12 grid-rows-20 gap-4">
            <Card number={1} text="text" image="image" gravity="gravity" className="col-span-2 row-span-2 col-start-3 row-start-2" />
            <div className="col-span-6 row-span-4 col-start-6 row-start-2 bg-black">4</div>
            <div className="col-span-4 row-span-4 col-start-2 row-start-5 bg-black">5</div>
            <div className="col-span-5 row-span-4 col-start-8 row-start-8 bg-black">6</div>
            <div className="col-span-4 row-span-3 col-start-6 row-start-12 bg-black">7</div>
            <div className="col-span-6 row-span-4 col-start-7 row-start-16 bg-black">8</div>
        </div>

    )
}

