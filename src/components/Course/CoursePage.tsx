import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// CoursePage: renders all projects using ProjectSection
const CoursePage: React.FC = () => {
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
                <section className="bg-white rounded-lg shadow p-6 space-y-4">
                    <div>
                        <h2 className="text-3xl font-bold text-stone-800">
                            Efficient Deep Learning
                        </h2>
                        <div className="text-lg text-stone-600 mt-1">
                            ECE 2195 • Spring • 2026
                        </div>
                    </div>
                    <p className="text-gray-700">
                        <span className="font-semibold">Course Description:</span> This course
                        focuses on efficient deep learning and systems. As deep neural networks
                        demand extraordinary levels of computation, deploying them on everyday
                        devices and cloud infrastructure is a major challenge. This course
                        introduces efficient AI computing techniques that enable powerful deep
                        learning applications on resource-constrained devices. Topics include model
                        compression, pruning, quantization, neural architecture search, distributed
                        training, and on-device fine-tuning. It will also cover application-specific
                        acceleration techniques for large language models (LLMs) and diffusion
                        models. Students will get hands-on experience implementing these techniques.
                    </p>
                    <hr className="border-gray-200" />
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            <span className="font-semibold">Class Time:</span> Monday 6:00 PM to 8:30
                            PM
                        </li>
                        <li>
                            <span className="font-semibold">Room:</span> 157 Benedum Hall
                        </li>


                        <li>
                            <span className="font-semibold">Office Hours:</span> Regular office
                            hours are scheduled each week to meet with any student who needs
                            assistance with this course or who needs professional, career,
                            curriculum, or technical advice. All students are encouraged to make
                            the most use of the office hours.
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Hours: Monday 3:00 PM – 5:00 PM</li>
                                <li>
                                    If you cannot meet during a scheduled office hour, the instructor
                                    is also available by appointment. Please contact the instructor
                                    by phone or by e-mail.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">Prerequisites:</span> Introduction to
                            Machine Learning, and Computer Architecture.
                        </li>
                        <li>
                            <span className="font-semibold">Required Textbook:</span> There is no
                            required textbook. Required readings will be from recent publications,
                            conference proceedings (e.g., NeurIPS, ICML, ICLR, MLSys), and online
                            documentation. These will be posted on the course website.
                        </li>
                        <li>
                            <span className="font-semibold">Course Format:</span> This course uses a
                            combination of lecture and hands-on laboratory projects. You will have
                            both individual and team assignments. The labs and final project are
                            essential parts of the course.
                        </li>
                    </ul>
                    <hr className="border-gray-200" />
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-stone-700">Instructor</h3>
                        <div className="flex items-center gap-4">
                            <img
                                src="https://nexus-pitt.github.io/images/jthu.jpg"
                                alt="Jingtong Hu"
                                className="h-14 w-14 rounded-full object-cover"
                            />
                            <div>
                                <div className="font-semibold text-stone-700">Jingtong Hu</div>
                                <div className="text-gray-600 text-sm">Associate Professor</div>
								
                            </div>

                        </div>

                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Office: BEH 1208 / Schenley Place 110A</li>
                                <li>Office Tel: (412) 383-4424</li>
                                <li>Email: jthu@pitt.edu</li>
                                <li>
                                    Webpage:{" "}
                                    <a
                                        href="http://www.pitt.edu/~jthu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        http://www.pitt.edu/~jthu
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-stone-700">Announcements</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                2026-01-12 The Efficient Deep Learning course website has been released.
                            </li>
                        </ul>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-stone-700">Schedule</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-2 text-stone-700">Date</th>
                                        <th className="py-2 text-stone-700">Topics</th>
                                        <th className="py-2 text-stone-700">Readings/Projects</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Jan. 12</td>
                                        <td className="py-3">
                                            Introduction to Efficient ML
                                            &nbsp;<a href="https://youtu.be/amAnp0bzS14" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                            <br />
                                            Basics of Deep Learning
                                            &nbsp;<a href="https://youtu.be/rm6u0G9SKKA" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                        </td>
                                        <td className="py-3 text-blue-600">
                                        <a href="https://colab.research.google.com/drive/1U5-7mX9DuV8_krZR9eMocZoO-kabR0qT" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Lab 0</a> Out
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Jan. 26</td>
                                        <td className="py-3">
                                            Model Pruning and Sparsity (Part I:&nbsp;<a href="https://youtu.be/xuuZvH8_dac" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a> &amp;Part II:&nbsp;<a href="https://youtu.be/tP1BLmScoro" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>)
                                        </td>
                                        <td className="py-3 text-blue-600">
                                        <a href="https://colab.research.google.com/drive/1gSaSvJxIizc8rd4nYevCbhvpIgVi69UO" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Lab 1</a> Out
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Feb. 2</td>
                                        <td className="py-3">Quantization (Part I:&nbsp;<a href="https://youtu.be/ygHu89v09a0" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a> &amp;Part II:&nbsp;<a href="https://youtu.be/PBGt6YNSjTQ" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>)</td>
                                        <td className="py-3" />
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Feb. 9</td>
                                        <td className="py-3">Neural Architecture Search (NAS) (Part I:&nbsp;<a href="https://youtu.be/cGUO7bvoz3I" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a> &amp;Part II:&nbsp;<a href="https://youtu.be/1s93u0-uPys" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>)</td>
                                        <td className="py-3 text-blue-600">
                                            Lab 1 Due, <a href="https://colab.research.google.com/drive/1ZLqmmepC9OvDy9j4_1jU3thrFFB2j1aM" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Lab 2</a> Out
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Feb. 16</td>
                                        <td className="py-3">
                                            Knowledge Distillation
                                            &nbsp;<a href="https://youtu.be/khDgn1rU0s4" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                            <br />
                                            TinyML
                                            &nbsp;<a href="https://youtu.be/Vuw6rFj4gn8" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                        </td>
                                        <td className="py-3" />
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Feb. 23</td>
                                        <td className="py-3">Efficient Transformers, LLM, and RAG (Part I:&nbsp;<a href="https://youtu.be/y1xsK0Y7VcM" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a> &amp;Part II:&nbsp;<a href="https://youtu.be/4iDcSwhs7yY" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>)</td>
                                        <td className="py-3 text-blue-600">
                                            Lab 2 Due, <a href="https://colab.research.google.com/drive/1OrvTHqG-kQRLZ2JotLo2DTif5zHZ9cbt" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Lab 3</a> Out
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Mar. 2</td>
                                        <td className="py-3">
                                            Efficient Transformers, LLM, and RAG
                                            &nbsp;(Part III &nbsp;<a href="https://youtu.be/sVclQpdWsx8" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>)
                                            <br />
                                            Efficient LLM Deployment
                                            &nbsp;<a href="https://youtu.be/6-bbvFbBAJk" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                        </td>
                                        <td className="py-3" />
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Mar. 16</td>
                                        <td className="py-3">
                                            Long Context LLMs
                                            &nbsp;<a href="https://youtu.be/xbd3LhddVLA" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                            <br />
                                            Vision Transformers (ViT)
                                            &nbsp;<a href="https://youtu.be/bGF4W6qiD3A" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                        </td>
                                        <td className="py-3 text-blue-600">
                                            Lab 3 Due, <a href="https://colab.research.google.com/drive/10AZWtmIGRjOj1OW-TSIOoPniI_nyHz53" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Lab 4</a> Out
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Mar. 23</td>
                                        <td className="py-3">Hardware Accelerators for Efficient ML
                                            &nbsp;<a href="https://youtu.be/XEPaQLQtE9k" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
										</td>
                                        <td className="py-3 text-blue-600"></td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Mar. 30</td>
                                        <td className="py-3">
                                            Hybrid Autoregressive Transformer (HART)
                                            &nbsp;<a href="https://youtu.be/oBzdkV5NNFw" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                            <br />
                                            Efficient GANs
                                            &nbsp;<a href="https://youtu.be/iF3aAEmpzZ8" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                            <br />
                                            Diffusion Models
                                            &nbsp;<a href="https://youtu.be/uZ3CYy869yI" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">[Video]</a>
                                        </td>
                                        <td className="py-3 text-blue-600">
                                            Lab 4 Due, Lab 5 Out
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Apr. 6</td>
                                        <td className="py-3">Distributed Training (Part I)</td>
                                        <td className="py-3 text-blue-600">
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Apr. 13</td>
                                        <td className="py-3">Distributed Training (Part II)</td>
                                        <td className="py-3 text-blue-600">Lab 5 Due</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Apr. 20</td>
                                        <td className="py-3">
                                            On-Device Training and Transfer Learning; Course Summary
                                        </td>
                                        <td className="py-3" />
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 font-semibold">Apr. 27</td>
                                        <td className="py-3">Final Project Presentations</td>
                                        <td className="py-3" />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CoursePage;
