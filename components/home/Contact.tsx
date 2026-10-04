"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, XCircle } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border-2 border-ink/10 bg-white px-3 py-2.5 text-ink outline-none transition-colors focus:border-sky-deep";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="px-4 py-20 md:px-16">
      <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="font-display text-3xl uppercase md:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Questions, collaborations, or want to get involved? Send us a message and we&apos;ll get back to you.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 font-semibold hover:text-white"
          >
            <Mail size={18} />
            {site.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-card p-6 md:p-8">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
              <CheckCircle2 size={18} />
              Thanks! We&apos;ll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              <XCircle size={18} />
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
