import React from "react";
import IntroSection from "./IntroSection";
import NewsSection from "./NewsSection";
import DirectorSection from "./DirectorSection";

const HomePage: React.FC = () => (
    <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Column */}
        <div className="w-full md:w-2/3 flex flex-col space-y-8">
            <IntroSection />
            <DirectorSection />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3">
            <NewsSection />
        </div>
    </div>
);

export default HomePage;
