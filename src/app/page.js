import Hero from "@/components/Hero/Hero";
import Reating from "@/components/Rating/Reating";
import TrandingApps from "@/components/TrandingApps/TrandingApps";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Reating/>
      <TrandingApps/>
    </div>
  );
}
