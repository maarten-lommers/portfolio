import { useEffect, useState } from "react";
import profile from "@/assets/profile.jpg";
import Button from "@/components/ui/Button";
import { useReveal } from "../../../hooks/useReveal";
import CV from "@/assets/maarten_lommers.pdf"

const SKILLS = ['.NET EF', 'ReactJS', 'Flutter', 'Laravel']

function AboutMe() {
    const labelRef   = useReveal(0, 0)
    const titleRef   = useReveal(0, 100)
    const bodyRef    = useReveal(0, 200)
    const skillsRef  = useReveal(0, 300)
    const buttonsRef = useReveal(0, 400)
    const imageRef   = useReveal(0, 150)

    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        const handler = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <section className="py-20 md:py-32 max-w-5xl mx-auto px-10  ">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

                <article>
                    <p ref={labelRef} className="reveal text-portfolio-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
                        Software Developer
                    </p>
                    <h1 ref={titleRef} className="reveal text-portfolio-cream text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                        Hello, I'm<br />
                        <span className="text-accent-muted">Maarten Lommers</span>
                    </h1>
                    <p ref={bodyRef} className="reveal text-portfolio-cream-muted text-lg leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus magni placeat necessitatibus vero quam reiciendis laudantium
                        enim quisquam magnam.
                    </p>
                    <div ref={skillsRef} className="reveal flex gap-2">
                        {SKILLS.map(skill => (
                            <div key={skill} className="skill-tag bg-portfolio-accent-dark text-portfolio-cream px-2 py-0.5 rounded text-sm hover:-translate-y-1 transition-all duration-200">{skill}</div>
                        ))}
                    </div>
                    <div ref={buttonsRef} className="reveal flex flex-wrap gap-3 mt-10">
                        <Button href="#projects">View Projects</Button>
                        <Button href={CV} target="_blank" variant="secundairy">Download CV</Button>
                    </div>
                </article>

                <div ref={imageRef} className="reveal-right flex justify-center">
                    <div
                        className="relative bg-amber-300"
                        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                    >
                        <div className="absolute inset-0 rounded border-2 border-portfolio-accent-dark scale-[1.05] pointer-events-none" />
                        <div className="w-64 md:w-80 h-94 rounded overflow-hidden border-2 border-portfolio-cream-muted shadow-2xl">
                            <img src={profile} alt="Maarten Lommers" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
