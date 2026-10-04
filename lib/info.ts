import { CalendarClock, Footprints, Guitar, Music, LucideIcon } from "lucide-react";
import { BAND_SHOW, MEETING, RECITAL } from "@/lib/events";

export interface InfoCard {
  id: number;
  icon: LucideIcon;
  label: string;
  title: string;
  details: string[];
  link?: { label: string; href: string };
}

export const infoCards: InfoCard[] = [
  {
    id: 1,
    icon: CalendarClock,
    label: "Next Meeting",
    title: "General Meeting",
    details: [`Monday, Oct 12, 2026 · ${MEETING.time}`, MEETING.location, "Every other Monday"],
  },
  {
    id: 2,
    icon: Music,
    label: "Upcoming Event",
    title: "Senior Home Recital",
    details: [`Saturday, Oct 24, 2026 · ${RECITAL.time}`, RECITAL.location],
  },
  {
    id: 3,
    icon: Guitar,
    label: "Upcoming Event",
    title: "Bandshow",
    details: [`Saturday, Nov 7, 2026 · ${BAND_SHOW.time}`],
  },
  {
    id: 4,
    icon: Footprints,
    label: "Upcoming Event",
    title: "Alzheimer’s Walk",
    details: ["Saturday, Nov 14, 2026", "Chase Palm Park"],
    link: { label: "See all events", href: "#events" },
  },
];
