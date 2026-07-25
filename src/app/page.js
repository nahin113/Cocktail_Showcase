import About from "@/components/About";
import Art from "@/components/Art";
import Cocktails from "@/components/Cocktails";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
export default function Home() {
  return (
    <>
      <Hero />
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
    </>
  );
}
