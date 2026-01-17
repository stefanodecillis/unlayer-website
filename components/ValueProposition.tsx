import Image from "next/image";

const values = [
  {
    icon: "/assets/Icon 1-1.png",
    title: "Unlock Capital",
    description: "Direct access to Retail and Professional investors",
    accent: "from-brand-teal/20 to-brand-teal/5",
  },
  {
    icon: "/assets/Icon 2-1.png",
    title: "Enable Liquidity",
    description: "For traditionally illiquid markets",
    accent: "from-brand-lime/30 to-brand-lime/5",
  },
  {
    icon: "/assets/Icon 3-1.png",
    title: "Eliminate Friction",
    description: "No costly intermediaries",
    accent: "from-brand-teal/20 to-brand-teal/5",
  },
];

export default function ValueProposition() {
  return (
    <section id="why" className="relative bg-brand-dark py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-brand-lime/50 to-transparent" />
      <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-brand-lime/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-lime mb-4">
            Our Value
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Unlayer?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Tokenized securities, simplified
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 card-hover overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${value.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative">
                {/* Icon container with glow */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-brand-lime/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-lime transition-colors">
                  {value.title}
                </h3>
                <p className="mt-3 text-white/60 group-hover:text-white/80 transition-colors">
                  {value.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-brand-lime opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
