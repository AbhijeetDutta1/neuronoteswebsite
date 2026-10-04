import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="grid items-center gap-12 px-4 pb-8 pt-12 text-center md:grid-cols-[1.2fr_1fr] md:px-16 md:text-left">
      <div className="animate-fade-in-up">
        <h1 className="font-display text-5xl uppercase leading-[1.05] md:text-7xl">
          Making memories through <span className="text-white">music</span>
        </h1>
        <p className="mx-auto mb-8 mt-6 max-w-xl text-lg text-ink-soft md:mx-0">
          {site.description}
        </p>
        <Link
          href="/officers"
          className="inline-block rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(40,58,72,0.35)]"
        >
          Meet the Officers
        </Link>
      </div>

      <div className="order-first flex justify-center md:order-none">
        {site.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={site.logo} alt="NeuroNotes logo" className="w-52 rounded-2xl border-4 border-ink md:w-full md:max-w-sm" />
        ) : (
          <div className="placeholder aspect-square w-52 rounded-full md:w-full md:max-w-sm">
            Logo
          </div>
        )}
      </div>
    </section>
  );
}
