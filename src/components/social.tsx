import instagramLogo from "@img/Ginventory/Instagram.svg";
import facebookLogo from "@img/Ginventory/Facebook.svg";
import twitterLogo from "@img/Ginventory/Twitter.svg";
import Image from "next/image";

export default function Social() {
    return (
        <ul className="flex items-center justify-between w-24">
            <li className="cursor-pointer"><Image src={instagramLogo} alt="Instagram Logo" /></li>
            <li className="cursor-pointer"><Image src={facebookLogo} alt="Facebook Logo" /></li>
            <li className="cursor-pointer"><Image src={twitterLogo} alt="Twitter Logo" /></li>
        </ul>
    )
}