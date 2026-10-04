import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/20 px-4 py-10 text-center text-sm text-ink-soft">
      <p>NeuroNotes at UC Santa Barbara</p>
      <p className="mt-1">
        {site.socials.map((social, i) => (
          <span key={social.label}>
            {i > 0 && " · "}
            <a href={social.href} className="hover:text-white">
              {social.label}
            </a>
          </span>
        ))}
      </p>
    </footer>
  );
}
