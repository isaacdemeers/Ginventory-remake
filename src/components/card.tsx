interface Props {
    number: number;
    text: string;
    image: string;
    gravity: string;
    className?: string;
}
import Image from "next/image";

import Logo from "@img/Ginventory/logo-ginventory-simple.png";

export default function Card({ number, text, image, gravity, className }: Props) {
    return (
        <div className={`w-full h-full flex flex-col items-center justify-center gap-4 bg-red-500 rounded-[20px] ${className}`}>
            <div className="w-full h-full ">
                <h1>{number}</h1>
                <p>{text}</p>
                <p>{gravity}</p>
            </div>
            <figure className="w-full h-full bg-blue-500">
                <Image src={Logo} alt={text} width={100} height={100} />
            </figure>
        </div>
    )
}