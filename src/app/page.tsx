
import RoadToHoneySection from '@/components/RoadToHoneySection';
import StepByStepToHoneySection from '@/components/StepByStepToHoneySection';
import Image from 'next/image';
import React from 'react';

export default function LandingPage() {
  return (
    <main className="w-full ">

      <section className="relative w-full h-screen">
        {/* Bakgrundsbild */}
        <Image
          src="/images/rapsfalt.jpg"
          alt="rapsfält"
          fill
          className="object-cover "
          priority
        />

        {/* Overlay för mörkare textkontrast (valfritt) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text i mitten */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            IDAS SOMMARHONUNG
          </h1>
          <p className="text-xl md:text-2xl text-white mt-4 max-w-2xl">
            Naturlig, hållbar och lokalproducerad honung.
          </p>
        </div>
      </section>
      {/* Vägen till vår honnung */}
      <RoadToHoneySection />

      {/* Honey Production Steps Section */}
      <StepByStepToHoneySection />

      <section className="flex flex-col items-center gap-4 text-center h-screen justify-center bg-[/images/bikaka.jpg] bg-cover bg-center bg-no-repeat">

      </section>
    </main>
  );
}