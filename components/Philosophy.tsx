import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Layered board as subtle background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <Image
          src="/assets/Layered Board-1.png"
          alt=""
          width={800}
          height={600}
          className="h-[120%] w-auto object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          {/* Decorative quote marks */}
          <div className="mb-8 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-brand-lime/20 flex items-center justify-center">
              <svg className="h-8 w-8 text-brand-teal" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          <blockquote className="text-2xl font-light text-brand-dark/80 sm:text-3xl lg:text-4xl leading-relaxed">
            <span className="italic">Surfing is the art of essentials...</span>
            <br />
            <span className="italic">No excess. No friction.</span>
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-brand-lime" />
            <p className="text-xl font-medium text-brand-dark sm:text-2xl">
              Finance should feel the same.
            </p>
            <span className="h-px w-12 bg-brand-lime" />
          </div>

          <div className="mt-12">
            <div className="inline-flex items-center gap-3 rounded-full bg-brand-dark px-8 py-4">
              <span className="text-lg font-bold uppercase tracking-[0.2em] text-white">
                UNLAYER
              </span>
              <span className="h-4 w-px bg-white/30" />
              <span className="text-lg font-medium text-brand-lime">
                no layers, just flow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
