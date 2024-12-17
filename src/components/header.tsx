
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import logo from "@img/Ginventory/logo-ginventory.png";
import logoText from "@img/Ginventory/Ginventory-text.png";
import Social from "@/components/social";
import { BS_Medium } from "@/lib/fonts";

export default function Header() {
    return (
        <nav className="flex items-center justify-center h-40 w-full p-0">

            <div className="flex items-center justify-between w-full gap-6 mx-auto">
                <div className="flex items-center justify-start w-28">
                    <h3 className={`${BS_Medium.className} text-sm uppercase text-text tracking-widest`}>Ginventory</h3>
                </div>
                <Separator className="flex-1" />
                <div className="flex items-center justify-center w-24">
                    <Image src={logo} alt="Logo" />
                </div>
                <Separator className="flex-1" />
                <Social />
            </div>
        </nav>
    );
}
