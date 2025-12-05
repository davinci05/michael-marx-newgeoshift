import React from "react";
import Footer from "../components/Footer";

const MarketsPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-white overflow-y-auto">
      <main>
        {/* Hero */}
        <section className="relative w-full">
          <div className="h-[450px] md:h-[550px] w-full bg-gray-900 relative overflow-hidden">
            <img
              src="assets/markets/placeholder-hero.jpg"
              className="w-full h-full object-cover opacity-60"
              alt="Global Markets"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <div className="max-w-2xl space-y-6">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-400">
                  Markets in Transition
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Navigating the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    New Global Order
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The global economic landscape is undergoing a significant
                  realignment. Geopolitical fragmentation, supply chain
                  vulnerabilities, and a shift from globalization to
                  regionalization demand new strategies.
                </p>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <span className="text-gray-300">
                      Surge in protectionist measures &amp; trade barriers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                    <span className="text-gray-300">
                      Addressing supply chain risks at the board level
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
                    <span className="text-gray-300">
                      Emergence of new hubs: ASEAN, India, Turkey
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Intro bar */}
        <section className="border-b border-gray-900 bg-black py-12">
          <div className="max-w-6xl mx-auto px-6">
            <p className="max-w-4xl text-lg text-gray-400 leading-relaxed border-l-4 border-blue-600 pl-6">
              <span className="text-white font-semibold">NEWGEOSHIFT</span>{" "}
              empowers companies to pragmatically manage global risks and build
              scalable sourcing strategies in key &quot;China+1&quot; regions.
            </p>
          </div>
        </section>

        {/* Regions sections (ASEAN / India / Turkey) */}
        <div className="bg-black space-y-24 py-20">
          {/* ASEAN */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-25 blur transition duration-500 group-hover:opacity-50" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-900 flex items-center justify-center text-gray-700">
                  ASEAN Image Placeholder
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                  Manufacturing
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  ASEAN: The Next Factory of the World
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  ASEAN is the most dynamic &quot;China+1&quot; region for
                  global sourcing. With over 680 million people and strong
                  growth markets like Vietnam, Indonesia, and Malaysia, it
                  offers immense opportunities for diversification.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We help you navigate the fragmented landscape, leverage trade
                  agreements like RCEP, and identify the right local partners
                  for your business.
                </p>
              </div>
            </div>
          </section>

          {/* India */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="grid items-center gap-12 md:grid-cols-2 md:grid-flow-dense">
              <div className="space-y-6 md:col-start-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400 uppercase tracking-widest">
                  Scale &amp; Growth
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  INDIA: Sourcing Scale Meets Ambition
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  India is the fastest-growing large economy. With a population
                  of 1.4 billion and world-class capabilities in pharma,
                  chemicals, and engineering, India combines scale with rising
                  reliability.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The government is pushing hard on infrastructure. We turn
                  India&apos;s complexity into your competitive advantage – from
                  sourcing to full market entry.
                </p>
              </div>
              <div className="relative group md:col-start-2">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 opacity-25 blur transition duration-500 group-hover:opacity-50" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-900 flex items-center justify-center text-gray-700">
                  India Image Placeholder
                </div>
              </div>
            </div>
          </section>

          {/* Turkey */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-600 opacity-25 blur transition duration-500 group-hover:opacity-50" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-900 flex items-center justify-center text-gray-700">
                  Turkey Image Placeholder
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400 uppercase tracking-widest">
                  Strategic Bridge
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  TURKEY: Bridging Continents
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Turkey stands at the strategic crossroads of Europe and Asia.
                  Short supply routes, a Customs Union with the EU, and strong
                  industries (automotive, textiles) make it the ideal
                  nearshoring hub.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Whether optimizing supply chains or setting up a regional
                  procurement office – we deliver the insights and network for
                  your success.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default MarketsPage;
