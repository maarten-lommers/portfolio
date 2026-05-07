import { useState } from "react";
import { CiSquareMore } from "react-icons/ci";

function NavHamburger() {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <button
                type="button"
                aria-label="Open navigation"
                onClick={() => setOpen(prev => !prev)}
                className="flex items-center justify-center text-portfolio-cream hover:text-portfolio-accent-muted transition-colors cursor-pointer">
                <CiSquareMore size={24} />
            </button>

            {open && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-portfolio-cream rounded shadow p-2 flex flex-col">
                    <a href="" className="px-4 py-2 text-sm font-semibold text-portfolio-primary-dark hover:text-portfolio-accent-dark hover:underline transition-colors duration-200 cursor-pointer">Home</a>
                    <a href="" className="px-4 py-2 text-sm font-semibold text-portfolio-primary-dark hover:text-portfolio-accent-dark hover:underline transition-colors duration-200 cursor-pointer">About me</a>
                    <a href="" className="px-4 py-2 text-sm font-semibold text-portfolio-primary-dark hover:text-portfolio-accent-dark hover:underline transition-colors duration-200 cursor-pointer">Projects</a>
                    <a href="" className="px-4 py-2 text-sm font-semibold text-portfolio-primary-dark hover:text-portfolio-accent-dark hover:underline transition-colors duration-200 cursor-pointer">Contact</a>
                </div>
            )}
        </div>
    )
}

export default NavHamburger;
