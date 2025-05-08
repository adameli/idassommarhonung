import Hexagon from '@/components/Hexagon';
import React from 'react';

export default function LandingPage() {
  return (
    <main className="w-full max-w-5xl flex flex-col items-center gap-8">
      <section className="flex flex-col items-center gap-4 text-center h-screen justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-orpheus">Idas Sommarhonung</h1>
        <p className="text-xl md:text-2xl text-gray-700 mt-4 text-center">
          Naturlig, hållbar och lokalproducerad honung.
        </p>
        <img src="/images/honey-jar.png" alt="Honungsburk" className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg" />
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200">
          Köp nu
        </button>
      </section>
      {/* Image and Text Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-16">
        <img src="/images/bikupajobb2.JPEG" alt="Bin och blommor" className="w-full max-w-md rounded-2xl shadow-lg" />
        <div className="flex flex-col gap-4 max-w-lg">
          <h2 className="text-4xl font-bold text-gray-900">Vägen till vår honung</h2>
          <p className="text-lg text-gray-700">
            Från blomma till burk – vår honung produceras med omsorg för både natur och bin.
            Upptäck resan som börjar med flitiga bin och slutar med gyllene honung.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200">
            Läs mer
          </button>
        </div>
      </section>

      {/* Honey Production Steps Section */}
      <section className="flex flex-wrap justify-center gap-6 py-16">
        {['Blommor', 'Nektarinsamling', 'Bivaxkakor', 'Honungsfyllning', 'Försegling', 'Färdig produkt'].map((step, index) => (
          <Hexagon key={index} >
            {step}
          </Hexagon>
        ))}
      </section>

      <section className="flex flex-col items-center gap-4 text-center h-screen justify-center bg-[/images/bikaka.jpg] bg-cover bg-center bg-no-repeat">

      </section>
    </main>
  );
}