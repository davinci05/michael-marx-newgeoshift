// src/pages/Home.tsx
import React from "react";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-black text-white ">
      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth">

{/* SLIDE 1 – Hero (Updated to match screenshot text + centered layout) */}
<section
  id="slide-1"
  className="snap-start min-h-full w-full relative overflow-hidden flex items-center justify-center"
>
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="./assets/cinematic/river.jpg" // "tokyo-street-1.jpg" // <-- use your actual image path
      alt="NEO GEO SHIFT Consulting"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
  </div>

  {/* Content centered */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
    <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
      NEW.GEO.SHIFT CONSULTING
    </h1>

    <h2 className="text-xl md:text-3xl font-semibold text-gray-200">
      Resilient Supply Strategies for a Changing<br className="hidden md:block" />
      World Order
    </h2>

    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
      We help businesses{" "}
      <span className="font-semibold text-orange-400">discover &amp; minimize geopolitical risks</span>{" "}
      and build{" "}
      <span className="font-semibold text-orange-400">future-proof supply chains</span> — through
      tailored analysis, smart scenario planning, and strategic action.
    </p>

    <div className="pt-4">
      <a
        href="/contact"
        className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full 
                   hover:bg-gray-100 shadow-xl transition-all duration-300 transform 
                   hover:scale-105"
      >
        CONTACT ME &amp; FIND OUT MORE!
      </a>
    </div>
  </div>
</section>


        {/* SLIDE 2 – Services (cards 1 & 2) */}
        <section
          id="slide-2"
          className="snap-start min-h-full w-full py-16 md:py-20 bg-black"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                How we can help?
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 font-light uppercase tracking-wider">
                STRATEGIC SUPPORT ACROSS THE ENTIRE SUPPLY CHAIN
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/cinematic/city-4864747_1920.jpg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Strategy Development"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Strategy Development &amp; Implementation
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We define clear{" "}
                    <span className="text-white font-semibold">target</span>{" "}
                    states,{" "}
                    <span className="text-white font-semibold">
                      actionable measures
                    </span>
                    , and support the{" "}
                    <span className="text-white font-semibold">
                      implementation
                    </span>{" "}
                    — to build a{" "}
                    <span className="text-white font-semibold">
                      resilient, sustainable
                    </span>
                    , and{" "}
                    <span className="text-white font-semibold">
                      future-ready supply chain
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/cinematic/buildings-673087_1920.jpg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Global Network"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Global Network &amp; Market Access
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-white font-semibold">Leverage</span>{" "}
                    our{" "}
                    <span className="text-white font-semibold">
                      global partner ecosystem
                    </span>{" "}
                    — including{" "}
                    <span className="text-white font-semibold">
                      Chambers of Commerce, trade associations
                    </span>
                    , and sophisticated{" "}
                    <span className="text-white font-semibold">suppliers</span>{" "}
                    across CEE, LATAM, and Asia — to{" "}
                    <span className="text-white font-semibold">access</span> new{" "}
                    <span className="text-white font-semibold">
                      sourcing regions quickly and safely
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 3 – Services (cards 3 & 4) */}
        <section
          id="slide-3"
          className="snap-start min-h-full w-full py-16 md:py-20 bg-black"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                How we can help?
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 font-light uppercase tracking-wider">
                DE-RISKING YOUR SUPPLY NETWORK
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/cinematic/port-2970859_1920.jpg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Supply Chain Analysis"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Supply Chain &amp; Product Analysis
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Along the{" "}
                    <span className="text-white font-semibold">
                      entire value chain
                    </span>{" "}
                    we{" "}
                    <span className="text-white font-semibold">analyze</span>{" "}
                    your{" "}
                    <span className="text-white font-semibold">
                      products, supplier base
                    </span>
                    , and{" "}
                    <span className="text-white font-semibold">
                      geographic dependencies
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/cinematic/river-7187070_1920.jpg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Risk Assessment"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Risk Assessment &amp; Scenario Planning
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We{" "}
                    <span className="text-white font-semibold">
                      identify geopolitical, economic, and operational risks
                    </span>{" "}
                    and develop robust{" "}
                    <span className="text-white font-semibold">scenarios</span>{" "}
                    to prepare for{" "}
                    <span className="text-white font-semibold">
                      future developments
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* SLIDE 4 – Challenges (Bigger + Hoverable + Centered) */}
<section
  id="slide-4"
  className="snap-start min-h-full w-full bg-gradient-to-b from-black to-gray-900 flex items-center"
>
  <div className="max-w-[110rem] mx-auto px-8 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

      {/* Item Template */}
      {[
        {
          title: "Single-region dependency",
          desc: "60–80 % of annual spend still tied to one or two geographies",
          quote: "“Changing supply chains will disrupt production.”",
          img: "/assets/cinematic/fragile.jpg",
        },
        {
          title: "Internal inertia",
          desc: "Legacy processes and “good-enough” suppliers block transformation.",
          quote: "“We’ve worked with these suppliers for years — they’re reliable.”",
          img: "/assets/cinematic/fragile.jpg",
        },
        {
          title: "Talent bandwidth",
          desc: "Procurement teams are firefighting, not strategizing.",
          quote: "“We tried diversification once — it was too complicated.”",
          img: "/assets/cinematic/fragile.jpg",
        },
        {
          title: "Leadership hesitation",
          desc: "Decision-makers underestimate the cost of inaction.",
          quote: "“We don’t have resources to explore new regions.”",
          img: "/assets/cinematic/fragile.jpg",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group space-y-6 transform transition-all duration-300 
                     hover:-translate-y-3 hover:scale-[1.03]"
        >
          {/* Image */}
          <div
            className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl 
                       transition-all duration-300 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 
                         group-hover:scale-110"
            />
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-snug">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed">
            {item.desc}
          </p>

          {/* Quote */}
          <p className="text-gray-400 italic text-base">
            {item.quote}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

        {/* SLIDE 5 – World Order Changing */}
        <section
          id="slide-5"
          className="snap-start min-h-full w-full relative py-20 md:py-32 overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="assets/cinematic/hot-air-balloon-7217175_1920.jpg"
              className="w-full h-full object-cover opacity-40"
              alt="World Order"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.1em]">
              WORLD ORDER
              <br />
              IS CHANGING
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A new global reality demands new supply chain thinking.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Are you ready?
            </p>
            <div className="pt-8">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Find out more
              </a>
            </div>
          </div>
        </section>

        {/* SLIDE 6 – Final CTA */}
        <section
          id="slide-6"
          className="snap-start min-h-full w-full relative py-16 md:py-24 overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="/assets/cinematic/ambarli-port-2409790_1920.jpg"
              className="w-full h-full object-cover opacity-30"
              alt="Contact"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-teal-900/50" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400">
                NEW.GEO.SHIFT
              </span>{" "}
              CONSULTING
            </h2>
            <p className="text-2xl md:text-3xl font-light">
              Resilient Supply Strategies for a Changing World Order
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We help businesses{" "}
              <span className="text-white font-semibold">
                discover &amp; minimize geopolitical risks
              </span>{" "}
              and build{" "}
              <span className="text-white font-semibold">
                future-proof supply chains
              </span>{" "}
              — through tailored analysis, smart scenario planning, and
              strategic action.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wider"
              >
                Contact Me &amp; Find Out More!
              </a>
            </div>
          </div>
        </section>

        {/* SLIDE 7 – Footer as slide */}
        <div id="slide-7">
          <Footer asSlide />
        </div>
      </main>
    </div>
  );
};

export default Home;
