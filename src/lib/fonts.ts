import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const BS_Medium = localFont({
    src: "../../public/fonts/ttf/BS_Medium.ttf",
});

export const BS_Medium_Italic = localFont({
    src: "../../public/fonts/ttf/BS_MediumItalic.ttf",
});


export const BS_Light = localFont({
    src: "../../public/fonts/ttf/BS_Light.ttf",
});

export const BS_Light_Italic = localFont({
    src: "../../public/fonts/ttf/BS_LightItalic.ttf",
});

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

