import { profile, skills, projects, education } from "./data";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            {profile.initials}
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="avatar">{profile.initials}</div>
          <p className="eyebrow">Hi, I&rsquo;m</p>
          <h1>{profile.name}</h1>
          <h2>
            {profile.role} at {profile.university}
          </h2>
          <p className="tagline">{profile.tagline}</p>
          <div className="actions">
            <a href="#projects" className="btn primary">
              View my work
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
          <p className="loc">📍 {profile.location}</p>
        </section>

        <section id="about" className="wrap section">
          <h3 className="title">About me</h3>
          {profile.about.map((p) => (
            <p key={p} className="text">
              {p}
            </p>
          ))}
          <div className="edu">
            {education.map((e) => (
              <div key={e.degree} className="card">
                <strong>{e.degree}</strong>
                <span>{e.school}</span>
                <small>{e.note}</small>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="wrap section">
          <h3 className="title">Skills</h3>
          <div className="grid">
            {skills.map((s) => (
              <div key={s.group} className="card">
                <strong>{s.group}</strong>
                <div className="tags">
                  {s.items.map((i) => (
                    <span key={i} className="tag">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="wrap section">
          <h3 className="title">Projects</h3>
          <div className="grid">
            {projects.map((p) => (
              <a key={p.title} href={p.link} className="card project">
                <strong>{p.title}</strong>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <h3 className="title">Let&rsquo;s connect</h3>
          <p className="text">
            I&rsquo;m open to internships, collaborations and data projects.
          </p>
          <div className="actions center">
            <a href={`mailto:${profile.email}`} className="btn primary">
              Email me
            </a>
            <a href={profile.github} className="btn" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} className="btn" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {profile.year} {profile.name}. Built with Next.js &amp; TypeScript.
      </footer>
    </>
  );
}