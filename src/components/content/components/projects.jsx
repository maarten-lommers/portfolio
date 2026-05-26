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
        descriptionParagraphs:   ["Web application where therapist can upload and visualise patient data like Lungmetrics, Sessions,Lungsound,..."],
        contributionParagraphs:  ["Fully implemented by myself."],
        learnedParagraphs:       ["How to create a user friendly dashboard while maintaining SOLID principles, ensuring scalability."],
        angle: "hover:-rotate-1"
    },
    {
        title: "Youji",
        subtitle: "Mobile Application (personal)",
        image: Youji2,
        imageDetails: Youji1,
        skills: [".NET EF", "ReactTS", "Flutter"],
        descriptionParagraphs:   ["An Android/IOS application designed for quick learning with flashcards using spaced repetition system. Created by me (Maarten Lommers) and Lars Kammeijer. Built using Flutter and .NET."],
        contributionParagraphs:  ["I worked mainly on design, features and branding/marketing. My friend worked mainly on infrastructure, CI/CD and testing"],
        learnedParagraphs:       ["The importance of a good CI/CD and get early user feedback. Writing tests is important for reliability. Once you release an app into the public, there are many laws and legislation to adhere to."],
        angle: "hover:rotate-2",
        orientation: "vertical",
        link: "https://youji.be",
    },
    {
        title: "DAF Trucks",
        subtitle: "QLIK Dashboard (school project)",
        image: Daf,
                imageDetails: Daf,
        skills: ["QLIK", "Data Analysis"],
        descriptionParagraphs:   ["Project where I created a dashboard for DAF Trucks, using QLIK. We had to analyze data and create visualizations to help DAF make better business decisions."],
        contributionParagraphs:  ["Built a story telling dashboard from scratch, including dynamic visualizations and data transformations."],
        learnedParagraphs:       ["I learned how to analyze data and how to create effective visualizations. I also learned how to tell a story with data and how to communicate insights effectively."],
        angle: "hover:rotate-1"
    },
    {
        title: "Duffalo's soccer club",
        subtitle: "Web Application (school project)",
        image: Duffalo,
                imageDetails: Duffalo,
        skills: ["Laravel", "Data Modeling"],
        descriptionParagraphs:   ["Team project for managing the soccer club's website and player information."],
        contributionParagraphs:  ["Designed and implemented the backend and frontend using Laravel.", "Created a user-friendly interface for managing club matches"],
        learnedParagraphs:       ["Enhanced my skills in full-stack development with Laravel.", "Improved my understanding of database design and modeling."],
        angle: "hover:-rotate-2"
    },
]

function Projects() {
    const headerRef = useReveal()

    return (
        <section id="projects" className="py-16 bg-portfolio-cream">
            <div className="max-w-5xl mx-auto p-4 md:p-10">
                <div ref={headerRef} className="reveal mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="h-px w-10 bg-portfolio-accent-dark rounded-full" />
                        <p className="text-portfolio-accent text-sm font-semibold uppercase tracking-widest hover:-translate-y-1 transition-all duration-200">Portfolio</p>
                        <span className="h-px w-10 bg-portfolio-accent-dark rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-portfolio-primary mb-4">My Projects</h2>
                    <p className="text-portfolio-primary-light max-w-2xl mx-auto leading-relaxed">
                        A variety of large projects I enjoyed working on, what my contributions are and what I learned from them! 
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
