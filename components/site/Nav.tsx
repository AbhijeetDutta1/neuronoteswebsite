import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-sky/85 px-4 py-4 backdrop-blur md:px-16">
      <Link href="/" className="font-display text-2xl uppercase md:text-3xl">
        NeuroNotes
      </Link>
      <nav className="flex gap-4 text-base font-semibold text-ink-soft md:gap-8 md:text-lg">
        <Link href="/#info" className="hover:text-white">
          Info
        </Link>
        <Link href="/#events" className="hover:text-white">
          Events
        </Link>
        <Link href="/officers" className="hover:text-white">
          Officers
        </Link>
        <Link href="/#contact" className="hover:text-white">
          Contact
        </Link>
      </nav>
    </header>
  );
}
