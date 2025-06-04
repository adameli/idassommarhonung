import Image from 'next/image'
import React from 'react'


export default function RoadToHoneySection() {
    return (
        <section className="section-container bg-[#fdf8e1]">
            <div className="div-container">
                <div className="div-container-flex">
                    <Image
                        src="/images/bikupajobb2.JPEG"
                        alt="Bin och blommor"
                        className="w-full max-w-md rounded-2xl shadow-lg"
                        width={300}
                        height={400}
                    />
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
                </div>
            </div>
        </section>
    )
}
