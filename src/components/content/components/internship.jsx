import { useReveal } from "../../../hooks/useReveal"
import Button from "../../ui/Button"
import { FaDownload } from "react-icons/fa6"
import ProjectPlan from "@/assets/stagedocs/Projectplan-MaartenLommers.pdf"
import Realisation from "@/assets/stagedocs/Realisatiedocument-MaartenLommers.pdf"
import Reflection from "@/assets/stagedocs/Reflectiedocument-MaartenLommers.pdf"
import SupportingDocs from "@/assets/stagedocs/Internship_Documents.zip"

function Internship() {
    const headerRef = useReveal()
    const bodyRef = useReveal(0.15, 150)
    const docsRef = useReveal(0.15, 300)

    return (
        <section id="internship" className="py-16 bg-portfolio-cream">
            <div className="max-w-5xl mx-auto p-4 md:p-10">
                <div ref={headerRef} className="reveal mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="h-px w-10 bg-portfolio-accent-dark rounded-full" />
                        <p className="text-portfolio-accent text-sm font-semibold uppercase tracking-widest hover:-translate-y-1 transition-all duration-200">Internship</p>
                        <span className="h-px w-10 bg-portfolio-accent-dark rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-portfolio-primary mb-4">Mobilab &amp; Care</h2>
                    <p className="text-portfolio-primary-light max-w-2xl mx-auto leading-relaxed">
                        Thomas More &middot; Applied Computer Science &middot; 2025
                    </p>
                </div>

                <article ref={bodyRef} className="reveal max-w-3xl mx-auto mb-12">
                    <h3 className="text-xl font-bold text-portfolio-primary mb-4">Synopsis</h3>
                    <p className="text-portfolio-primary-light leading-relaxed mb-4">
                        During my internship at Mobilab &amp; Care, a research lab connected to Thomas More University of Applied Sciences,
                        I designed and developed a full-stack web application that enabled therapists to upload, manage and visualise
                        patient data. The application centralised measurements such as lung metrics, session logs and lung sounds
                        into a single, intuitive dashboard.
                    </p>
                    <p className="text-portfolio-primary-light leading-relaxed mb-4">
                        The back end was built with <strong className="text-portfolio-primary">.NET Entity Framework</strong> and
                        exposed a RESTful API, while the front end used <strong className="text-portfolio-primary">React</strong> to
                        render interactive charts and data tables. I modelled the database to accommodate multiple measurement types
                        and designed the architecture with SOLID principles so the platform could grow to support future data sources
                        without large refactors.
                    </p>
                    <p className="text-portfolio-primary-light leading-relaxed">
                        Throughout the project I followed an agile workflow, gathered feedback from therapists during demo sessions
                        and iterated on both the UI and the underlying data model. The result was a working prototype that the
                        research team could use to streamline their clinical data workflows.
                    </p>
                </article>

                <div ref={docsRef} className="reveal max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold text-portfolio-primary mb-6">Documents</h3>
                    <div className="flex flex-wrap gap-3">
                        <Button href={ProjectPlan} target="_blank">
                            <FaDownload className="mb-0.5" /> Project Plan
                        </Button>
                        <Button href={Realisation} target="_blank">
                            <FaDownload className="mb-0.5" /> Realisation Document
                        </Button>
                        <Button href={Reflection} target="_blank">
                            <FaDownload className="mb-0.5" /> Reflection Document
                        </Button>
                        <Button href={SupportingDocs} target="_blank" variant="secundairy">
                            <FaDownload className="mb-0.5" /> Supporting Documents (zip)
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Internship
