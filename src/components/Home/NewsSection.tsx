import React from "react";
import news from "../../data/news.json";

const NewsSection: React.FC = () => (
    <section className="mb-10">
        <h3 className="text-xl font-semibold text-stone-500 mb-4 text-left">Recent News</h3>
        <ul className="max-w-2xl mx-auto space-y-3 text-left text-base">
            {news.map((item, idx) => (
                <li key={idx} className="bg-stone-50 rounded p-3 shadow-sm text-sm">
                    <span className="font-semibold text-stone-400 mr-2">[{item.date}]</span>
                    <span className="text-gray-700">{item.text}</span>
                </li>
            ))}
        </ul>
    </section>
);

export default NewsSection;
