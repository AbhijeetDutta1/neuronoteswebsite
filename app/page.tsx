import Hero from "@/components/home/Hero";
import ImportantInfo from "@/components/home/ImportantInfo";
import EventScroller from "@/components/home/EventScroller";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <ImportantInfo />
      <EventScroller />
      <Contact />
    </main>
  );
}
