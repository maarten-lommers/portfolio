import ProjectCard from "./project-card"
import { useReveal } from "../../../hooks/useReveal"
import Youji1 from "@/assets/youji.jpg";
import Youji2 from "@/assets/youji2.png";
import Daf from "@/assets/daf.png";
import Duffalo from "@/assets/duffalo.png";
import Mobilab from "@/assets/mobilab.png"


const PROJECTS = [
    {
        title: "Mobilab & Care",
        subtitle: "Single Web Application (internship)",
        image: Mobilab,
        imageDetails: Mobilab,
        skills: [".NET EF", "ReactJS", "Data Modeling"],
        descriptionParagraphs:   ["Lorem ipsum dolor sit amet", "Consectetur adipisicing elit", "Explicabo blanditiis perferendis"],
        contributionParagraphs:  ["Built responsive layouts", "Implemented reusable components", "Polished UI details"],
        learnedParagraphs:       ["Improved accessibility patterns", "Refined component structure", "Learned performance optimizations"],
        angle: "hover:-rotate-1"
    },
    {
        title: "Youji",
        subtitle: "Mobile Application (personal)",
        image: Youji2,
        imageDetails: Youji1,
        skills: [".NET EF", "ReactTS", "Flutter"],
        descriptionParagraphs:   ["Lorem ipsum dolor sit amet", "Consectetur adipisicing elit", "Explicabo blanditiis perferendis"],
        contributionParagraphs:  ["Built responsive layouts", "Implemented reusable components", "Polished UI details"],
        learnedParagraphs:       ["Improved accessibility patterns", "Refined component structure", "Learned performance optimizations"],
        angle: "hover:rotate-2",
        orientation: "vertical",
    },
    {
        title: "DAF Trucks",
        subtitle: "QLIK Dashboard (school project)",
        image: Daf,
                imageDetails: Daf,
        skills: ["QLIK", "Data Analysis"],
        descriptionParagraphs:   ["Lorem ipsum dolor sit amet", "Consectetur adipisicing elit", "Explicabo blanditiis perferendis"],
        contributionParagraphs:  ["Built responsive layouts", "Implemented reusable components", "Polished UI details"],
        learnedParagraphs:       ["Improved accessibility patterns", "Refined component structure", "Learned performance optimizations"],
        angle: "hover:rotate-1"
    },
    {
        title: "Duffalo's soccer club",
        subtitle: "Web Application (school project)",
        image: Duffalo,
                imageDetails: Duffalo,
        skills: ["Laravel", "Data Modeling"],
        descriptionParagraphs:   ["Lorem ipsum dolor sit amet", "Consectetur adipisicing elit", "Explicabo blanditiis perferendis"],
        contributionParagraphs:  ["Built responsive layouts", "Implemented reusable components", "Polished UI details"],
        learnedParagraphs:       ["Improved accessibility patterns", "Refined component structure", "Learned performance optimizations"],
        angle: "hover:-rotate-2"
    },
]

function Projects() {
    const headerRef = useReveal()

    return (
        <section id="projects" className="py-16 bg-portfolio-cream">
            <div className="max-w-5xl mx-auto p-10">
                <div ref={headerRef} className="reveal mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="h-px w-10 bg-portfolio-accent-dark rounded-full" />
                        <p className="text-portfolio-accent text-sm font-semibold uppercase tracking-widest hover:-translate-y-1 transition-all duration-200">Portfolio</p>
                        <span className="h-px w-10 bg-portfolio-accent-dark rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-portfolio-primary mb-4">My Projects</h2>
                    <p className="text-portfolio-primary-light max-w-2xl mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo blanditiis perferendis, magni magnam tempore pariatur reprehenderit ad!
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.title} {...project} revealDelay={i * 100} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
