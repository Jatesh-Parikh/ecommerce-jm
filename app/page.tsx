import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </main>
  );
}
