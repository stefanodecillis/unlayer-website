import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/Unlayer Icon-1.png"
              alt="Unlayer"
              width={32}
              height={32}
              className="h-8 w-8 opacity-80"
            />
            <div className="h-4 w-px bg-white/20" />
            <span className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Unlayer. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@unlayer.xyz"
              className="text-sm text-white/50 hover:text-brand-lime transition-colors"
            >
              info@unlayer.xyz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
