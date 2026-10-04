"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { events } from "@/lib/events";

export default function EventScroller() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll the row by one card (card width + gap)
  const scroll = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 300;
    track.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="events" className="bg-sky-light px-4 py-20 md:px-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-display text-3xl uppercase md:text-4xl">Events</h2>
        <div className="flex gap-2">
          <ScrollButton onClick={() => scroll(-1)} label="Previous events">
            <ArrowLeft size={18} />
          </ScrollButton>
          <ScrollButton onClick={() => scroll(1)} label="Next events">
            <ArrowRight size={18} />
          </ScrollButton>
        </div>
      </div>

      <div ref={trackRef} className="scrollbar-thin flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {events.map((event) => (
          <article
            key={event.id}
            className="w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl bg-card sm:w-[300px]"
          >
            {event.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={event.image} alt={event.title} className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="placeholder aspect-[4/3] w-full border-0 border-b-2">Event photo</div>
            )}
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-deep">{event.date}</p>
              <h3 className="mb-2 mt-1 text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-ink-soft">{event.description}</p>
              {event.link && (
                <a href={event.link} className="mt-3 inline-block text-sm font-semibold text-sky-deep hover:underline">
                  Learn more →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScrollButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink transition hover:border-white hover:text-white"
    >
      {children}
    </button>
  );
}
