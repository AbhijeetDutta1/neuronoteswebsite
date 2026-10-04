import { CalendarClock, Megaphone, Music, LucideIcon } from "lucide-react";

export interface InfoCard {
  id: number;
  icon: LucideIcon;
  label: string;
  title: string;
  details: string[];
  link?: { label: string; href: string };
}

// TODO: placeholder info — replace with the real meeting, event, and announcement details.
export const infoCards: InfoCard[] = [
  {
    id: 1,
    icon: CalendarClock,
    label: "Next Meeting",
    title: "General Meeting",
    details: ["Tuesday, Oct 13 · 7:00 PM", "Location TBD"],
  },
  {
    id: 2,
    icon: Music,
    label: "Upcoming Event",
    title: "Event Name",
    details: ["Thursday, Oct 15 · 6:00 PM", "Location TBD"],
    link: { label: "See all events", href: "#events" },
  },
  {
    id: 3,
    icon: Megaphone,
    label: "Announcements",
    title: "Announcement Title",
    details: ["Short note for members, like sign-up deadlines or volunteer opportunities."],
  },
];
