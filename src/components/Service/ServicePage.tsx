import React from "react";
import serviceData from "../../data/service.json";
import ServiceItem from "./ServiceItem";

// ServicePage: renders all service roles using ServiceItem
const ServicePage: React.FC = () => (
    <>
        <div className="max-w-3xl mx-auto">
            <ul className="list-disc pl-6 space-y-2">
                {serviceData.map((service, idx) => (
                    <ServiceItem key={idx} year={service.year} content={service.content} />
                ))}
            </ul>
        </div>
    </>
);

export default ServicePage;
