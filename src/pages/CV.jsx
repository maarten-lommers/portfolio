import { Link } from 'react-router-dom'
import { FaDownload, FaArrowLeft, FaPhone, FaEnvelope, FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import CVFile from '@/assets/maarten_lommers.pdf'
import profile from '@/assets/me.png'

function SidebarSection({ title, children }) {
  return (
    <div className="mb-7">
      <h2 className="text-portfolio-accent-light text-xs font-extrabold uppercase tracking-widest mb-3 border-b border-portfolio-accent-light/30 pb-1">
        {title}
      </h2>
      {children}
    </div>
  )
}

function MainSection({ title, children }) {
  return (
    <div className="mb-7">
      <h2 className="text-portfolio-accent text-sm font-extrabold uppercase tracking-widest mb-3 border-b border-portfolio-accent/30 pb-1">
        {title}
      </h2>
      {children}
    </div>
  )
}

function CVPage() {
  return (
    <div className="min-h-screen bg-portfolio-primary-dark py-8 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-portfolio-cream hover:text-portfolio-accent-light transition-colors text-sm font-semibold"
          >
            <FaArrowLeft className="text-xs" />
            Back to Portfolio
          </Link>
          <a
            href={CVFile}
            download="Maarten_Lommers_CV.pdf"
            className="flex items-center gap-2 bg-portfolio-accent hover:bg-portfolio-accent-light text-portfolio-cream px-4 py-2 rounded font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        <div className="flex rounded-lg overflow-hidden shadow-2xl shadow-black/50">

          <aside className="w-72 shrink-0 bg-portfolio-primary text-portfolio-cream p-7 flex flex-col">

            <div className="mb-7 flex flex-col items-center">
              <div className="w-32 h-32 rounded overflow-hidden border-2 border-portfolio-accent-light/50">
                <img src={profile} alt="Maarten Lommers" className="w-full h-full object-cover" />
              </div>
            </div>

            <SidebarSection title="Contact">
              <ul className="space-y-2 text-sm text-portfolio-cream-muted">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-portfolio-accent-light shrink-0 text-xs" />
                  +324 73 88 90 99
                </li>
                <li className="flex items-start gap-2">
                  <FaEnvelope className="text-portfolio-accent-light shrink-0 text-xs mt-0.5" />
                  <span className="break-all">Maarten.lommers76@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaLocationDot className="text-portfolio-accent-light shrink-0 text-xs" />
                  Lommel, BE
                </li>
                <li className="flex items-center gap-2">
                  <FaLinkedin className="text-portfolio-accent-light shrink-0 text-xs" />
                  <a
                    href="https://www.linkedin.com/in/maarten-lommers"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-portfolio-accent-light transition-colors underline"
                  >
                    linkedin.com/in/maarten-lommers
                  </a>
                </li>
              </ul>
            </SidebarSection>

            <SidebarSection title="Education">
              <div className="text-sm text-portfolio-cream-muted">
                <p className="font-bold text-portfolio-cream">Bachelor's degree</p>
                <p>Applied Computer Science</p>
                <p>Thomas More Geel – 2026</p>
              </div>
            </SidebarSection>

            <SidebarSection title="Experience">
              <ul className="space-y-1.5 text-sm text-portfolio-cream-muted">
                {['SOLID Principles', 'REST API', 'Unit Testing', 'Agile & Scrum', 'Client Communication'].map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-accent-light shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </SidebarSection>

            <SidebarSection title="Languages">
              <ul className="space-y-2 text-sm text-portfolio-cream-muted">
                {[['Dutch', 'C2'], ['English', 'C1'], ['Chinese', 'B1']].map(([lang, level]) => (
                  <li key={lang} className="flex justify-between items-center">
                    <span>{lang}</span>
                    <span className="text-xs bg-portfolio-secondary text-portfolio-cream px-2 py-0.5 rounded font-semibold">{level}</span>
                  </li>
                ))}
              </ul>
            </SidebarSection>
          </aside>

          <main className="flex-1 bg-portfolio-cream p-8 text-portfolio-primary-dark">

            <div className="mb-7 border-b border-portfolio-accent/30 pb-6">
              <h1 className="text-4xl font-extrabold leading-none tracking-tight">
                MAARTEN<br />
                <span className="text-portfolio-accent">LOMMERS</span>
              </h1>
            </div>

            <MainSection title="About Me">
              <p className="text-sm text-portfolio-primary leading-relaxed">
                Passionate and curious IT student with a love for big data. I love to explore and
                learn new topics, enthusiastic to explore new cultures and devoted to life-long
                learning.
              </p>
            </MainSection>

            <MainSection title="Work Experience">
              <div className="space-y-5">
                <div>
                  <p className="font-bold text-sm">Mobilab &amp; Care internship</p>
                  <p className="text-xs text-portfolio-secondary mb-1.5">Mobilab &amp; Care, Geel | Feb 2026 – May 2026</p>
                  <p className="text-sm text-portfolio-primary leading-relaxed">
                    Worked as an intern at the scientific research group Mobilab &amp; Care. Here I
                    learned effective client communication and fully managing a project, taking full
                    responsibility.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">Youji</p>
                  <p className="text-xs text-portfolio-secondary mb-1.5">Digital Startup | Since April 2026</p>
                  <p className="text-sm text-portfolio-primary leading-relaxed">
                    A digital startup that delivers a mobile learning application to users. Managing
                    infrastructure, branding and marketing.
                  </p>
                </div>
              </div>
            </MainSection>

            <MainSection title="Projects">
              <div className="space-y-5">
                <div>
                  <p className="font-bold text-sm">
                    Youji <span className="font-normal italic text-portfolio-secondary">(Personal Project)</span>
                  </p>
                  <p className="text-sm text-portfolio-primary leading-relaxed mb-1">
                    Created an iOS &amp; Android compatible mobile learning application while
                    managing branding, infrastructure, marketing and legal requirements.
                  </p>
                  <p className="text-xs text-portfolio-primary">
                    Built with <strong>.NET</strong>, <strong>Flutter</strong> and <strong>ReactTS</strong>
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">
                    Mobilab &amp; Care <span className="font-normal italic text-portfolio-secondary">(Internship)</span>
                  </p>
                  <p className="text-sm text-portfolio-primary leading-relaxed mb-1">
                    Created a full-stack web application for storing, managing and visualizing highly
                    sensitive lung performance data.
                  </p>
                  <p className="text-xs text-portfolio-primary">
                    Built with <strong>.NET</strong> and <strong>ReactJS</strong>
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">
                    The Duffalo's <span className="font-normal italic text-portfolio-secondary">(School)</span>
                  </p>
                  <p className="text-sm text-portfolio-primary leading-relaxed mb-1">
                    In team, created a full-stack web application for storing, managing and visualizing
                    a football club's performance, managing members, seasons, matches and purchases.
                  </p>
                  <p className="text-xs text-portfolio-primary">
                    Built entirely with <strong>Laravel</strong>
                  </p>
                </div>
              </div>
            </MainSection>
          </main>
        </div>

      </div>
    </div>
  )
}

export default CVPage
