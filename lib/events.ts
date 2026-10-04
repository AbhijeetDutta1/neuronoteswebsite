export interface ClubEvent {
  id: number;
  title: string;
  // YYYY-MM-DD, or leave out for "Date TBD". The scroller sorts newest first
  // (TBD events at the front), so list order doesn't matter.
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  // Path under /public, e.g. "/images/events/open-mic.jpg". Without one, the card shows a music icon tile.
  image?: string;
  link?: string;
}

// Usual times and places for recurring events
export const MEETING = { time: "7:00 – 8:00 PM", location: "Phelps Hall 1444" };
export const RECITAL = { time: "6:30 – 7:30 PM", location: "Friendship Manor, Isla Vista" };
export const BAND_SHOW = { time: "9:00 PM – 12:00 AM", location: "6732 Del Playa" };

export const events: ClubEvent[] = [
  {
    id: 8,
    title: "Alzheimer’s Walk",
    date: "2026-11-14",
    location: "Chase Palm Park",
    image: "/images/events/alzheimers-walk-2026.jpg",
  },
  {
    id: 1,
    title: "Band Show Fundraiser for Alzheimer’s Awareness",
    date: "2026-11-07",
    ...BAND_SHOW,
    image: "/images/events/bandshow.jpg",
  },
  {
    id: 2,
    title: "Senior Home Recital",
    date: "2026-10-24",
    ...RECITAL,
    image: "/images/events/senior-home-recital.jpg",
  },
  {
    id: 3,
    title: "General Meeting",
    date: "2026-10-12",
    ...MEETING,
    description: "Every other Monday. Come meet the club and hear what's coming up!",
    image: "/images/events/general-meeting.jpg",
  },
  {
    id: 6,
    title: "First General Meeting",
    date: "2026-09-28",
    ...MEETING,
    image: "/images/events/first-general-meeting-sept-28.jpg",
  },
  {
    id: 4,
    title: "Band Show Fundraiser for Alzheimer’s Awareness",
    date: "2026-09-26",
    ...BAND_SHOW,
    image: "/images/events/band-show-fundraiser-sept-26.jpg",
  },
  {
    id: 5,
    title: "Senior Home Performance",
    date: "2026-09-26",
    ...RECITAL,
    image: "/images/events/senior-home-performance-sept-26.jpg",
  },
  {
    id: 7,
    title: "Alzheimer’s Walk",
    date: "2025-11-14",
    location: "Chase Palm Park",
    image: "/images/events/alzheimers-walk-2025.jpg",
  },
];

// Newest first, with TBD events ahead of everything
export const sortedEvents = [...events].sort((a, b) => (b.date ?? "9999").localeCompare(a.date ?? "9999"));

// "2026-11-07" → "Sat, Nov 7, 2026"
export function formatEventDate(date?: string) {
  if (!date) return "Date TBD";
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
