import AboutMe from "./components/about-me";
import ContactMe from "./components/contact-me";
import Projects from "./components/projects";

function Wave() {
    return (
        <div className="bg-portfolio-cream overflow-hidden -mb-1">
            <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full block" style={{ height: '72px' }}>
                <path d="M0,0 C320,72 1120,0 1440,56 L1440,0 L0,0 Z" fill="#1a2210" />
            </svg>
        </div>
    )
}

function WaveInverted() {
    return (
        <div className="bg-portfolio-cream overflow-hidden -mb-1">
            <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full block" style={{ height: '64px' }}>
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
