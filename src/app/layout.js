import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { DM_Sans } from "next/font/google";
import { DM_Mono } from "next/font/google";
import LocalFont from "next/font/local";
import "./styles/globals.css";
import "./styles/compose.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  preload: true,
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-dm-mono",
});

const gelica = LocalFont({
  src: [
    {
      path: "../fonts/gelica/gelica-extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/gelica/gelica-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/gelica/gelica-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/gelica/gelica-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/gelica/gelica-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/gelica/gelica-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/gelica/gelica-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-gelica",
});

export const metadata = {
  title: "Poornima BHardwaj",
  description:
    "A Full-stack developer building fast, accessible, and user-centric websites and apps",
  icons: {
    shortcut: "/Poornima.png",
    apple: "/Poornima.png",
    icon: "/Poornima.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${gelica.variable}`}
    >
      <body>
        <Navbar />
        <div className="mt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
