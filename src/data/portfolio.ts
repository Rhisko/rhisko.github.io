export const profile = {
  name: "Risko, S.Si., M.Kom.",
  role: "Senior DevOps Engineer | DevSecOps & Platform Reliability",
  headline: "Secure, observable delivery systems for teams that need fast releases with strong review and recovery controls.",
  tagline:
    "Risko brings 8+ years in DevOps and 10+ years across IT operations, connecting CI/CD, Kubernetes, cloud infrastructure, observability, and security controls with practical production experience.",
  location: "Pamulang, Tangerang Selatan",
  phone: "+62 813 1688 8438",
  email: "risko.alexander@gmail.com",
  linkedin: "https://www.linkedin.com/in/risko-237416106",
  github: "https://github.com/rhisko",
  technicalWriting: "",
  cvUrl: "/cv.pdf",
  photoUrl: "/profile.png"
};

export const metrics = [
  { value: "8+", label: "Years in DevOps" },
  { value: "10+", label: "Years Across IT" },
  { value: "GCP", label: "Cloud & GKE Delivery" },
  { value: "DevSecOps", label: "Security Governance" }
];

export const professionalFocus = [
  {
    title: "Production Platform Leadership",
    value: "DevOps leadership for regulated and business-critical platforms",
    detail:
      "Translates delivery goals into reliable automation, disciplined technical review, and operational controls for environments where downtime and change risk matter.",
    tools: ["Jenkins", "Kubernetes", "Google Cloud Platform", "Linux"]
  },
  {
    title: "Automation Risk Review",
    value: "Automation review across Jenkins, Ansible, VMware, Python, Bash, and Groovy",
    detail:
      "Reviews automation before execution to identify unsafe changes, strengthen validation, and keep provisioning repeatable.",
    tools: ["Jenkins", "Ansible", "VMware", "Python", "Bash", "Groovy"]
  },
  {
    title: "Cloud-Native Delivery",
    value: "GCP, GKE, Kubernetes, ArgoCD, observability, and cost control",
    detail:
      "Builds and operates cloud-native delivery paths with GitOps, monitoring, platform guardrails, and cost-aware operations.",
    tools: ["Google Cloud Platform", "GKE", "Kubernetes", "ArgoCD", "Prometheus", "Grafana"]
  },
  {
    title: "Infrastructure Foundation",
    value: "Systems, networking, backup, and field support foundation",
    detail:
      "Grounded in hands-on Linux administration, enterprise hardware support, troubleshooting, and service recovery before progressing into senior platform engineering.",
    tools: ["Linux", "VMware", "MySQL", "NGINX", "Apache"]
  }
];

export const about = {
  title: "Senior DevOps engineer for production-grade, regulated platforms.",
  paragraphs: [
    "Risko improves the engineering systems behind production delivery, including Jenkins pipelines, Ansible playbooks, VMware workflows, Kubernetes deployments, observability platforms, and cloud infrastructure across Google Cloud Platform and Alibaba Cloud.",
    "His work connects reliability engineering, automation governance, security hardening, vulnerability assessment, observability, and operational discipline. He is also pursuing a Master's Degree in Informatics Engineering with a focus on cybersecurity, data protection, and artificial intelligence."
  ],
  highlights: [
    {
      title: "Automation Governance",
      description:
        "Reviews Jenkins, Groovy, Python, Bash, and Ansible workflows before release to reduce change risk and improve repeatability."
    },
    {
      title: "Cloud-Native Delivery",
      description:
        "Builds CI/CD and GitOps delivery across Jenkins, ArgoCD, Kubernetes, GKE, Docker, Helm, and cloud services."
    },
    {
      title: "Operational Security",
      description:
        "Applies hardening, access protection, scanning, WAF, Cloud Armor, and Vault practices as practical delivery controls."
    },
    {
      title: "Observability & Cost",
      description:
        "Uses Prometheus, Grafana, and Google Cloud Monitoring to improve signal quality, incident response, and cloud cost discipline."
    }
  ]
};

