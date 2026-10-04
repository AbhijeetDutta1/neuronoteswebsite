export interface ClubEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  // Path under /public, e.g. "/images/events/open-mic.jpg"
  image?: string;
  link?: string;
}

// TODO: placeholder events — replace with real ones.
export const events: ClubEvent[] = [
  {
    id: 1,
    title: "Event Name",
    date: "Oct 15, 2026",
    description: "Short description of the event goes here.",
  },
  {
    id: 2,
    title: "Event Name",
    date: "Oct 29, 2026",
    description: "Short description of the event goes here.",
  },
  {
    id: 3,
    title: "Event Name",
    date: "Nov 12, 2026",
    description: "Short description of the event goes here.",
  },
  {
    id: 4,
    title: "Event Name",
    date: "Nov 26, 2026",
    description: "Short description of the event goes here.",
  },
  {
    id: 5,
    title: "Event Name",
    date: "Dec 3, 2026",
    description: "Short description of the event goes here.",
  },
];
