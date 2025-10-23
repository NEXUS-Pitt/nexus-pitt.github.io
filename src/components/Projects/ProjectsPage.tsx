import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import projectsData from "../../data/projects.json";
import ProjectSection from "./ProjectSection";

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// ProjectsPage: renders all projects using ProjectSection
const ProjectsPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    return (
        <>
            <div className="space-y-12 max-w-5xl mx-auto">
                {projectsData.map((project, idx) => (
                    <ProjectSection
                        key={project.title || idx}
                        project={project}
                        id={slugify(project.title)}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectsPage;
