import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from './ui/moving-border';
import { IconArrowBarToRight } from '@tabler/icons-react';

function HeroSection() {
  return (
      <BackgroundBeamsWithCollision className="min-h-screen flex flex-col gap-10">
          <h2 className="text-2xl flex flex-col relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight ">
              What&apos;s more fun than texting?{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                  <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                      <span className="">Explore TextIT.</span>
                  </div>
                  <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                      <span className="">Explore TextIT.</span>
                  </div>
              </div>
          </h2>
          <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
          >
              Try Now
              <IconArrowBarToRight className="ml-3" />
          </Button>
      </BackgroundBeamsWithCollision>
  );
}

export default HeroSection