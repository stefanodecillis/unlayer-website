export default function Contact() {
  return (
    <section className="relative bg-gradient-to-b from-brand-blue-gray to-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent" />
      <div className="absolute top-1/2 left-10 h-48 w-48 rounded-full bg-brand-lime/10 blur-3xl" />
      <div className="absolute top-1/2 right-10 h-48 w-48 rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl text-balance">
          Let&apos;s talk about the future of{" "}
          <span className="text-gradient">capital markets</span>
        </h2>

        <p className="mt-6 text-lg text-brand-dark/60 max-w-2xl mx-auto">
          We&apos;re building compliant infrastructure for tokenized securities. Reach out to learn more.
        </p>

        <div className="mt-10">
          <a
            href="mailto:info@unlayer.xyz"
            className="group inline-flex items-center justify-center rounded-full bg-brand-dark px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-brand-dark/90 hover:shadow-2xl hover:scale-105 glow-lime"
          >
            <svg
              className="mr-3 h-5 w-5 text-brand-lime"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            info@unlayer.xyz
            <svg
              className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-brand-dark/40">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <address className="not-italic">
            Via Ticino 30, 20900 Monza, Italy
          </address>
        </div>
      </div>
    </section>
  );
}
