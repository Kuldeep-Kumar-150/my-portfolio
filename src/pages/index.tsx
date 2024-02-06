import { Inter } from "next/font/google";
import Navbar from "../components/Navbar"
import MyHero from "../components/MyHero"
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
    <div className="min-h-screen w-full bg-[#292F36]">
       <Navbar/>
       <MyHero/>
    </div>
    </>
  );
}
