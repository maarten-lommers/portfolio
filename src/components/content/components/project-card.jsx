import { useState } from "react"
import { useReveal } from "../../../hooks/useReveal"

function ProjectCard({ title, subtitle, image, imageDetails, skills, descriptionParagraphs, contributionParagraphs, learnedParagraphs, angle, revealDelay = 0, orientation }) {
    const [open, setOpen] = useState(false)
    const cardRef = useReveal(0.1, revealDelay)

    return (
        <>
            <div
                ref={cardRef}
                className={`reveal bg-portfolio-primary-dark p-6 rounded shadow shadow-black cursor-pointer hover:-translate-y-1 transition-all duration-200 ${angle}`}
                onClick={() => setOpen(true)}
            >
                <p className="text-portfolio-cream-muted text-sm italic">{subtitle}</p>
                <h2 className="text-portfolio-cream font-bold text-xl mb-4">{title}</h2>
                <img
                    className="w-full h-64 object-cover rounded bg-portfolio-primary mb-4"
                    src={image}
                    alt={title}
                />
                <div className="flex flex-wrap gap-2">
                    {skills?.map(skill => (
                        <span key={skill} className="skill-tag bg-portfolio-accent-dark text-portfolio-cream px-2 py-0.5 rounded text-sm hover:-translate-y-1 transition-all duration-200">{skill}</span>
                    ))}
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setOpen(false)}>
                    <div className="bg-portfolio-cream mx-5 mb-20 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="px-8 pt-6 pb-3">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-portfolio-primary-dark text-sm italic mb-1">{subtitle}</p>
                                    <h2 className="text-portfolio-primary-dark font-bold text-2xl">{title}</h2>
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close"
                                    className="relative -top-5 -right-5 min-h-11 min-w-11 flex items-center justify-center text-portfolio-accent-dark hover:text-cream text-2xl font-bold transition-colors rounded-lg hover:bg-surface-raised cursor-pointer">
                                    ×
                                </button>
                            </div>

                            <div className={orientation == "vertical" ? "flex flex-row-reverse justify-between h-116" : "flex flex-col"}>
                                {imageDetails && (
                                    <img
                                        src={imageDetails}
                                        className={orientation == "vertical" ? "mx-auto object-cover rounded mb-6 bg-surface-raised w-64 object-top" : "object-contain rounded mb-6 bg-surface-raised"}
                                        alt={title}
                                    />
                                )}
                                <div className={orientation == "vertical" ? "flex flex-col space-y-6 text-cream-muted text-sm leading-relaxed" : "flex flex-row space-y-6 text-cream-muted text-sm leading-relaxed"}>
                                    {[
                                        { label: 'Description',    items: descriptionParagraphs },
                                        { label: 'Contributions',  items: contributionParagraphs },
                                        { label: 'What I learned', items: learnedParagraphs },
                                    ].map(({ label, items }) => (
                                        <div key={label} >
                                            <h3 className="text-accent-muted font-bold text-base mb-2">{label}</h3>
                                            {items?.map((p, i) => <p key={i}>{p}</p>)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-6">
                                {skills?.map(skill => (
                                    <span key={skill} className="skill-tag bg-portfolio-accent-dark text-portfolio-cream px-2 py-0.5 rounded text-sm hover:-translate-y-1 transition-all duration-200">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectCard
