import {
  ArrowUp,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow
} from "lucide-react";

import { activeTheme } from "./config/theme";
import {
  about,
  achievements,
  certificateAssets,
  certifications,
  competencies,
  education,
  journey,
  metrics,
  professionalFocus,
  profile,
  projects,
  skills
} from "./data/portfolio";

const navItems = ["Profile", "Expertise", "Impact", "Experience", "Certificates", "Contact"];
const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3 text-slate-950">
          <span className="brand-mark">
            <Cloud size={23} />
          </span>
          <span>
            <span className="block text-base font-black leading-5">{profile.name}</span>
            <span className="muted-label block text-xs font-bold uppercase">Senior DevOps</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <a href={assetPath(profile.cvUrl)} className="btn-primary hidden md:inline-flex" download>
          Download Resume
          <Download className="ml-2" size={17} />
        </a>
      </nav>
    </header>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      <h2 className={dark ? "section-title text-white" : "section-title text-slate-950"}>{title}</h2>
      {subtitle ? <p className={dark ? "section-copy dark-copy" : "section-copy text-slate-600"}>{subtitle}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section relative isolate overflow-hidden pt-24">
      <div className="hero-bg absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[length:32px_32px] opacity-20" />

      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.03fr_0.97fr]">
        <div className="text-white">
          <div className="premium-pill mb-6">
            <Sparkles size={16} />
            DevOps | DevSecOps | AI Enthusiast
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            {profile.name}
            <span className="hero-accent block">secures and automates production delivery.</span>
          </h1>

          <p className="dark-copy mt-6 max-w-3xl text-xl font-semibold leading-8 md:text-2xl">
            {profile.headline}
          </p>
          <p className="dark-copy mt-5 max-w-2xl text-base leading-8 md:text-lg">{profile.tagline}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#impact" className="btn-primary">
              Review Impact
              <ArrowUpRight className="ml-2" size={18} />
            </a>
            <a href="#certificates" className="btn-ghost">
              View Certificates
              <Award className="ml-2" size={17} />
            </a>
          </div>
        </div>

        <aside className="executive-panel">
          <div className="grid gap-6 md:grid-cols-[180px_1fr]">
            <div className="profile-frame">
              <img src={assetPath(profile.photoUrl)} alt="Risko profile" className="profile-photo" />
            </div>
            <div>
              <p className="eyebrow eyebrow-dark">Keep Moving Forward</p>
              <h2 className="mt-3 text-3xl font-black text-white">{profile.role}</h2>
              <p className="dark-copy mt-3 text-sm leading-7">
                8+ years Experience, 10+ years in IT industry
              </p>
            </div>
          </div>

          <div className="dark-copy mt-5 grid gap-3 text-sm">
            <a href={`mailto:${profile.email}`} className="info-row">
              <Mail size={16} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="info-row">
              <Phone size={16} />
              {profile.phone}
            </a>
            <span className="info-row">
              <MapPin size={16} />
              {profile.location}
            </span>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="stat-tile">
                <p className="text-3xl font-black text-white">{metric.value}</p>
                <p className="dark-muted mt-1 text-xs font-bold uppercase">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="dark-muted text-sm font-bold uppercase">Boardroom summary</p>
            <p className="dark-copy mt-3 text-sm leading-7">
              Risko supports teams that need automation quality, production safety, CI/CD maturity, Kubernetes operations,
              cloud visibility, and practical DevSecOps controls.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Profile() {
  const icons = [Workflow, Cloud, ShieldCheck, BarChart3];

  return (
    <section id="profile" className="section-wrap">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Profile" title={about.title} />
          <div className="space-y-5 text-base leading-8 text-slate-600">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map((highlight, index) => {
            const Icon = icons[index] ?? CheckCircle2;
            return (
              <article key={highlight.title} className="feature-card">
                <Icon className="icon-primary" size={30} />
                <h3 className="mt-5 text-lg font-black text-slate-950">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProfessionalFocus() {
  return (
    <section className="muted-section py-16">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Professional Focus"
          title="Enterprise DevOps capability for secure and reliable delivery."
          subtitle="A concise view of the operating strengths Risko brings to cloud platforms, automation governance, DevSecOps, and production engineering."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {professionalFocus.map((item) => (
            <article key={item.title} className="analysis-card">
              <p className="card-eyebrow">{item.title}</p>
              <h3 className="mt-3 text-xl font-black text-slate-950">{item.value}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const icons = [Cloud, Workflow, Code2, ShieldCheck, BarChart3, Terminal, Building2];

  return (
    <section id="expertise" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Expertise"
          title="Corporate-ready strengths across automation, platforms, and security."
          subtitle="A practical engineering stack for infrastructure automation, cloud operations, platform reliability, and secure release delivery."
        />
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="command-panel">
            <Terminal className="text-[color:var(--accent)]" size={28} />
            <pre className="dark-copy mt-5 overflow-x-auto text-sm leading-7">
{`core_focus:
  automation_review: Jenkins, Ansible, Python, Bash, Groovy
  platform: GCP, Alibaba Cloud, VMware, Kubernetes, GKE
  security: hardening, WAF, Vault, Trivy, Semgrep, SonarQube
  delivery: CI/CD, GitOps, ArgoCD, release reliability`}
            </pre>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = icons[index] ?? Code2;
              return (
                <article key={skill.category} className="skill-card">
                  <Icon className="icon-primary" size={28} />
                  <h3 className="mt-4 text-lg font-black text-slate-950">{skill.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetencyBand() {
  return (
    <section className="dark-section py-14 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {competencies.map((item) => (
            <div key={item} className="competency-chip">
              <CheckCircle2 className="shrink-0 text-[color:var(--accent)]" size={18} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="section-wrap muted-section">
      <SectionHeader eyebrow="Impact" title="Selected delivery stories with production relevance." />
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <p className="card-eyebrow">{project.company}</p>
            <h3 className="mt-3 text-xl font-black text-slate-950">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-700">
              <span className="font-black text-slate-950">Impact:</span> {project.impact}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <SectionHeader eyebrow="Experience" title="Senior DevOps experience with banking, cloud, and infrastructure context." />
      <div className="relative space-y-5">
        {journey.map((item) => (
          <article key={`${item.company}-${item.year}`} className="timeline-card">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="card-eyebrow">{item.company}</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950">{item.role}</h3>
              </div>
              <p className="date-badge">{item.year}</p>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">{item.description}</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              <span className="font-black text-slate-950">Key Focus:</span> {item.focus}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="dark-section py-16 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Certificates"
          title="Training and certification highlights."
          subtitle="Selected credentials across DevOps, cloud, Kubernetes, storage, backup and recovery, service mesh, data science, and machine learning."
          dark
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificateAssets.map((cert) => (
            <article key={cert.file} className="certificate-card">
              <a href={assetPath(cert.file)} target="_blank" rel="noreferrer" className="certificate-preview">
                <img
                  src={assetPath(cert.thumbnail ?? cert.file)}
                  alt={cert.title}
                  className="h-full w-full object-cover"
                />
              </a>
              <div className="p-5">
                <p className="text-xs font-black uppercase text-[color:var(--accent)]">{cert.issuer}</p>
                <h3 className="mt-2 text-lg font-black text-white">{cert.title}</h3>
                <p className="dark-copy mt-2 text-sm leading-6">{cert.category}</p>
                <a href={assetPath(cert.file)} target="_blank" rel="noreferrer" className="dark-link mt-4 inline-flex items-center text-sm font-black">
                  Open certificate
                  <ExternalLink className="ml-2" size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert} className="credential-row">
              <Award className="shrink-0 text-[color:var(--accent)]" size={19} />
              <p className="dark-copy text-sm font-semibold leading-6">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationAndActivity() {
  return (
    <section className="section-wrap muted-section">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Education" title="Academic foundation and current postgraduate direction." />
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.school} className="feature-card">
                <BookOpen className="text-[color:var(--primary)]" size={26} />
                <h3 className="mt-4 text-xl font-black text-slate-950">{item.school}</h3>
                <p className="mt-2 text-sm font-bold text-[color:var(--primary)]">{item.program} | {item.year}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader eyebrow="Activities" title="AI, cybersecurity, and community-facing technology work." />
          <div className="space-y-4">
            {achievements.map((item) => (
              <article key={item.title} className="feature-card">
                <Award className="text-[color:var(--primary)]" size={26} />
                <h3 className="mt-4 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <div className="contact-panel">
        <div>
          <p className="eyebrow eyebrow-dark">Contact</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">Ready for corporate DevOps and DevSecOps delivery.</h2>
          <p className="dark-copy mt-5 max-w-2xl leading-8">
            Best fit: infrastructure automation, CI/CD modernization, Kubernetes operations, cloud platform reliability,
            security hardening automation, observability, and production support maturity.
          </p>
        </div>

        <div className="grid gap-3">
          <a href={`mailto:${profile.email}`} className="contact-action">
            <Mail size={19} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-action">
            <Phone size={19} />
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-action">
            <Briefcase size={19} />
            LinkedIn Profile
            <ExternalLink className="ml-auto" size={16} />
          </a>
          <a href={assetPath(profile.cvUrl)} className="btn-primary mt-2 w-full" download>
            Download Resume
            <Download className="ml-2" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <div className="flex items-center gap-2 font-black text-slate-950">
          <Cloud className="text-[color:var(--primary)]" size={24} />
          <span>{profile.name} | Senior DevOps Engineer</span>
        </div>
        <p>© {new Date().getFullYear()} {profile.name} Lifelong Learners </p>
      </div>
    </footer>
  );
}

function ScrollTopButton() {
  return (
    <a href="#" aria-label="Back to top" className="scroll-top">
      <ArrowUp size={20} />
    </a>
  );
}

export default function App() {
  return (
    <div data-theme={activeTheme} className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProfessionalFocus />
        <Profile />
        <CompetencyBand />
        <Expertise />
        <Impact />
        <Experience />
        <Certificates />
        <EducationAndActivity />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
