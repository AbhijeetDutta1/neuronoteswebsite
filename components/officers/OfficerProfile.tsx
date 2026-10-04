import type { Officer } from "@/lib/officers";

// One officer: role/name/studies/bio on the left (40%), photo on the right (60%).
// Both columns are top-aligned. Stacks on mobile.
export default function OfficerProfile({ officer }: { officer: Officer }) {
  return (
    <article className="grid items-start gap-6 sm:grid-cols-[2fr_3fr]">
      <div>
        <p className="text-base font-semibold uppercase tracking-wide text-white">{officer.role}</p>
        <h2 className="mt-1 font-display text-3xl uppercase leading-tight md:text-4xl">{officer.name}</h2>
        {officer.studies && <p className="mt-3 font-medium">{officer.studies}</p>}
        {officer.track && (
          <p className="mt-2 inline-block rounded-full bg-ink px-3 py-1 text-sm font-semibold text-white">
            {officer.track}
          </p>
        )}

        <div className="mt-5 space-y-3 leading-relaxed text-ink-dark">
          {officer.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      {officer.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={officer.image}
          alt={officer.name}
          className="order-first aspect-square w-full rounded-2xl object-cover object-[center_20%] sm:order-none"
        />
      ) : (
        <div className="placeholder order-first aspect-square w-full rounded-2xl sm:order-none">Photo</div>
      )}
    </article>
  );
}
