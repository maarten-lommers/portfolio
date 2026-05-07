function Footer() {
    return (
        <footer className="py-8 border-t border-secondary/40">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                <span className="font-extrabold text-cream">Maarten Lommers</span>
                <nav className="flex gap-6">
                    <a href="" className="text-cream-muted hover:text-cream transition-colors duration-200 cursor-pointer">Home</a>
                    <a href="" className="text-cream-muted hover:text-cream transition-colors duration-200 cursor-pointer">About</a>
                    <a href="" className="text-cream-muted hover:text-cream transition-colors duration-200 cursor-pointer">Projects</a>
                    <a href="" className="text-cream-muted hover:text-cream transition-colors duration-200 cursor-pointer">Contact</a>
                </nav>
                <span className="text-cream-muted/60">© {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}

export default Footer;
