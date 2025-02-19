import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { Footer } from "./ui/footer/footer";
import { Navbar } from "./ui/navbar/navbar";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from "./ui/modal/modal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Airdukon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${jost.variable} ${inter.variable} overflow-x-hidden`}>
        <Navbar></Navbar>
        <div className="pt-20 md:pt-44 lg:pt-64">{children}</div>
        <Footer></Footer>
        <Modal />
      </body>
    </html>
  );
}
