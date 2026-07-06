import {
  FiArrowRight,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaLaravel,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { BsDatabase, BsTools } from "react-icons/bs";
import { LuCloudCog } from "react-icons/lu";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import aboutVisual from "./assets/visula2.png";
import "./App.css";

const contact = {
  name: "Raj Kapoor Gautam",
  email: "rajkapoor200d@gmail.com",
  phone: "+91-7392822658",
  location: "Mohali, India",
};

const skillGroups = [
  {
    title: "Frontend",
    tone: "green",
    icon: <FaReact />,
    items: ["ReactJS", "JavaScript (ES6)", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    tone: "blue",
    icon: <FaLaravel />,
    items: ["Laravel", "PHP", "RESTful APIs"],
  },
  {
    title: "Database",
    tone: "purple",
    icon: <BsDatabase />,
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "DevOps & CI/CD",
    tone: "orange",
    icon: <LuCloudCog />,
    items: ["Docker", "Docker Compose", "Git", "GitHub", "CI/CD Pipelines", "Linux", "Deployment Workflow"],
  },
  {
    title: "Tools & Others",
    tone: "cyan",
    icon: <BsTools />,
    items: ["Postman", "VS Code", "Jira", "Agile Methodology", "ChatGPT", "Cursor", "Debugging", "API Integration"],
  },
  {
    title: "CMS & E-commerce",
    tone: "teal",
    icon: <FaLaravel />,
    items: ["WordPress", "Elementor", "Custom Theme & Plugin Development", "WooCommerce", "Squarespace"],
  },
  {
    title: "Donation Platforms",
    tone: "rose",
    icon: <FaGithub />,
    items: ["FundraiseUp", "CharityStack", "GiveWP", "Skrraggle", "GiveCloud", "GiveLovely", "Donorbox"],
  },
  {
    title: "Hosting & Cloud",
    tone: "ice",
    icon: <LuCloudCog />,
    items: ["AWS", "Hostinger", "Vercel", "Netlify", "cPanel"],
  },
  {
    title: "Analytics & Tracking",
    tone: "gold",
    icon: <FaReact />,
    items: ["GTM", "GA4", "Google Ads", "Conversion Tracking", "DataLayer", "Pixel Integration"],
  },
  {
    title: "AI Tools",
    tone: "purple",
    icon: <BsTools />,
    items: ["ChatGPT", "Claude AI", "Cursor AI", "Codex"],
  },
];

const projects = [
  {
    name: "Aviotik",
    stack: "Laravel",
    color: "sky",
    text: "Flight booking platform using EaseMyTrip APIs with admin panel.",
  },
  {
    name: "Skrragle",
    stack: "ReactJS",
    color: "rose",
    text: "Donation management platform with widgets, forms, and analytics.",
  },
  {
    name: "Adams Center",
    stack: "Laravel",
    color: "gold",
    text: "Donation platform integrated with Salesforce APIs and payment gateways.",
  },
  {
    name: "STV-AI-Studio",
    stack: "ReactJS",
    color: "ice",
    text: "AI image processing app for background removal powered by Flask.",
  },
  {
    name: "NADA India",
    stack: "WordPress",
    color: "teal",
    text: "Official WordPress website for the National Anti-Doping Agency, India.",
  },
];

const experience = [
  {
    company: "Dipole Tech Innovation Pvt. Ltd.",
    role: "Software Engineer",
    period: "2023 - Present",
    points: [
      "Lead development work for scalable, production-ready web applications.",
      "Build CI/CD workflows and manage deployment processes.",
      "Integrate GTM, GA4, payment gateways, and third-party services.",
      "Develop features with ReactJS, Laravel, PHP, and cloud-based tools.",
    ],
  },
  {
    company: "Laitkor Consultancy Services Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "2021 - 2023",
    points: [
      "Developed application modules using ReactJS, Laravel, PHP, and JavaScript.",
      "Integrated third-party APIs and improved database query performance.",
      "Supported debugging, testing, maintenance, and feature improvements.",
    ],
  },
];

function SectionTitle({ children }) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      <span />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-visual">
        <img src={aboutVisual} alt="About visual" />
      </div>

      <div className="about-copy">
        <SectionTitle>About Me</SectionTitle>
        <p>
          I'm a Full Stack Developer with 3.5+ years of experience building
          practical, scalable, and user-friendly web applications.
        </p>
        <p>
          I work mainly with ReactJS, Laravel, PHP, JavaScript, APIs, and CI/CD
          workflows.
        </p>
        <p>
          I enjoy turning business requirements into clean interfaces, reliable
          backend systems, optimized performance, analytics tracking, and secure
          payment integrations.
        </p>

        <div className="info-row">
          <div>
            <FiUser />
            <span>Name:</span>
            <strong>{contact.name}</strong>
          </div>
          <div>
            <FiMail />
            <span>Email:</span>
            <strong>{contact.email}</strong>
          </div>
          <div>
            <FiPhone />
            <span>Phone:</span>
            <strong>{contact.phone}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className={`skill-card ${group.tone}`} key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="skill-icon">{group.icon}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <SectionTitle>Projects</SectionTitle>
        <a href="#contact">
          Discuss a Project <FiArrowRight />
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className={`project-shot ${project.color}`}>
              <span>{project.name}</span>
            </div>
            <div className="project-body">
              <div className="project-name">
                <h3>{project.name}</h3>
                <small>{project.stack}</small>
              </div>
              <p>{project.text}</p>
              <FiExternalLink className="project-link" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle>Experience</SectionTitle>
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={job.company}>
            <div className="timeline-dot" />
            <div className="timeline-top">
              <h3>{job.company}</h3>
              <span>{job.period}</span>
            </div>
            <h4>{job.role}</h4>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const edu = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "Institute of Engineering and Technology, Lucknow",
      year: "2021",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Dr. Rammanohar Lohiya Avadh University, Faizabad",
      year: "2018",
    },
  ];

  return (
    <section id="education" className="section">
      <SectionTitle>Education</SectionTitle>
      <div className="education-grid">
        {edu.map((e) => (
          <article className="edu-card" key={e.degree}>
            <h3>{e.degree}</h3>
            <small>{e.institute}</small>
            <div className="edu-year">{e.year}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [emailField, setEmailField] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const web3formsApiKey = import.meta.env.VITE_WEB3FORMS_API_KEY || null;
  const formspreeEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || null;
  const endpoint = formspreeEndpoint || (web3formsApiKey ? "https://api.web3forms.com/submit" : null);
  const isWeb3Forms = Boolean(web3formsApiKey);
  const useFallbackMail = !web3formsApiKey && !formspreeEndpoint;

  const resetForm = () => {
    setName("");
    setEmailField("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !emailField.trim() || !message.trim()) {
      setStatus({ state: "error", message: "Please complete name, email and message." });
      return;
    }

    setStatus({ state: "sending" });

    if (endpoint) {
      try {
        const payload = {
          name,
          email: emailField,
          subject: subject || "Website inquiry",
          message,
        };

        if (isWeb3Forms) {
          payload.access_key = web3formsApiKey;
          payload.from_name = name;
          payload.reply_to = emailField;
        }

        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          setStatus({ state: "success", message: "Message sent — thank you!" });
          resetForm();
        } else {
          const text = await res.text();
          setStatus({ state: "error", message: `Send failed: ${res.status} ${text}` });
        }
      } catch (err) {
        setStatus({ state: "error", message: `Send failed: ${err.message}` });
      }
    } else if (useFallbackMail) {
      // fallback to mailto only if no endpoint is configured
      const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
        subject || "Website inquiry"
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${emailField}\n\n${message}`)}`;
      window.location.href = mailto;
      setStatus({ state: "success", message: "Opening mail client..." });
      resetForm();
    } else {
      setStatus({ state: "error", message: "Web3Forms API key is missing. Add VITE_WEB3FORMS_API_KEY to .env." });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-copy">
        <h2>Get In Touch</h2>
        <p>Have a project or role in mind? Let's build something useful together.</p>
        <a href={`mailto:${contact.email}`}>
          <FiMail /> {contact.email}
        </a>
        <a href={`tel:${contact.phone}`}>
          <FiPhone /> {contact.phone}
        </a>
        <span>
          <FiMapPin /> {contact.location}
        </span>
        <div className="contact-socials" aria-label="Social links">
          <a href="https://github.com/Rajkapoor51/" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rajkapoor98" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <FiMail />
          </a>
          <a href="https://wa.me/917392822658" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" />
          <input value={emailField} onChange={(e) => setEmailField(e.target.value)} type="email" placeholder="Your Email" />
        </div>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Subject" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" rows="5" />
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button type="submit" disabled={status && status.state === "sending"}>
            {status && status.state === "sending" ? "Sending..." : "Send Inquiry"} <FiSend />
          </button>
          {status && (
            <div role="status" aria-live="polite" style={{ color: status.state === "error" ? "#f97316" : "#7dd3fc" }}>
              {status.message}
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`portfolio-shell ${theme}-mode`}>
      <Sidebar contact={contact} />
      <main className="page-content">
        <Hero contact={contact} theme={theme} onToggleTheme={toggleTheme} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
