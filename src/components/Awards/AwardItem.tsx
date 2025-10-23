import React from "react";

interface AwardItemProps {
    year: string;
    content: string;
}

// AwardItem: displays a single award entry
const AwardItem: React.FC<AwardItemProps> = ({ year, content }) => (
    <div className="text-gray-800">
        <span className="inline-block bg-stone-200 text-stone-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{year}</span>
        {content}
    </div>
);

export default AwardItem;
