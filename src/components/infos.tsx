import { Info } from "lucide-react";
import Image from "next/image";

import DrinkIcon from "@img/Ginventory/drink-icon.png";
import RateIcon from "@img/Ginventory/rate-icon.png";
import PhoneIcon from "@img/Ginventory/iphone-icon.png";
import { Separator } from "./ui/separator";
import { BS_Medium } from "@/lib/fonts";
export default function Infos() {

    const liStyle = 'w-full flex items-center justify-center gap-2 text-3xl m-2 p-4'
    const imgStyle = 'h-15 w-auto'
    const textStyle = 'text-text text-6xl'

    return (
        <div className={`${BS_Medium.className}  w-full flex items-center justify-center bg-blue-200`}>
            <ul className="flex items-center justify-center flex-col bg-purple-200 w-full">
                <Separator />
                <li className={liStyle}>
                    <h3 className={textStyle}>6500+ Gins</h3>
                    <Image src={DrinkIcon} alt="Drink Icon" className={imgStyle} />
                    <h3 className={textStyle}>listed</h3>
                </li>
                <Separator />
                <li className={liStyle}>
                    <h3 className={textStyle}>1,2+ million downloads</h3>
                    <Image src={PhoneIcon} alt="Phone Icon" className={imgStyle} />
                </li>
                <Separator />
                <li className={liStyle}>
                    <Image src={RateIcon} alt="Rate Icon" className={imgStyle} />
                    <h3 className={textStyle}>300.000+ ratings</h3>
                </li>
                <Separator />
            </ul>
        </div>
    )
}