function Footer() {
    return (
        <footer className="bg-portfolio-accent" >
            <div className="max-w-5xl px-4 md:px-10 mx-auto py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                    <a href="" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200 flex gap-2">
                        <span className="text-portfolio-cream">© {new Date().getFullYear()}</span>
                        Maarten Lommers 
                    </a>
                    <nav className="flex gap-6">
                        <a href="#" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Home</a>
                        <a href="#projects" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Projects</a>
                        <a href="#contact" className="text-portfolio-cream hover:text-portfolio-accent-muted transition-colors duration-200">Contact</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
