import { infoCards } from "@/lib/info";

export default function ImportantInfo() {
  return (
    <section id="info" className="px-4 pb-20 pt-8 md:px-16">
      <h2 className="mb-8 font-display text-3xl uppercase md:text-4xl">Important Info</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {infoCards.map(({ id, icon: Icon, label, title, details, link }) => (
          <article key={id} className="rounded-2xl bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-sky-deep">
              <Icon size={18} />
              {label}
            </div>
            <h3 className="mb-2 mt-3 text-xl font-semibold">{title}</h3>
            {details.map((line) => (
              <p key={line} className="text-ink-soft">
                {line}
              </p>
            ))}
            {link && (
              <a href={link.href} className="mt-4 inline-block text-sm font-semibold text-sky-deep hover:underline">
                {link.label} →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
