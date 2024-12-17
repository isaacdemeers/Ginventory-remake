import Link from "next/link";
import Social from "@/components/social";
import { BS_Medium } from "@/lib/fonts";

export default function Footer() {
    return (
        <footer className={`${BS_Medium.className} flex items-center justify-between w-full h-40 bg-blue-400`}>
            <div className="flex items-center justify-center gap-2">
                <p className="hidden md:block text-text">Join our community on</p>
                <Social />
            </div>

            <Link href="/contact" className=" text-text underline " >Contact us</Link>
        </footer>
    )
}