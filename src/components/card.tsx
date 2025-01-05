
import Image, { StaticImageData } from "next/image";
import { BS_Medium, BS_Light_Italic } from "@/lib/fonts";

interface Props {
    number?: string;
    text?: string;
    image: StaticImageData;
    gravity?: string;
    className?: string;
}

export default function Card({ number, text, image, gravity, className }: Props) {

    let container = 'w-full h-full flex flex-col items-center justify-center gap-4 overflow-hidden bg-red-500 rounded-[20px]';

    const Figure = () => {
        return (
            <figure className="w-full h-full bg-blue-500">
                <Image src={image} alt="Preview" width={100} height={100} />
            </figure>
        )
    }

    const Content = () => {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <h1 className={`${BS_Light_Italic.className} text-text text-xs font-bold`}>{number}</h1>
                <p className={`${BS_Medium.className} text-text text-xl`}>{text}</p>
            </div>
        )
    }

    if (text) {

        if (gravity === "bottom") {
            return (
                <div className={`${container} ${className}`}>
                    <Figure />
                    <Content />
                </div>
            );
        }

        if (gravity === "top") {
            return (
                <div className={`${container} ${className}`}>
                    <Content />
                    <Figure />
                </div>
            );
        }

        else {
            return (
                <div className={`${container} ${className}`}>
                    <Content />
                    <Figure />
                </div>
            );
        }
    }
    else {
        return (
            <div className={`${container} ${className}`}>
                <Figure />
            </div>
        )
    }
}