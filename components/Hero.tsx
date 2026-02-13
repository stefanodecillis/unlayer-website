import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-brand-lime/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-8 py-16 lg:grid-cols-5 lg:gap-12">
          {/* Text content - takes 3 columns */}
          <div className="flex flex-col justify-center lg:col-span-3">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              Rewiring Access to{" "}
              <span className="text-gradient">Capital Markets</span>
            </h1>

            <p className="mt-6 text-xl text-brand-dark/70 lg:text-2xl max-w-xl">
              From Issuance to Liquidity — Seamlessly
            </p>

            <p className="mt-4 text-lg font-semibold text-brand-teal tracking-wide">
              Smart. Accessible. Compliant.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#why"
                className="inline-flex items-center justify-center rounded-full bg-brand-dark px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-brand-dark/90 hover:shadow-xl hover:scale-105"
              >
                Discover More
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Surfboard - takes 2 columns */}
          <div className="relative flex items-center justify-center lg:col-span-2 lg:justify-end">
            <div className="relative">
              {/* Glow behind surfboard */}
              <div className="absolute inset-0 bg-brand-lime/30 blur-3xl rounded-full scale-75" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Big-Board.svg"
                alt="Unlayer surfboard representing seamless capital market access"
                width={400}
                height={500}
                className="relative h-auto w-full max-w-xs object-contain lg:max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
