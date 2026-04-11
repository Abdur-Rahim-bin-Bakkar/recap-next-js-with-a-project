import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>this is main page</h1>
      <button className="btn btn-success">click me</button>
      <Hero/>
    </div>
  );
}
