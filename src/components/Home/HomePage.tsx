import React from "react";
import IntroSection from "./IntroSection";
import NewsSection from "./NewsSection";
import DirectorSection from "./DirectorSection";

const HomePage: React.FC = () => (
    <div>
        <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="w-full md:w-20/30">
                <IntroSection />
            </div>
            <div className="w-full md:w-10/30">
                <NewsSection />
            </div>
        </div>
        <div>
            <DirectorSection />
        </div>
    </div>
);

export default HomePage;
