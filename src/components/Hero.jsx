import { FiArrowUpRight, FiDownload, FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbNetwork } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const stats = [
  { icon: <HiOutlineBadgeCheck />, value: "3.5+", label: "Years Experience" },
  { icon: <IoCodeSlashOutline />, value: "10+", label: "Projects Delivered" },
  { icon: <TbNetwork />, value: "MERN", label: "Core Stack" },
  { icon: <AiOutlineHeart />, value: "Node.js", label: "Backend Focus" },
];

const highlights = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "CI/CD",
];

function Hero({ theme, onToggleTheme }) {
  const isLight = theme === "light";

  return (
    <section id="home" className="hero-section">
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
        aria-pressed={isLight}
        onClick={onToggleTheme}
      >
        <FiMoon />
        <strong />
        <FiSun />
      </button>

      <div className="hero-copy">
        <p className="eyebrow">Hello, I'm</p>
        <h1>Raj Kapoor Gautam</h1>
        <p className="role-line">
          <strong>MERN Stack Developer</strong>
          <span>React.js Developer</span>
          <strong>Node.js Engineer</strong>
        </p>
        <p className="hero-summary">
          I build responsive, API-driven applications with React.js, Node.js,
          Express.js, MongoDB, and modern deployment workflows. I also bring
          production experience with Laravel, PHP, and WordPress.
        </p>

        <div className="highlight-list">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a
            className="primary-action"
            href="/Raj_Kapoor_Gautam_MERN_Resume.pdf"
            download
          >
            Download CV <FiDownload />
          </a>
          <a className="secondary-action" href="#contact">
            Hire Me <FiArrowUpRight />
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Raj Kapoor Gautam portrait">
        <div className="photo-card">
          <img src="/raj-kapoor-gautam.jpeg" alt="Raj Kapoor Gautam" />
        </div>
        <div className="availability-card">
          <span>Available for</span>
          <strong>MERN Stack Roles</strong>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <article key={stat.label}>
            {stat.icon}
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Hero;
