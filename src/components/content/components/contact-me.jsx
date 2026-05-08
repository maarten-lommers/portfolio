import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { useReveal } from "../../../hooks/useReveal"
import Button from "../../ui/Button"


function ContactMe() {
    const ref = useReveal(0.2)

    return (
        <section id="contact" ref={ref} className="py-20 mb-32 mt-6 text-center px-4 md:px-10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="h-px w-10 bg-portfolio-accent-dark rounded-full" />
                        <p className="text-portfolio-accent text-sm font-semibold uppercase tracking-widest hover:-translate-y-1 transition-all duration-200">Get In Touch</p>
                        <span className="h-px w-10 bg-portfolio-accent-dark rounded-full" />
                    </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-portfolio-cream mb-4">Let's Connect</h2>
            <p className="text-portfolio-cream-muted mb-10 max-w-xl mx-auto leading-relaxed">
                Interested in working together or have a question? Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="surface" href="https://www.linkedin.com/in/maarten-lommers" target="_blank"><FaLinkedin className="mb-0.5" />LinkedIn</Button>
                <Button href="mailto:maarten.lommers76@gmail.com"><FaEnvelope className="mb-0.5" />Maarten.lommers76@gmail.com</Button>
                <div className="flex gap-2 items-center text-portfolio-cream"><FaPhone  /> +32 473 88 90 99</div>
            </div>
        </section>
    )
}

export default ContactMe;
