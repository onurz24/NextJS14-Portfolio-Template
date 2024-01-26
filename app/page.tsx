import Counter from "../store/Counter";
import CounterBtn from "../store/CounterBtn";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  );
}
