import type { Metadata } from "next";
import OfficerProfile from "@/components/officers/OfficerProfile";
import { officers } from "@/lib/officers";

export const metadata: Metadata = {
  title: "Officers | NeuroNotes at UCSB",
};

export default function OfficersPage() {
  return (
    <main className="animate-fade-in-up px-4 pb-24 pt-12 md:px-16">
      <h1 className="font-display text-5xl uppercase md:text-6xl">Meet the Officers</h1>
      <div className="mt-2 h-1 w-16 bg-ink" />

      <div className="mt-14 grid gap-x-16 gap-y-16 lg:grid-cols-2">
        {officers.map((officer) => (
          <OfficerProfile key={officer.id} officer={officer} />
        ))}
      </div>
    </main>
  );
}
