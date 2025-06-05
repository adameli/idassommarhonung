import React from 'react'
import Hexagon from './Hexagon'

const honeyProcess = [
    {
        title: 'Blommor',
        text: 'Bina samlar främst nektar från blommor som raps, lind, hallon och klöver – växter som ger rikligt med söt nektar under sommaren.',
    },
    {
        title: 'Nektarinsamling',
        text: 'När bina hittar en bra blomma suger de upp nektar med sin sugsnabel och förvarar den i sin honungsmage innan de flyger tillbaka till kupan.',
    },
    {
        title: 'Bivaxkakor',
        text: 'Väl hemma i kupan lämnar bina över nektarn till andra bin som omvandlar den och lagrar den i vaxkakor som bina själva bygger.',
    },
    {
        title: 'Honungsfyllning',
        text: 'Nektarn bearbetas genom att bina ventilerar den med sina vingar tills vattnet avdunstat – då fylls cellerna med mogen honung.',
    },
    {
        title: 'Slungning',
        text: 'Biodlaren tar ut ramarna ur kupan och placerar dem i en honungsslunga som snurrar ut honungen med hjälp av centrifugalkraft.',
    },
    {
        title: 'Färdig produkt',
        text: 'Efter att honungen silats och eventuellt rörts för att bli krämig, tappas den på burk – redo att avnjutas direkt från naturen.',
    }
];

export default function StepByStepToHoneySection() {
    return (
        <section className="section-container">
            <div className='div-container'>
                <h2 className="text-4xl  font-bold text-gray-900 mb-8">Steg för steg till honung</h2>
                <div className="flex flex-wrap justify-between gap-8">
                    {honeyProcess.map((step, index) => (
                        <div key={index} className='flex items-center gap-4 max-w-[500px] min-w-[300px]'>
                            <Hexagon>
                                {step.title}
                            </Hexagon>
                            <p className="text-left mt-2 text-gray-900">{step.text}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}
