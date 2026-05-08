import AboutMe from "./components/about-me";
import ContactMe from "./components/contact-me";
import Projects from "./components/projects";

function Wave() {
    return (
        <div className="bg-portfolio-primary-dark overflow-hidden -mb-px">
            <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full block" style={{ height: '72px' }}>
                <path d="M0,0 L0,72 L1440,72 L1440,56 C1120,0 320,72 0,0 Z" fill="#fefae0" stroke="none" />
            </svg>
        </div>
    )
}

function WaveInverted() {
    return (
        <div className="bg-portfolio-cream overflow-hidden">
            <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full " style={{ height: '64px' }}>
                <path d="M0,64 C600,0 1040,32 1440,20 L1440,64 Z" fill="#1a2210" />
            </svg>
        </div>
    )
}

function Body() {
    return (
        <div>
            <AboutMe />
            <Wave />
            <Projects />
            <WaveInverted />
            <ContactMe />
        </div>
    )
}

export default Body;
