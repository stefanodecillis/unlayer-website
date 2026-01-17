"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-1">
            <Image
              src="/assets/Unlayer Icon-1.png"
              alt="Unlayer"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="text-xl font-bold tracking-tight text-brand-dark">
              LAYER
            </span>
          </a>
          <a
            href="mailto:info@unlayer.xyz"
            className="rounded-full bg-brand-lime px-6 py-2.5 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-lime/80 hover:shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </nav>
    </header>
  );
}
