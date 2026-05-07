import NavHamburger from "./components/nav-hamburger";

function Header() {
    return (
        <header className="bg-portfolio-primary-dark px-10">
            <div className="py-6 flex justify-between items-center max-w-5xl mx-auto border-b-2 border-portfolio-cream-muted/10">
                <a href="" className="font-extrabold text-lg text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">
                    Maarten Lommers
                </a>
                <nav className="hidden md:flex gap-8 text-sm font-semibold">
                    <a href="" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Home</a>
                    <a href="" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">About</a>
                    <a href="" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Projects</a>
                    <a href="" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Contact</a>
                </nav>
                <div className="md:hidden">
                    <NavHamburger />
                </div>
            </div>
        </header>
    )
}

export default Header;
