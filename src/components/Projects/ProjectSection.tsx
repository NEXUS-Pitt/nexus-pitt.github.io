import React from "react";

interface Project {
    title: string;
    description: string[];
    image?: string;
    caption?: string;
    publications?: string[];
    slides?: string;
}

interface ProjectSectionProps {
    project: Project;
    id?: string;
}

// ProjectSection: displays a single project with image, description, and publications
const ProjectSection: React.FC<ProjectSectionProps> = ({ project, id }) => (
    <section id={id} className="bg-white rounded-lg shadow p-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-stone-700 mb-4 flex items-center">
            {project.title}
            {project.slides && (
                <a
                    href={project.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 flex items-center text-base font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 hover:text-stone-900 rounded px-2 py-1 transition"
                >
                    Slides
                </a>
            )}
        </h3>
        <div className="space-y-3 mb-4">
            {project.description.map((para, idx) => (
                <p key={idx} className="text-gray-700">{para}</p>
            ))}
        </div>
        {project.image && (
            <div className="flex flex-col items-center mb-4">
                <img
                    src={project.image}
                    alt={project.caption || project.title}
                    className="w-full max-w-xl rounded shadow"
                />
                {project.caption && (
                    <div className="text-sm text-gray-500 mt-2 text-center">{project.caption}</div>
                )}
            </div>
        )}
        {project.publications && project.publications.length > 0 && (
            <div>
                <h4 className="text-lg font-semibold text-stone-600 mb-2">Selected Publications</h4>
                <ul className="list-disc pl-6 space-y-1">
                    {project.publications.map((pub, idx) => (
                        <li key={idx} className="text-gray-700">{pub}</li>
                    ))}
                </ul>
            </div>
        )}
    </section>
);

export default ProjectSection;