export const competencies = [
  "Infrastructure Automation & Provisioning",
  "CI/CD Architecture & Release Engineering",
  "DevSecOps Controls & Vulnerability Assessment",
  "VMware and Ansible Automation Review",
  "Kubernetes, Containers & GitOps Deployment",
  "Cloud Operations on GCP and Alibaba Cloud",
  "Monitoring, Observability & Incident Response",
  "Python, Bash & Groovy Automation",
  "Technical Review, Mentoring & Cross-Team Delivery",
  "AI-Assisted Security Analysis"
];

export const skills = [
  {
    category: "Cloud & Virtualization",
    items: ["Google Cloud Platform", "Alibaba Cloud", "VMware", "DigitalOcean"]
  },
  {
    category: "Containers & Orchestration",
    items: ["Kubernetes", "GKE", "Docker", "Helm", "ArgoCD"]
  },
  {
    category: "CI/CD & Automation",
    items: ["Jenkins", "GitLab CI", "Bitbucket", "Ansible", "Terraform"]
  },
  {
    category: "DevSecOps & Security",
    items: ["WAF", "Cloud Armor", "HashiCorp Vault", "Trivy", "Semgrep", "SonarQube"]
  },
  {
    category: "Observability",
    items: ["Prometheus", "Grafana", "Google Cloud Monitoring", "Incident Troubleshooting"]
  },
  {
    category: "Programming & Platforms",
    items: ["Python", "Bash", "Groovy", "Go", "REST API", "Linux", "NGINX", "Apache"]
  },
  {
    category: "Database & Middleware",
    items: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ", "NSQ"]
  }
];

export const researchDesigns = [
  {
    title: "Infrastructure Automation Delivery Pipeline",
    category: "Reference Architecture | Platform-Agnostic Automation",
    image: "/assets/Design/Infra_design_automation_1.png",
    viewerUrl: "/design-infra-automation.html",
    description:
      "A reference architecture for a secure, auditable, and repeatable infrastructure automation pipeline. The flow covers request intake, AI-assisted review, engineer approval, Terraform/Ansible preparation, state locking, deployment validation, and Confluence-based handover.",
    stack: ["Jira", "Jenkins", "Terraform", "Ansible", "Confluence", "OpenAI", "Claude", "DevSecOps"],
    highlights: [
      "Defines review gates before infrastructure changes are executed in production.",
      "Combines AI-assisted review with engineer approval to reduce automation risk.",
      "Documents audit trail, deployment status flow, Terraform state lock, and handover process."
    ]
  },
  {
    title: "OpenShift Platform Request Automation",
    category: "Reference Architecture | OpenShift Governance Automation",
    image: "/assets/Design/Infra_design_automation_2.png",
    viewerUrl: "/design-openshift-automation.html",
    description:
      "A reference architecture for automating OpenShift platform requests through controlled approvals, Jenkins validation, Git-based manifest generation, pull request review, Argo CD synchronization, and structured failure handling.",
    stack: ["Jira", "Jenkins", "Git", "GitHub", "GitLab", "Argo CD", "OpenShift", "RBAC", "PVC"],
    highlights: [
      "Covers namespace, quota/LimitRange, RBAC, and PVC request flows with manual approval gates.",
      "Separates Git as desired state, Argo CD as deployment state, and OpenShift as runtime state.",
      "Maps failure scenarios for Jenkins, Argo CD, Git, Jira, validation, and partial synchronization."
    ]
  },
  {
    title: "Intelligent DevSecOps Framework",
    category: "Reference Architecture | AI-Assisted DevSecOps",
    image: "/assets/Design/Infra_design_automation_3.png",
    viewerUrl: "/design-intelligent-devsecops.html",
    description:
      "A reference architecture for an AI-assisted DevSecOps framework connecting source control, Jenkins, linting, Semgrep SAST, container image builds, Trivy scanning, SonarQube quality gates, LangChain advisory, human review, Kubernetes deployment, and audit trail storage.",
    stack: ["GitHub", "Jenkins", "Semgrep", "Docker", "Trivy", "SonarQube", "LangChain", "Kubernetes", "Slack"],
    highlights: [
      "Combines automated validation, security scanning, AI advisory, and human approval before release.",
      "Produces human-readable HTML analysis with risk level, root cause, impact, recommended fixes, and next actions.",
      "Maintains audit artifacts across scan reports, AI advisory output, deployment logs, and release decisions."
    ]
  }
];

