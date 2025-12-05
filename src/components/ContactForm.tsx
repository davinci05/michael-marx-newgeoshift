import React from "react";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const message = (data.get("message") as string) || "";

    const subject = encodeURIComponent(`Contact from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl bg-slate-800/80 border border-slate-600 p-8 md:p-10 space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold">Let&apos;s talk.</h2>
      <p className="text-sm md:text-base text-slate-300">
        Drop a message and your mail client will open with the details
        pre-filled.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-200"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-xl bg-slate-900 border border-slate-600 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl bg-slate-900 border border-slate-600 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-xl bg-slate-900 border border-slate-600 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Tell us about your project..."
          />
        </div>

        <div className="pt-2 flex items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-sky-400 text-slate-950 text-sm md:text-base font-semibold hover:bg-sky-300 transition"
          >
            Send via email
          </button>

          <a
            href="mailto:hello@example.com"
            className="text-xs md:text-sm text-slate-300 underline-offset-4 hover:underline"
          > 
            Or email us directly
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
