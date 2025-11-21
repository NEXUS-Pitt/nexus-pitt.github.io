import React from "react";
import serviceData from "../../data/service.json";
import ServiceItem from "./ServiceItem";

interface ServiceEntry {
  year: string;
  content: string;
}

interface ServiceGroup {
  group: string;
  items: ServiceEntry[];
}

const ServicePage: React.FC = () => {
  const groups = serviceData as ServiceGroup[];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {groups.map((g, gIdx) => (
        <section key={gIdx}>
          <h2 className="text-xl font-semibold mb-3">{g.group}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {g.items.map((service, idx) => (
              <ServiceItem
                key={`${gIdx}-${idx}`}
                year={service.year}
                content={service.content}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default ServicePage;