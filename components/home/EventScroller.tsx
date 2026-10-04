"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Music } from "lucide-react";
import { formatEventDate, sortedEvents } from "@/lib/events";

export default function EventScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Grey out an arrow when there's nothing more in that direction
  const updateEnds = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
  };

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, []);

  // Scroll by one page: the visible width plus the 24px gap, i.e. 3 cards on desktop
  const scroll = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: (track.clientWidth + 24) * dir, behavior: "smooth" });
  };

  return (
    <section id="events" className="bg-sky-light px-4 py-20 md:px-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-display text-3xl uppercase md:text-4xl">Events</h2>
        <div className="flex gap-2">
          <ScrollButton onClick={() => scroll(-1)} disabled={atStart} label="Previous events">
            <ArrowLeft size={18} />
          </ScrollButton>
          <ScrollButton onClick={() => scroll(1)} disabled={atEnd} label="Next events">
            <ArrowRight size={18} />
          </ScrollButton>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateEnds}
        className="scrollbar-thin flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {sortedEvents.map((event) => (
          <article
            key={event.id}
            className="w-full shrink-0 snap-start overflow-hidden rounded-2xl bg-card sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            {event.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={event.image} alt={event.title} className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-sky to-sky-deep text-white">
                <Music size={56} strokeWidth={1.5} />
              </div>
            )}
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-deep">
                {formatEventDate(event.date)}
                {event.time && <span className="font-medium normal-case"> · {event.time}</span>}
              </p>
              <h3 className="mb-2 mt-1 text-lg font-semibold">{event.title}</h3>
              {event.location && (
                <p className="mb-2 flex items-center gap-1 text-sm font-medium">
                  <MapPin size={14} />
                  {event.location}
                </p>
              )}
              {event.description && <p className="text-sm text-ink-soft">{event.description}</p>}
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
  disabled,
  label,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink transition hover:border-white hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:border-ink disabled:hover:text-ink"
    >
      {children}
    </button>
  );
}
