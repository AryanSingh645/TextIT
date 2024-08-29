import HeroSection from "@/components/HeroSection";
import { InfoScroll } from "@/components/InfoScroll";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
          <HeroSection/>
          <InfoScroll/>
      </main>
  );
}