export const projects = [
  {
    title: "Network Automation Provisioning",
    company: "PT. Bank Danamon Indonesia Tbk",
    description:
      "Built automation for network operations provisioning workflows across F5 and Infoblox devices.",
    stack: ["F5", "Infoblox", "Network Automation", "Python", "API", "Provisioning"],
    impact:
      "Reduced manual operational steps, standardized request execution, and improved review quality before infrastructure changes."
  },
  {
    title: "VMware Provisioning Automation Review",
    company: "PT. Bank Danamon Indonesia Tbk",
    description:
      "Reviewed Jenkins, Ansible, Python, Groovy, and Bash workflows for VMware-based infrastructure provisioning.",
    stack: ["Jenkins", "Ansible", "VMware", "Python", "Groovy", "Bash"],
    impact:
      "Strengthened validation, reduced change risk, and improved confidence before production execution."
  },
  {
    title: "Server Hardening & Vulnerability Automation",
    company: "PT. Bank Danamon Indonesia Tbk",
    description:
      "Partnered with infrastructure and hardening teams to automate server baseline checks and vulnerability assessment tasks.",
    stack: ["Ansible", "Linux", "Hardening", "Vulnerability Assessment"],
    impact:
      "Made hardening activities more repeatable, easier to review, and better aligned with operational security requirements."
  },
  {
    title: "Cloud Monitoring & Cost Optimization",
    company: "PT. Jaya Agung Teknologi",
    description:
      "Integrated Grafana with Google Cloud Monitoring and reviewed monitoring usage to reduce overlap and improve cost visibility.",
    stack: ["GCP", "Grafana", "Prometheus", "Cloud Monitoring"],
    impact:
      "Reduced redundant tooling and created a centralized observability view for better visibility and cost discipline."
  },
  {
    title: "Kubernetes & GitOps Modernization",
    company: "PT. Jaya Agung Teknologi",
    description:
      "Designed and maintained Jenkins and ArgoCD workflows for Kubernetes workloads across cloud environments.",
    stack: ["Jenkins", "ArgoCD", "Kubernetes", "GKE", "Helm"],
    impact:
      "Improved deployment consistency, release confidence, and day-to-day Kubernetes operations."
  },
  {
    title: "Application Containerization Standards",
    company: "Indosoft IT Konsultan",
    description:
      "Migrated traditional server-based deployments into Docker-based delivery patterns.",
    stack: ["Docker", "Docker Compose", "Linux", "CI/CD"],
    impact:
      "Reduced dependency drift, improved environment consistency, simplified release packaging, and strengthened rollback options."
  },
  {
    title: "Multi-Site Network & POS Implementation",
    company: "Indosoft IT Konsultan",
    description:
      "Delivered network infrastructure and POS software implementation for hotel and entertainment business clients across multiple locations.",
    stack: ["Network Setup", "POS Software", "System Configuration", "Troubleshooting", "Client Handover"],
    impact:
      "Improved rollout consistency through structured setup, user coordination, troubleshooting, and operational handover."
  },
  {
    title: "GKE Migration & Platform Delivery",
    company: "PT. Jaya Agung Teknologi",
    description:
      "Led application workload migration from on-premises infrastructure to Google Kubernetes Engine.",
    stack: ["GKE", "GCP", "Kubernetes", "CI/CD"],
    impact:
      "Enabled a scalable deployment model with stronger platform consistency and production reliability."
  }
];

