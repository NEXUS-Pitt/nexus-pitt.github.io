import React from "react";

// DirectorSection: Director photo, name, bio, and CV download
const DirectorSection: React.FC = () => (
    <section className="mb-10">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-white rounded-lg shadow px-2 md:px-6 py-6">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <div className="flex justify-center">
                    <img
                        src="images/jthu.jpg"
                        alt="Dr. Jingtong Hu"
                        className="w-32 h-44 rounded-lg object-cover border-gray-400"
                    />
                </div>
                <figcaption className="text-center text-base text-gray-600 mt-2">Dr. Jingtong Hu</figcaption>
                <div className="flex justify-center">
                    <a
                        href="files/cv-shi.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center text-xs inline-block mt-2 px-4 py-2 bg-stone-600 text-white rounded hover:bg-stone-400 transition"
                    >
                        Curriculum Vitae
                    </a>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-stone-500 mb-2">Director</h3>
                <p className="text-gray-700 mb-2 text-sm">
                    Dr. Jingtong Hu is currently an Associate Professor in the Department of Electrical and Computing Engineering at the University of Pittsburgh. He received his Ph.D. in Computer Science from the University of Texas, Dallas in 2013, and B.E. in Computer Science from Shandong University in 2007. His research interests include embedded systems, FPGA, and cyber-physical systems. His works received Best Paper Award Nominations from DAC 2017, DAC 2019, ESWEEK 2019, and ASP-DAC 2020. He is also the recipient of OSU CEAT Outstanding New Faculty Award and Air Force Summer Faculty Fellowship. He has served as TPC Track Chair for Memory Track in DAC 2019 and CPS Track in SAC 2018 as well as TPC member for ASP-DAC, DATE, DAC, ESWEEK, RTCSA, RTSS, etc. He is a guest editor for IEEE Transactions on Computers and an associate editor for IEEE Embedded Systems Letters. 
				</p>

            </div>
        </div>
    </section>
);

export default DirectorSection;
