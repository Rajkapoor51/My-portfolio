import {
  FiAward,
  FiBriefcase,
  FiCode,
  FiGrid,
  FiHome,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";

const navItems = [
  { label: "Home", href: "#home", icon: <FiHome /> },
  { label: "About", href: "#about", icon: <FiUser /> },
  { label: "Skills", href: "#skills", icon: <FiGrid /> },
  { label: "Experience", href: "#experience", icon: <FiBriefcase /> },
  { label: "Projects", href: "#projects", icon: <FiCode /> },
  { label: "Education", href: "#skills", icon: <PiGraduationCap /> },
  { label: "Achievements", href: "#experience", icon: <FiAward /> },
  { label: "Contact", href: "#contact", icon: <FiMail /> },
];

function Sidebar({ contact }) {
  return (
    <aside className="site-sidebar">
      <a className="brand" href="#home" aria-label="Raj Kapoor Gautam">
        <img src="/raj-kapoor-gautam.jpeg" alt="" />
        <span>
          <strong>Raj Kapoor</strong>
          <small>Full Stack Developer</small>
        </span>
      </a>

      <nav className="nav-menu" aria-label="Portfolio navigation">
        {navItems.map((item, index) => (
          <a className={index === 0 ? "active" : ""} href={item.href} key={item.label}>
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <a className="sidebar-mail" href={`mailto:${contact.email}`}>
          <FiMail />
          <span>{contact.email}</span>
        </a>
        <div className="sidebar-socials" aria-label="Social links">
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
    </aside>
  );
}

export default Sidebar;
