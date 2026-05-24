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
  Eye,
  ExternalLink,
  FileText,
  GitBranch,
  LayoutDashboard,
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
  researchDesigns,
  skills
} from "./data/portfolio";

const navItems = ["Profile", "Expertise", "Research", "Impact", "Experience", "Certificates", "Contact"];
const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
const phoneDigits = profile.phone.replace(/\D/g, "");
const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
  "Halo Risko, saya tertarik berdiskusi tentang peluang DevOps / DevSecOps."
)}`;
const professionalLinks = [
  {
    label: "GitHub",
    href: profile.github,
    description: "Code, portfolio source, and engineering work samples.",
    icon: GitBranch
  },
  {
    label: "Technical Writing",
    href: profile.technicalWriting,
    description: "Technical notes, articles, and engineering write-ups.",
    icon: FileText
  }
].filter((link) => Boolean(link.href));

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
            <span className="muted-label block text-xs font-bold uppercase">Senior DevOps Engineer</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <a href={assetPath(profile.cvUrl)} target="_blank" rel="noreferrer" className="btn-primary hidden md:inline-flex">
          View CV
          <Eye className="ml-2" size={17} />
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

      <div className="mx-auto grid min-h-[88vh] w-full max-w-[1540px] items-center gap-10 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] xl:px-10 2xl:px-12">
        <div className="text-white">
          <div className="premium-pill mb-6">
            <Sparkles size={16} />
            Senior DevOps Engineer | DevSecOps  | AI Enthusiast for Security and Reliability
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            {profile.name}
            <span className="hero-accent block">builds secure automation for production teams.</span>
          </h1>

          <p className="dark-copy mt-6 max-w-3xl text-xl font-semibold leading-8 md:text-2xl">
            {profile.headline}
          </p>
          <p className="dark-copy mt-5 max-w-2xl text-base leading-8 md:text-lg">{profile.tagline}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={assetPath(profile.cvUrl)} target="_blank" rel="noreferrer" className="btn-light">
              View CV
              <Eye className="ml-2" size={17} />
            </a>
            <a href={assetPath(profile.cvUrl)} className="btn-light" download>
              CV
              <Download className="ml-2" size={17} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
              WhatsApp
              <ArrowUpRight className="ml-2" size={18} />
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
                8+ years in DevOps, shaped by more than a decade across IT operations, cloud infrastructure, and platform delivery.
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
            {professionalLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="info-row">
                  <Icon size={16} />
                  {link.label}
                  <ExternalLink className="ml-auto" size={14} />
                </a>
              );
            })}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="stat-tile">
                <p className={metric.value === "DevSecOps" ? "metric-value metric-value-devsecops" : "metric-value"}>
                  {metric.value}
                </p>
                <p className="dark-muted mt-1 text-xs font-bold uppercase">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="dark-muted text-sm font-bold uppercase">Boardroom summary</p>
            <p className="dark-copy mt-3 text-sm leading-7">
              Risko helps teams turn automation into controlled, observable, and secure delivery across CI/CD, Kubernetes,
              cloud platforms, and infrastructure operations.
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
          title="Enterprise DevOps capability for reliable, secure delivery."
          subtitle="A concise view of how Risko improves platform operations, automation review, DevSecOps controls, and cloud delivery."
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

function ProfessionalLinks() {
  if (!professionalLinks.length) {
    return null;
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Professional Links"
          title="Source, writing, and external proof points."
          subtitle="Quick access for recruiters and technical interviewers who want to review public engineering signals beyond the resume."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {professionalLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="resource-card">
                <Icon className="icon-primary" size={28} />
                <span>
                  <span className="block text-lg font-black text-slate-950">{link.label}</span>
                  <span className="mt-2 block text-sm leading-7 text-slate-600">{link.description}</span>
                </span>
                <ExternalLink className="ml-auto shrink-0 text-slate-400" size={18} />
              </a>
            );
          })}
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
          title="Core strengths across platforms, automation, and operational security."
          subtitle="Hands-on stack for infrastructure review, CI/CD, Kubernetes, cloud reliability, observability, and release operations."
        />
        <div className="grid min-w-0 gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="command-panel min-w-0">
            <Terminal className="text-[color:var(--accent)]" size={28} />
            <pre className="dark-copy mt-5 max-w-full whitespace-pre-wrap break-words text-xs leading-6 sm:text-sm sm:leading-7">
{`core_focus:
  risk_review: Jenkins, Ansible, Python, Bash, Groovy
  platform: GCP, Alibaba Cloud, VMware, Kubernetes, GKE
  security: hardening, WAF, Vault, Trivy, Semgrep, SonarQube
  delivery: CI/CD, GitOps, ArgoCD, release reliability`}
            </pre>
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-2">
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

function ResearchDesign() {
  return (
    <section id="research" className="section-wrap bg-white">
      <SectionHeader
        eyebrow="Research Design"
        title="Current research project: infrastructure automation delivery pipeline."
        subtitle="A visual architecture artifact that shows how Risko thinks about automation governance, review gates, deployment safety, auditability, and handover discipline."
      />

      <div className="grid gap-6">
        {researchDesigns.map((design) => (
          <article key={design.title} className="research-card">
            <div className="research-copy">
              <div className="flex flex-wrap items-center gap-3">
                <LayoutDashboard className="text-[color:var(--primary)]" size={28} />
                <p className="card-eyebrow">{design.category}</p>
              </div>
              <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950 md:text-3xl">{design.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{design.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {design.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 grid gap-2 text-sm leading-7 text-slate-600">
                {design.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <CheckCircle2 className="mt-1 shrink-0 text-[color:var(--primary)]" size={16} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <a href={assetPath(design.viewerUrl)} className="btn-primary mt-6 w-fit">
                Open Full Design
                <ExternalLink className="ml-2" size={16} />
              </a>
            </div>

            <a href={assetPath(design.viewerUrl)} className="research-preview">
              <img
                src={assetPath(design.image)}
                alt={`${design.title} architecture design`}
                className="research-image"
                loading="lazy"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="section-wrap muted-section">
      <SectionHeader eyebrow="Impact" title="Selected DevOps work across production environments." />
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
      <SectionHeader eyebrow="Experience" title="Progression from infrastructure operations to senior DevOps leadership." />
      <div className="relative space-y-5">
        {journey.map((item) => {
          const isCurrentRole = item.year.includes("Present");

          return (
            <article
              key={`${item.company}-${item.year}`}
              className={isCurrentRole ? "timeline-card timeline-card-current" : "timeline-card"}
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="card-eyebrow">{item.company}</p>
                    {isCurrentRole ? <span className="current-role-badge">Current Role</span> : null}
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">{item.role}</h3>
                </div>
                <p className={isCurrentRole ? "date-badge date-badge-current" : "date-badge"}>{item.year}</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">{item.description}</p>
              {item.details?.length ? (
                <ul className="mt-5 grid gap-2 text-sm leading-7 text-slate-600">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <CheckCircle2 className="mt-1 shrink-0 text-[color:var(--primary)]" size={16} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-4 text-sm leading-7 text-slate-700">
                <span className="font-black text-slate-950">Key Focus:</span> {item.focus}
              </p>
            </article>
          );
        })}
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
          <SectionHeader eyebrow="Activities" title="Applied AI, cybersecurity learning, and technical community work." />
          <div className="space-y-4">
            {achievements.map((item) => (
              <article
                key={item.title}
                className={item.images?.length || item.certificate ? "feature-card activity-card-featured" : "feature-card"}
              >
                <Award className="text-[color:var(--primary)]" size={26} />
                <h3 className="mt-4 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                {item.certificate ? (
                  <a href={assetPath(item.certificate.file)} target="_blank" rel="noreferrer" className="activity-certificate">
                    <img
                      src={assetPath(item.certificate.file)}
                      alt={item.certificate.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.closest("a")?.classList.add("hidden");
                      }}
                    />
                    <span>
                      <span className="block text-xs font-black uppercase text-[color:var(--primary)]">
                        {item.certificate.issuer}
                      </span>
                      <span className="mt-1 block text-sm font-black text-slate-950">{item.certificate.title}</span>
                    </span>
                  </a>
                ) : null}
                {item.images?.length ? (
                  <div className="activity-gallery">
                    <a href={assetPath(item.images[0])} target="_blank" rel="noreferrer" className="activity-main-photo">
                      <img src={assetPath(item.images[0])} alt={`${item.title} main documentation`} loading="lazy" />
                    </a>
                    <div className="activity-thumbnails">
                      {item.images.slice(1).map((image, index) => (
                        <a key={image} href={assetPath(image)} target="_blank" rel="noreferrer" className="activity-thumb">
                          <img src={assetPath(image)} alt={`${item.title} documentation ${index + 2}`} loading="lazy" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
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
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">Ready for DevOps and DevSecOps delivery.</h2>
          <p className="dark-copy mt-5 max-w-2xl leading-8">
            Best fit: regulated production environments that need stronger CI/CD, Kubernetes operations, cloud reliability,
            observability, security hardening, and automation review.
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
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-action">
            <Phone size={19} />
            WhatsApp
            <ExternalLink className="ml-auto" size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-action">
            <Briefcase size={19} />
            LinkedIn Profile
            <ExternalLink className="ml-auto" size={16} />
          </a>
          {professionalLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-action">
                <Icon size={19} />
                {link.label}
                <ExternalLink className="ml-auto" size={16} />
              </a>
            );
          })}
          <a href={assetPath(profile.cvUrl)} target="_blank" rel="noreferrer" className="contact-action">
            <Eye size={19} />
            View CV
            <ExternalLink className="ml-auto" size={16} />
          </a>
          <a href={assetPath(profile.cvUrl)} className="btn-primary mt-2 w-full" download>
            Download CV
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
        <ProfessionalLinks />
        <Profile />
        <CompetencyBand />
        <Expertise />
        <ResearchDesign />
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
