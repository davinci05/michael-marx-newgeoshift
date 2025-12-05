import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-black text-white">
      {/* Hero-ish contact section */}
      <section className="relative flex-1 overflow-hidden">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="assets/cinematic/ambarli-port-2409790_1920.jpg"
            alt="Global Port"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left text block */}
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-teal-400">
                Contact
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Let&apos;s design your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400">
                  next supply shift
                </span>
                .
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Whether you&apos;re exploring new sourcing regions, reacting
                to geopolitical risk, or rethinking your entire global network:
                this is where the conversation starts.
              </p>

              <div className="space-y-3 text-sm text-gray-300 mt-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
                  <span>
                    Share your current situation, timelines, and the markets
                    you&apos;re most concerned about.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
                  <span>
                    I respond personally — usually with a few concrete angles
                    we can explore together.
                  </span>
                </div>
              </div>

              <div className="pt-4 text-xs md:text-sm text-gray-400">
                Prefer direct outreach?{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-teal-300 hover:text-teal-200 underline-offset-4 hover:underline"
                >
                  hello@example.com
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer – standard (not as slide here) */}
      <Footer />
    </div>
  );
};

export default ContactPage;
