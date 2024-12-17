import { Button } from "./ui/button";
import getAppOnApple from "@img/Ginventory/button-android.png";
import getAppOnGoogle from "@img/Ginventory/button-appstore.png";
import Image from "next/image";

export default function GetApp() {
    return (
        <ul className="flex items-center justify-center gap-2">
            <li>
                <Button className="hover:bg-accentColor transition-all duration-300 h-12 w-fit rounded-xl shadow-md  ">
                    <Image src={getAppOnGoogle} alt="Get App on Google" className="w-full h-full  " />
                </Button>
            </li>
            <li >
                <Button className="hover:bg-accentColor transition-all duration-300 h-12 w-fit rounded-xl shadow-md  ">
                    <Image src={getAppOnApple} alt="Get App on Apple" className="w-full h-full  " />
                </Button>
            </li>

        </ul>
    )
}