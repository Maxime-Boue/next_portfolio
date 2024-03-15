import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Inter, Major_Mono_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const MMD = Major_Mono_Display({ weight: "400", preload: false });

export const metadata = {
  title: "Maxime Boué | Portfolio",
  description: "Maxime is a web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#FEFDFB] text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#F2D1F3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#886989]"></div>
        <div
          className="bg-[#f3ebd1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#897f5e]"
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
