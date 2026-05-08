import { useEffect, useState } from "react";
import NavHamburger from "./components/nav-hamburger";

function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <header className={`sticky top-0 z-40 px-4 md:px-10 transition-all duration-300 ${
            scrolled
                ? 'bg-portfolio-primary-dark/80 backdrop-blur-md shadow-lg shadow-black/30'
                : 'bg-transparent'
        }`}>
            <div className="py-6 flex justify-between items-center max-w-5xl mx-auto ">
                <a href="" className="font-extrabold text-lg text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">
                    Maarten Lommers
                </a>
                <nav className="hidden md:flex gap-8 text-sm font-semibold">
                    <a href="#" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Home</a>
                    <a href="#projects" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Projects</a>
                    <a href="#contact" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Contact</a>
                </nav>
                <div className="md:hidden">
                    <NavHamburger />
                </div>
            </div>
        </header>
    )
}

export default Header;
