import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/20 px-4 py-10 text-center text-sm text-ink-soft">
      <p>NeuroNotes at UC Santa Barbara</p>
      <p className="mt-1">
        {site.socials.map((social, i) => (
          <span key={social.label}>
            {i > 0 && " · "}
            <a
              href={social.href}
              className="hover:text-white"
              // Open external sites (like Instagram) in a new tab; leave mailto links alone
              {...(social.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {social.label}
            </a>
          </span>
        ))}
      </p>
    </footer>
  );
}