export const journey = [
  {
    company: "PT. Bank Danamon Indonesia Tbk",
    role: "Senior DevOps Engineer",
    year: "Dec 2023 - Present",
    description:
      "Leads technical review for infrastructure and network provisioning, Jenkins jobs, Ansible validation, VMware workflow risk assessment, server hardening, and Python internal tooling.",
    details: [
      "Reviews Jenkins jobs, Groovy scripts, Python, Bash, and Ansible playbooks before production execution to reduce automation failure risk.",
      "Supports network automation provisioning for operational workflows involving F5 and Infoblox devices.",
      "Assesses VMware and Ansible integration flows, including storage allocation, execution validation, and infrastructure impact review.",
      "Partners with infrastructure and hardening teams to improve server hardening automation, logging, error handling, and operational safety."
    ],
    focus:
      "Infrastructure & Network Provisioning, VMware Review, Jenkins Governance, Ansible Validation, Server Hardening"
  },
  {
    company: "PT. Jaya Agung Teknologi",
    role: "Senior DevOps Engineer",
    year: "Feb 2022 - Dec 2023",
    description:
      "Owned Jenkins and ArgoCD delivery workflows, maintained GCP infrastructure, implemented Prometheus/Grafana observability, migrated Kubernetes workloads, optimized cloud costs, and mentored junior engineers.",
    details: [
      "Designed and maintained CI/CD workflows with Jenkins and ArgoCD for cloud-native application delivery.",
      "Operated GCP and GKE environments, including Kubernetes workload migration from on-premises infrastructure.",
      "Integrated Prometheus, Grafana, and Google Cloud Monitoring to improve observability and operational response.",
      "Reviewed cloud resource usage, reduced redundant monitoring tooling, strengthened access protection, and mentored junior engineers."
    ],
    focus:
      "Cloud Infrastructure, Kubernetes Operations, GitOps, GCP, Observability, Cost Optimization"
  },
  {
    company: "Inwinteck Singapore",
    role: "Field Engineer - Freelance",
    year: "Mar 2019 - Dec 2023",
    description:
      "Delivered on-site enterprise server hardware support, failed component replacement, validation, client coordination, and technical reporting.",
    details: [
      "Delivered enterprise server service restoration through hardware diagnosis, FRU replacement, and post-replacement validation.",
      "Coordinated with clients and remote technical teams to complete field activities with clear reporting."
    ],
    focus: "Enterprise Server Support, Hardware Replacement, Service Restoration, Client Communication"
  },
  {
    company: "Indosoft IT Konsultan",
    role: "DevOps Engineer & Backend Developer",
    year: "Nov 2018 - Jan 2022",
    description:
      "Managed 20+ Ubuntu Linux servers, designed Jenkins and GitLab CI pipelines, operated Alibaba Cloud and DigitalOcean infrastructure, developed Django REST APIs, configured VPN connectivity, and built Python/Bash automation.",
    details: [
      "Administered Ubuntu production servers, web infrastructure, databases, middleware, and routine operational support.",
      "Built Jenkins and GitLab CI pipelines to standardize build, deployment, and release workflows.",
      "Operated Alibaba Cloud and DigitalOcean infrastructure to support scalable application environments.",
      "Developed Django REST APIs, including payment gateway integration for transaction processing.",
      "Used Docker Compose, MikroTik VPN configuration, and Python/Bash automation to improve environment consistency."
    ],
    focus:
      "Linux Operations, CI/CD, Cloud Infrastructure, Backend API Development, Docker Compose, VPN, Production Support"
  },
  {
    company: "PT. Semen Padang - Aceh Area",
    role: "Warehouse Lead",
    year: "Aug 2017 - Jun 2018",
    description:
      "Coordinated warehouse-to-customer shipment operations, inventory scheduling, stock control, monthly audit activities, and weekly reporting for area management.",
    details: [
      "Managed shipment coordination, inventory accuracy, and operational reporting in a structured field operations environment.",
      "Built early leadership experience in coordination, documentation, audit discipline, and cross-functional execution."
    ],
    focus: "Operations Coordination, Inventory Control, Stock Audit, Reporting, Team Coordination"
  },
  {
    company: "PT. Melody Indah Swara",
    role: "System Administrator",
    year: "Jan 2015 - Jul 2017",
    description:
      "Monitored system performance, automated administration tasks with Bash, administered MikroTik networking, maintained Ubuntu servers and MySQL databases, and handled endpoint security, backup, restore, and recovery.",
    details: [
      "Maintained Linux servers, MikroTik networking, MySQL databases, backup processes, and endpoint security operations.",
      "Automated recurring administration tasks with Bash to reduce manual operational work."
    ],
    focus: "IT Operations, Linux Administration, Bash Automation, MikroTik, MySQL, Backup & Recovery"
  },
  {
    company: "PT. Lintas Sei Ladi",
    role: "System Administrator",
    year: "Jan 2011 - Jan 2015",
    description:
      "Managed internal IT infrastructure operations, endpoint support, network cabling, MikroTik connectivity, troubleshooting, backup and recovery, hardware maintenance, and audio streaming infrastructure.",
    details: [
      "Supported internal users, network connectivity, hardware maintenance, backup and recovery, and daily infrastructure troubleshooting.",
      "Maintained MikroTik connectivity and audio streaming infrastructure for operational continuity."
    ],
    focus: "System Administration, Network Operations, Endpoint Support, Backup & Recovery, Hardware Support"
  }
];

