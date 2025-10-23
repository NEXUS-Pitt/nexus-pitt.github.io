import React from "react";
import awardsData from "../../data/awards.json";
import AwardItem from "./AwardItem";

// AwardsPage: renders all awards using AwardItem
const AwardsPage: React.FC = () => (
    <>
        <div className="max-w-3xl mx-auto">
            <ul className="list-disc pl-6 space-y-2">
                {awardsData.map((award, idx) => (
                    <AwardItem key={idx} year={award.year} content={award.content} />
                ))}
            </ul>
        </div>
    </>
);

export default AwardsPage;
