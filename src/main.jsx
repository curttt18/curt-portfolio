import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01", title: "Student Enrollment Management System",
    category: "Web Application", featured: true,
    description: "A multi-role enrollment system for managing student records, enrollments, academic grades, fees, and payments, with dedicated workflows for administrators, registrars, cashiers, and students.",
    stack: ["Laravel 12", "PHP", "MySQL", "Blade", "Tailwind CSS"],
    repo: "https://github.com/curttt18/Laravel_Finals",
    visual: "enrollment"
  },
  {
    number: "02", title: "CarRentalWeb", category: "Full Stack Web", featured: true,
    description: "A car rental web application with user and administrator workflows, backed by a relational database and an ASP.NET Core API.",
    stack: ["Angular", "ASP.NET Core", "MySQL"],
    repo: "https://github.com/curttt18/CarRentalWeb",
    visual: "cars"
  },
  {
    number: "03", title: "RecipeBudget", category: "Mobile Application",
    description: "A budget-focused recipe finder that lets users browse meals, filter recipes based on a budget, save recipes, and plan meals.",
    stack: ["Flutter", "Dart", "Firebase"],
    repo: "https://github.com/curttt18/RecipeBudget",
    visual: "budget"
  },
  {
    number: "04", title: "REcipe", category: "Mobile Application",
    description: "A mobile recipe discovery project exploring recipe search, browsing, and connected data services.",
    stack: ["React Native", "Expo", "Supabase"],
    repo: "https://github.com/g-russo/REcipe",
    visual: "recipe"
  },
  {
    number: "05", title: "Enhanced Download Page", category: "Frontend / UI",
    description: "A frontend project focused on implementing and improving a download page interface.",
    stack: ["Frontend", "UI Implementation"],
    repo: "https://github.com/curttt18/Enhancedownloadpage",
    visual: "download"
  }
];

const skills = {
  "Languages": ["JavaScript", "PHP", "C#", "Dart", "HTML", "CSS"],
  "Frameworks & Libraries": ["React", "Angular", "Laravel", "Flutter", "ASP.NET Core"],
  "Tools & Platforms": ["Git", "GitHub", "Firebase", "Supabase", "MySQL", "VS Code"]
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-visual ${project.visual}`}>
        <div className="visual-window">
          <div className="window-top"><i/><i/><i/></div>
          <div className="visual-content">
            <div className="visual-line wide"/>
            <div className="visual-line"/>
            <div className="visual-grid"><span/><span/><span/></div>
          </div>
        </div>
        <span className="visual-label">{project.category}</span>
      </div>
      <div className="project-info">
        <div className="project-heading">
          <span className="project-number">{project.number}</span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
        <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View repository <Arrow/></a>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand">CURT<span>.DEV</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"} onClick={() => setMenuOpen(false)}>
            <a href="#projects">Projects</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="https://github.com/curttt18" target="_blank" rel="noreferrer">GitHub <Arrow/></a>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div>
            <h1>Building practical<br/><span>digital solutions.</span></h1>
            <p className="hero-text">Hi, I am Curt — an IT student and aspiring software developer interested in building useful web and mobile applications.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <span>↓</span></a>
              <a href="https://github.com/curttt18" className="button button-outline" target="_blank" rel="noreferrer">GitHub <Arrow/></a>
            </div>
            <div className="hero-meta"><span>Based in the Philippines</span><span>Web · Mobile · Software</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative coding graphic">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="code-card">
              <div className="code-top"><span/><span/><span/><label>developer.js</label></div>
              <div className="code-lines">
                <p><b>01</b> <span className="purple">const</span> developer = {'{'}</p>
                <p><b>02</b> &nbsp; name: <span className="green">"Curt"</span>,</p>
                <p><b>03</b> &nbsp; focus: <span className="green">"Software"</span>,</p>
                <p><b>04</b> &nbsp; learning: <span className="green">"Every day"</span></p>
                <p><b>05</b> {'}'}</p>
                <p><b>06</b> <span className="purple">console</span>.log(developer);</p>
              </div>
              <div className="code-foot"><span className="status-dot"/> Ready to build</div>
            </div>
            <div className="art-chip chip-a">{"{ }"}</div><div className="art-chip chip-b">⌘</div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow">SELECTED WORK</div><h2>Projects I have built.</h2></div>
              <p>A collection of applications and projects where I explored development, problem solving, and working with different technologies.</p>
            </div>
            <div className="projects-grid">{projects.map(p => <ProjectCard key={p.number} project={p}/>)}</div>
          </div>
        </section>

        <section id="about" className="about-section container">
          <div className="section-head"><div><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Curious by nature.<br/>Developer in progress.</h2></div></div>
          <div className="about-grid">
            <div className="about-mark"><span>CR</span><div>STUDENT<br/>DEVELOPER</div></div>
            <div className="about-copy">
              <p>I am an Information Technology student working toward a career in software development. I enjoy exploring how applications are built, solving technical problems, and learning through hands-on projects.</p>
              <p>My experience spans web and mobile development, database integration, application testing, and documentation. I value teamwork, continuous learning, and creating applications that are straightforward to use.</p>
              <a className="text-link" href="https://github.com/curttt18" target="_blank" rel="noreferrer">More on GitHub <Arrow/></a>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-head"><div><div className="eyebrow">TOOLS OF THE TRADE</div><h2>Tech stack.</h2></div><p>Technologies I have worked with through coursework, personal projects, and collaborative development.</p></div>
            <div className="skills-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="tags skill-tags">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section container">
          <div className="contact-card">
            <div className="eyebrow">GET IN TOUCH</div>
            <h2>Let us build<br/><span>something good.</span></h2>
            <p>I am open to entry-level opportunities, internships, and projects where I can learn, contribute, and grow as a developer.</p>
            <div className="contact-actions">
              <a href="mailto:YOUR_EMAIL_HERE" className="button button-primary">Email me <Arrow/></a>
              <a href="https://github.com/curttt18" className="button button-outline" target="_blank" rel="noreferrer">GitHub <Arrow/></a>
              <a href="https://www.linkedin.com/" className="button button-outline" target="_blank" rel="noreferrer">LinkedIn <Arrow/></a>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container footer-inner"><a className="brand" href="#home">CURT<span>.DEV</span></a><p>Designed and built by Curt Reyes.</p><a href="#home">Back to top ↑</a></div></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