export const achievements = [
  {
    title: "Finalist - International AI Hackathon, PPATK",
    description:
      "Selected as a finalist in TrackAML Hackathon 2.0 International, applying analytical thinking and AI concepts to real AML/CFT problem statements.",
    certificate: {
      title: "TrackAML Hackathon 2.0 International - Finalist Certificate",
      issuer: "PPATK",
      file: "/assets/Activity/trackaml-hackathon-finalist-certificate.jpg"
    }
  },
  {
    title: "Speaker - Artificial Intelligence Awareness Session",
    description:
      "Delivered an introductory AI session covering fundamentals, technology trends, and practical use cases for vocational students at SMK Sasmita Jaya 1.",
    images: [
      "/assets/Activity/Pkm_1.jpeg",
      "/assets/Activity/PKm_2.jpeg",
      "/assets/Activity/Pkm_3.jpeg",
      "/assets/Activity/Pkm_4.jpeg"
    ]
  },
  {
    title: "Postgraduate Academic Development",
    description:
      "Developing postgraduate capability in cybersecurity, DevSecOps, artificial intelligence, applied security, and data protection."
  }
];

export const education = [
  {
    school: "Pamulang University",
    program: "Master's Degree in Informatics Engineering",
    year: "2024 - Present",
    detail:
      "Postgraduate focus on cybersecurity, DevSecOps, artificial intelligence, and data protection. Thesis direction: information security controls for DevSecOps delivery."
  },
  {
    school: "STMIK GICI Business School Batam",
    program: "Bachelor's Degree in Information Systems",
    year: "August 2011 - September 2016",
    detail: "GPA: 3.26"
  }
];

export const certifications = [
  "Red Hat Pro Academy DevOps by Kominfo - Containers, Kubernetes, OpenShift",
  "Google Cloud Fundamentals, Core Infrastructure, Cloud Architecture, Kubernetes in Google Cloud / GKE, Terraform in Google Cloud",
  "Alibaba Cloud Professional Training",
  "AWS Academy - Cloud Developing",
  "Artificial Intelligence webinars and applied AI learning",
  "Natural Language Processing for healthcare, security, and learning",
  "Solo.io - Fundamentals for Istio",
  "Baba Studio - Data Science & Machine Learning with Python",
  "HPE Nimble & Rubrik - Hardware Repair & FRU Part Replacement"
];

