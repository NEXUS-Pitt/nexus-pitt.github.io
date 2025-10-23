import React from "react";

const researchThemes = [
    "Hardware/Software Co-Exploration for Neural Architectures",
    "On-Device Personalized AI",
    "Efficient Computing for Healthcare Applications",
];

const IntroSection: React.FC = () => (
    <section className="mb-10">
        <p className="text-base text-gray-700 mb-1 text-left max-w-2xl">
            <span className="inline-flex items-center align-middle leading-tight bitcount-single">
                <span className="inline-flex flex-row items-center space-x-1">
                    <span className="nd-blue">
                        <span className="font-bold underline">N</span>eural
                    </span>
                    <span className="nd-gold">
                        <span className="font-bold underline">E</span>mbedded
                    </span>
                    <span>
                        <span className="font-bold underline">X</span>-Disciplinary
                    </span>
                    <span className="nd-gold">
                        <span className="font-bold underline">U</span>nified
                    </span>
                    <span className="nd-blue">
                        <span className="font-bold underline">S</span>ystems
                    </span>					
                    <span>
                        (
                        <span className="nd-blue font-bold">N</span>
                        <span className="nd-gold font-bold">E</span>
                        <span className="font-bold">X</span>
						<span className="nd-gold font-bold">U</span>
						<span className="nd-blue font-bold">S</span>
                        ) 
                    </span>
                    <span className="nd-blue">
                        Lab
                    </span>	
                </span>
            </span><span> The Neural Embedded & X-Disciplinary Unified Systems (NEXUS) Lab focuses on the design, development, and implementation of embedded systems that incorporate artificial intelligence (AI) to perform complex tasks autonomously and adaptively. These labs bridge the gap between hardware, software, and AI algorithms to create "smart" devices.
            </span>
        </p>
        <ul className="max-w-xl text-left list-disc pl-6">
            {researchThemes.map((theme, idx) => (
                <li key={idx} className="text-base text-stone-600">
                    {theme}
                </li>
            ))}
        </ul>
    </section>
);

export default IntroSection;
