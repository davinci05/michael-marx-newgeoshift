// FullPageSlides.tsx
import React from "react";

const slides = [
  { id: "slide-1", label: "Home" },
  { id: "slide-2", label: "Services" },
  { id: "slide-3", label: "Cases 1" },
  { id: "slide-4", label: "Cases 2" },
  { id: "slide-5", label: "Story" },
  { id: "slide-6", label: "Contact" },
];

const FullPageSlides: React.FC = () => {
  const scrollToSlide = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Contact from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="h-screen flex flex-col bg-slate-950 text-white">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div
          className="font-semibold tracking-tight cursor-pointer"
          onClick={() => scrollToSlide("slide-1")}
        >
          ShiftBrand
        </div>
        <nav className="flex gap-3 md:gap-6 text-sm md:text-base">
          {slides.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSlide(s.id)}
              className="uppercase tracking-wide text-xs md:text-sm text-slate-300 hover:text-white transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main scrollable area with snap */}
      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Slide 1 – Landing */}
        <section
          id="slide-1"
          className="snap-start min-h-full w-full flex items-center justify-center bg-slate-900"
        >
          <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
            <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-slate-400">
              Global Supply Futures
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Where the Shift
              <br />
              <span className="text-sky-300">Happens.</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-lg max-w-xl mx-auto">
              Vertical slides, sticky navigation, and smooth scrolling — ready
              for your content.
            </p>
            <button
              onClick={() => scrollToSlide("slide-2")}
              className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 border border-sky-400 text-sm md:text-base font-medium hover:bg-sky-400 hover:text-slate-900 transition"
            >
              Find out more
            </button>
          </div>
        </section>

        {/* Slide 2 – Big title + 4 quadratic items in a column */}
        <section
          id="slide-2"
          className="snap-start min-h-full w-full flex items-center justify-center bg-sky-900"
        >
          <div className="flex flex-col items-center justify-center gap-10 px-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-center">
              New Centers of Resilience
            </h2>
            <div className="flex flex-col gap-6 items-center">
              {["Turkey", "India", "ASEAN", "Nearshoring"].map((label) => (
                <div
                  key={label}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-2xl border border-sky-300/60 bg-sky-800/40 flex items-center justify-center text-center text-sm md:text-base font-medium hover:scale-105 hover:-translate-y-1 hover:bg-sky-700/60 transition-transform transition-colors shadow-lg shadow-slate-950/60"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 3 – 2 hoverable wide items */}
        <section
          id="slide-3"
          className="snap-start min-h-full w-full flex items-center justify-center bg-emerald-900"
        >
          <div className="w-[90%] max-w-5xl space-y-8">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Case Cluster I
            </h2>

            {[1, 2].map((i) => (
              <article
                key={i}
                className="group w-full mx-auto rounded-3xl bg-emerald-800/60 border border-emerald-400/60 overflow-hidden hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-950/60 transition"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-video bg-emerald-700/60 flex items-center justify-center text-xs uppercase tracking-wide">
                    Placeholder Image {i}
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8 space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      Resilient Supply Node {i}
                    </h3>
                    <p className="text-sm md:text-base text-emerald-100/90">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante venenatis dapibus posuere
                      velit aliquet.
                    </p>
                    <button className="mt-2 text-sm font-medium text-emerald-200 group-hover:text-white underline-offset-4 group-hover:underline">
                      Learn more
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Slide 4 – 2 hoverable wide items */}
        <section
          id="slide-4"
          className="snap-start min-h-full w-full flex items-center justify-center bg-indigo-900"
        >
          <div className="w-[90%] max-w-5xl space-y-8">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Case Cluster II
            </h2>

            {[3, 4].map((i) => (
              <article
                key={i}
                className="group w-full mx-auto rounded-3xl bg-indigo-800/60 border border-indigo-400/60 overflow-hidden hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-950/60 transition"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-video bg-indigo-700/60 flex items-center justify-center text-xs uppercase tracking-wide">
                    Placeholder Image {i}
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8 space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      Competitive Edge {i}
                    </h3>
                    <p className="text-sm md:text-base text-indigo-100/90">
                      Cras mattis consectetur purus sit amet fermentum. Donec
                      ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <button className="mt-2 text-sm font-medium text-indigo-200 group-hover:text-white underline-offset-4 group-hover:underline">
                      View details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Slide 5 – Like your screenshot (solid bg color for now) */}
        <section
          id="slide-5"
          className="snap-start min-h-full w-full flex items-center justify-center bg-slate-800"
        >
          <div className="w-[90%] max-w-4xl mx-auto text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Where the Shift
              <br />
              Happens.
            </h1>
            <p className="text-2xl md:text-3xl font-medium">
              Turkey. India. ASEAN.
            </p>
            <p className="text-base md:text-xl text-slate-200 max-w-xl">
              The new centers of resilient, competitive supply.
            </p>
            <button className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-white text-slate-900 text-sm md:text-base font-medium hover:bg-slate-200 transition">
              Find out more
            </button>
          </div>
        </section>

        {/* Slide 6 – Contact form with mailto link */}
        <section
          id="slide-6"
          className="snap-start min-h-full w-full flex items-center justify-center bg-slate-900"
        >
          <div className="w-[90%] max-w-xl mx-auto rounded-3xl bg-slate-800/80 border border-slate-600 p-8 md:p-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Let&apos;s talk.
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              Drop a message and your mail client will open with the details
              pre-filled.
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-4">
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

                {/* Optional plain mailto link */}
                <a
                  href="mailto:hello@example.com"
                  className="text-xs md:text-sm text-slate-300 underline-offset-4 hover:underline"
                >
                  Or email us directly
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FullPageSlides;