export const certificateAssets = [
  {
    title: "Red Hat Pro Academy DevOps by Kominfo",
    issuer: "Kominfo / Red Hat Pro Academy",
    category: "DevOps, Containers, Kubernetes, OpenShift",
    file: "/assets/certifications/redhat-kominfo-devops.jpg",
    type: "image"
  },
  {
    title: "Alibaba Cloud Certified Professional",
    issuer: "Alibaba Cloud",
    category: "Cloud Infrastructure",
    file: "/assets/certifications/alibaba-cloud-certified-pro.jpg",
    type: "image"
  },
  {
    title: "AWS Academy Cloud Developing",
    issuer: "AWS Academy",
    category: "Cloud Development",
    file: "/assets/certifications/aws-academy.jpg",
    type: "image"
  },
  {
    title: "AWS Certified Badge",
    issuer: "AWS",
    category: "Cloud Certification Badge",
    file: "/assets/certifications/aws-certified.png",
    type: "image"
  },
  {
    title: "Google Cloud Architecture Badge",
    issuer: "Google Cloud",
    category: "Cloud Architecture",
    file: "/assets/certifications/gcp-cloud-architecture-badge.png",
    type: "image"
  },
  {
    title: "Kecerdasan Artifisial, Sains Data dan Pendidikan Masa Depan",
    issuer: "Universitas Pamulang / BRIN",
    category: "Artificial Intelligence, Data Science, Education",
    file: "/assets/certifications/Certification-Ai-01.pdf",
    thumbnail: "/assets/certifications/thumbnails/certification-ai-01.jpg",
    type: "pdf"
  },
  {
    title: "Sinergi IoT, Artificial Intelligence, and Cyber Physical System",
    issuer: "Universitas Pamulang",
    category: "IoT, Artificial Intelligence, Cyber Physical System",
    file: "/assets/certifications/Certification-Ai-02.pdf",
    thumbnail: "/assets/certifications/thumbnails/certification-ai-02.jpg",
    type: "pdf"
  },
  {
    title: "Artificial Intelligence and Computer Vision",
    issuer: "Universitas Pamulang / BRIN",
    category: "Artificial Intelligence, Computer Vision",
    file: "/assets/certifications/Certification-Ai-03.pdf",
    thumbnail: "/assets/certifications/thumbnails/certification-ai-03.jpg",
    type: "pdf"
  },
  {
    title: "One Language, Many Benefits: NLP Technology",
    issuer: "BRIN",
    category: "NLP, Healthcare, Security, Learning",
    file: "/assets/certifications/NLP .jpeg",
    type: "image"
  },
  {
    title: "Humanizing Artificial Intelligence",
    issuer: "STEI ITB",
    category: "Artificial Intelligence, Indonesian AI Ecosystem",
    file: "/assets/certifications/ITB Ai.jpeg",
    type: "image"
  },
  {
    title: "Solo.io Fundamentals for Istio",
    issuer: "Solo.io",
    category: "Service Mesh, Istio",
    file: "/assets/certifications/istio.png",
    type: "image"
  },
  {
    title: "Data Science & Machine Learning with Python",
    issuer: "Baba Studio",
    category: "AI, Data Science, Python",
    file: "/assets/certifications/data-science-machine-learning-python.pdf",
    thumbnail: "/assets/certifications/thumbnails/data-science-machine-learning-python.jpg",
    type: "pdf"
  },
  {
    title: "Data Center Training",
    issuer: "Professional Training",
    category: "Infrastructure Operations",
    file: "/assets/certifications/data-center.pdf",
    thumbnail: "/assets/certifications/thumbnails/data-center.jpg",
    type: "pdf"
  },
  {
    title: "HPE Nimble HF-Series",
    issuer: "HPE",
    category: "Enterprise Storage",
    file: "/assets/certifications/hpe-nimble-hf-series.pdf",
    thumbnail: "/assets/certifications/thumbnails/hpe-nimble-hf-series.jpg",
    type: "pdf"
  },
  {
    title: "Nimble FRU Replacement",
    issuer: "HPE Nimble",
    category: "Hardware Repair & FRU",
    file: "/assets/certifications/nimble-fru-replacement.pdf",
    thumbnail: "/assets/certifications/thumbnails/nimble-fru-replacement.jpg",
    type: "pdf"
  },
  {
    title: "Nimble Certification",
    issuer: "HPE Nimble",
    category: "Enterprise Storage Support",
    file: "/assets/certifications/nimble-certification.pdf",
    thumbnail: "/assets/certifications/thumbnails/nimble-certification.jpg",
    type: "pdf"
  },
  {
    title: "Rubrik Certification",
    issuer: "Rubrik",
    category: "Backup, Recovery, Enterprise Support",
    file: "/assets/certifications/rubrik-certification.pdf",
    thumbnail: "/assets/certifications/thumbnails/rubrik-certification.jpg",
    type: "pdf"
  },
  {
    title: "Rubrik Certification 2",
    issuer: "Rubrik",
    category: "Backup & Recovery",
    file: "/assets/certifications/rubrik-certification-2.pdf",
    thumbnail: "/assets/certifications/thumbnails/rubrik-certification-2.jpg",
    type: "pdf"
  }
];
