import profile from "@/assets/profile.jpg";
import Button from "@/components/ui/Button";

const SKILLS = ['.NET EF', 'ReactJS', 'Flutter', 'Laravel']

function AboutMe() {
    return (
        <section className="py-20 md:py-32 max-w-5xl mx-auto px-10">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

                <article>
                    <p className="text-portfolio-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
                        Software Developer
                    </p>
                    <h1 className="text-portfolio-cream text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                        Hello, I'm<br />
                        <span className="text-accent-muted">Maarten Lommers</span>
                    </h1>
                    <p className="text-portfolio-cream-muted text-lg leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus magni placeat necessitatibus vero quam reiciendis laudantium
                        enim quisquam magnam.
                    </p>
                    <div className="flex gap-2">
                        {SKILLS.map(skill => (
                            <div className="bg-portfolio-accent-dark text-portfolio-cream px-2 py-0.5 rounded text-sm hover:opacity-80 hover:-translate-y-1 transition-all duration-200">{skill}</div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <Button href="">View Projects</Button>
                        <Button href="" variant="secundairy">Download CV</Button>
                    </div>
                </article>

                <div className="flex justify-center">
                    <div className="relative bg-amber-300">
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
