import Image from "next/image";
import Header from "./components/Header";
import { div } from "motion/react-client";
import  Hero  from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
   
  );
}
