import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site">
      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo">
            <span className="logo-mark">U</span>
            <span>
              UHT <strong>Hub</strong>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
  <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
  <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
</nav>

<button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
>
  {menuOpen ? "✕" : "☰"}
</button>

          <a href="#courses" className="nav-button">
            Join a Class
          </a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span></span>
                Technology & Innovation Hub
              </div>

              <h1>
                Learn.
                <br />
                <span>Build.</span>
                <br />
                Connect.
              </h1>

              <p className="hero-text">
                A community-driven technology hub helping people develop
                practical digital skills, build meaningful projects, and
                connect with opportunities.
              </p>

              <div className="hero-actions">
                <a href="#courses" className="primary-button">
                  Explore Courses
                  <span>→</span>
                </a>

                <a href="#coworking" className="secondary-button">
                  Explore the Hub
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>3+</strong>
                  <span>Core Programs</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Practical Learning</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Possibilities</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card main-card">
                <div className="card-top">
                  <span className="status-dot"></span>
                  UHT HUB
                  <span className="card-dots">•••</span>
                </div>

                <div className="screen-content">
                  <div className="code-line long"></div>
                  <div className="code-line medium"></div>
                  <div className="code-line short"></div>
                  <div className="code-line long"></div>
                  <div className="code-line medium"></div>

                  <div className="dashboard-box">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-one">
                <span>✦</span>
                Build Your Future
              </div>

              <div className="floating-card floating-two">
                <strong>01</strong>
                <span>Learn by doing</span>
              </div>
            </div>
          </div>
        </section>

        {/* About placeholder */}
        <section id="about" className="about-section">
  <div className="about-container">

    <div className="about-text">
      <span className="section-label">ABOUT UHT HUB</span>

      <h2>
        A place to <span>learn, build, and connect.</span>
      </h2>

      <p>
        UHT Hub is a technology and innovation space designed to help people
        gain practical digital skills, build meaningful projects, and connect
        with a community of ambitious people.
      </p>

      <p>
        Whether you're starting your tech journey, developing your career,
        working on a project, or looking for a productive workspace, UHT Hub
        gives you the environment, skills, and community to move forward.
      </p>

      <a href="#courses" className="about-button">
        Explore Our Academy →
      </a>
    </div>

    <div className="about-features">

      <div className="about-feature">
        <div className="feature-number">01</div>
        <div>
          <h3>Practical Learning</h3>
          <p>
            Learn skills through practical projects, real-world tasks,
            and hands-on training.
          </p>
        </div>
      </div>

      <div className="about-feature">
        <div className="feature-number">02</div>
        <div>
          <h3>Community</h3>
          <p>
            Connect with learners, creatives, professionals, and people
            building exciting things.
          </p>
        </div>
      </div>

      <div className="about-feature">
        <div className="feature-number">03</div>
        <div>
          <h3>Growth</h3>
          <p>
            Get the environment and support you need to develop your skills
            and turn ideas into opportunities.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

<section className="why-section">
  <div className="why-container">

    <div className="why-heading">
      <span className="section-label">WHY UHT HUB?</span>

      <h2>
        More than a classroom.
        <span> A place to grow.</span>
      </h2>

      <p>
        We combine practical learning, technology, community, and the right
        environment to help you move from learning to doing.
      </p>
    </div>

    <div className="why-grid">

      <div className="why-card">
        <div className="why-icon">01</div>
        <h3>Learn by Doing</h3>
        <p>
          Go beyond theory with practical projects and real-world exercises
          that help you build confidence.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">02</div>
        <h3>Build Your Career</h3>
        <p>
          Develop relevant digital skills that can help you create
          opportunities and grow professionally.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">03</div>
        <h3>Connect & Collaborate</h3>
        <p>
          Meet other ambitious people, exchange ideas, collaborate on
          projects, and grow together.
        </p>
      </div>

      <div className="why-card">
        <div className="why-icon">04</div>
        <h3>Built for Growth</h3>
        <p>
          Access a supportive environment designed to help you turn ideas
          into skills, projects, and opportunities.
        </p>
      </div>

    </div>

  </div>
</section>

        {/* Academy placeholder */}
       <section id="courses" className="academy-section">

  <div className="academy-container">

    <div className="academy-header">
      <div>
        <span className="section-label">UHT ACADEMY</span>

        <h2>
          Learn skills.
          <span> Build your future.</span>
        </h2>
      </div>

      <p>
        Practical, career-focused training designed to help you develop
        valuable digital skills and turn what you learn into real projects.
      </p>
    </div>


    <div className="course-grid">

      {/* WEB DEVELOPMENT */}

      <article className="course-card">

        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
            alt="Web development"
          />

          <span className="course-badge">POPULAR</span>
        </div>

        <div className="course-content">

          <span className="course-tag">WEB DEVELOPMENT</span>

          <h3>Web Development</h3>

          <p>
            Learn how to design and build modern websites and web
            applications from scratch.
          </p>

          <div className="course-details">
            <span>⏱ 12 Weeks</span>
            <span>💻 Beginner Friendly</span>
          </div>

          <div className="course-bottom">
            <div>
              <small>Programme Fee</small>
              <strong>₦100k – ₦150k</strong>
            </div>

            <a href="#contact">Apply →</a>
          </div>

        </div>
      </article>


      {/* DATA ANALYTICS */}

      <article className="course-card">

        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
            alt="Data analytics dashboard"
          />
        </div>

        <div className="course-content">

          <span className="course-tag">DATA ANALYTICS</span>

          <h3>Data Analytics</h3>

          <p>
            Learn how to turn raw data into meaningful insights using
            spreadsheets, SQL, Power BI and data storytelling.
          </p>

          <div className="course-details">
            <span>⏱ 12 Weeks</span>
            <span>📊 Practical Projects</span>
          </div>

          <div className="course-bottom">
            <div>
              <small>Programme Fee</small>
              <strong>₦100k – ₦150k</strong>
            </div>

            <a href="#contact">Apply →</a>
          </div>

        </div>
      </article>


      {/* UI UX */}

      <article className="course-card">

        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80"
            alt="UI UX design"
          />
        </div>

        <div className="course-content">

          <span className="course-tag">UI/UX DESIGN</span>

          <h3>UI/UX Design</h3>

          <p>
            Learn how to create intuitive digital experiences, wireframes,
            prototypes and beautiful user interfaces.
          </p>

          <div className="course-details">
            <span>⏱ 12 Weeks</span>
            <span>🎨 Portfolio Projects</span>
          </div>

          <div className="course-bottom">
            <div>
              <small>Programme Fee</small>
              <strong>₦100k – ₦150k</strong>
            </div>

            <a href="#contact">Apply →</a>
          </div>

        </div>
      </article>


      {/* DIGITAL MARKETING */}

      <article className="course-card">

        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
            alt="Digital marketing analytics"
          />
        </div>

        <div className="course-content">

          <span className="course-tag">DIGITAL MARKETING</span>

          <h3>Digital Marketing</h3>

          <p>
            Learn how to build digital campaigns, grow brands online,
            create content and understand marketing analytics.
          </p>

          <div className="course-details">
            <span>⏱ 12 Weeks</span>
            <span>📱 Real Campaigns</span>
          </div>

          <div className="course-bottom">
            <div>
              <small>Programme Fee</small>
              <strong>₦100k – ₦150k</strong>
            </div>

            <a href="#contact">Apply →</a>
          </div>

        </div>
      </article>

    </div>


    <div className="academy-footer">

      <div>
        <strong>Not sure which programme is right for you?</strong>
        <span>We'll help you find the right starting point.</span>
      </div>

      <a href="#contact">Talk to Us →</a>

    </div>

  </div>

</section>

<section className="experience-section">
  <div className="experience-container">

    <div className="experience-image">
      <img
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
        alt="People collaborating in a technology workspace"
      />

      <div className="experience-overlay">
        <strong>Learn. Build. Connect.</strong>
        <span>The UHT Hub experience</span>
      </div>
    </div>

    <div className="experience-content">

      <span className="section-label">THE UHT EXPERIENCE</span>

      <h2>
        Don't just learn tech.
        <span> Become part of the ecosystem.</span>
      </h2>

      <p>
        At UHT Hub, learning goes beyond the classroom. We are building a
        community where learners, professionals, creatives and entrepreneurs
        can meet, collaborate and create.
      </p>

      <div className="experience-points">

        <div className="experience-point">
          <span>01</span>
          <div>
            <h3>Practical Training</h3>
            <p>Learn through projects and real-world applications.</p>
          </div>
        </div>

        <div className="experience-point">
          <span>02</span>
          <div>
            <h3>Collaborative Community</h3>
            <p>Meet people who are learning, building and growing.</p>
          </div>
        </div>

        <div className="experience-point">
          <span>03</span>
          <div>
            <h3>Opportunities</h3>
            <p>Build skills and connections that can open new doors.</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="events-section">
  <div className="events-container">

    <div className="events-header">
      <div>
        <span className="section-label">EVENTS & WORKSHOPS</span>

        <h2>
          There's always something
          <span> happening at UHT.</span>
        </h2>
      </div>

      <p>
        From practical workshops to community meetups, we create spaces
        where people can learn, connect and build together.
      </p>
    </div>


    <div className="events-grid">

      {/* EVENT 1 */}

      <article className="event-card">

        <div className="event-image">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
            alt="Technology workshop"
          />

          <span>WORKSHOP</span>
        </div>

        <div className="event-content">
          <small>TECH & CAREER</small>

          <h3>Tech Skills Workshop</h3>

          <p>
            Practical sessions designed to help participants develop
            relevant digital and career skills.
          </p>

          <a href="#contact">Learn More →</a>
        </div>

      </article>


      {/* EVENT 2 */}

      <article className="event-card">

        <div className="event-image">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
            alt="Technology community event"
          />

          <span>COMMUNITY</span>
        </div>

        <div className="event-content">
          <small>COMMUNITY</small>

          <h3>Tech Community Meetups</h3>

          <p>
            Connect with developers, designers, analysts, entrepreneurs
            and other people building in tech.
          </p>

          <a href="#contact">Learn More →</a>
        </div>

      </article>


      {/* EVENT 3 */}

      <article className="event-card">

        <div className="event-image">
          <img
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=80"
            alt="Professional training event"
          />

          <span>BOOTCAMP</span>
        </div>

        <div className="event-content">
          <small>LEARNING</small>

          <h3>Bootcamps & Special Programs</h3>

          <p>
            Intensive learning experiences built around specific skills,
            projects and real-world challenges.
          </p>

          <a href="#contact">Learn More →</a>
        </div>

      </article>

    </div>

  </div>
</section>

<section className="community-section">
  <div className="community-container">

    <div className="community-header">
      <span className="section-label">THE COMMUNITY</span>

      <h2>
        Built for people who are
        <span> building something.</span>
      </h2>

      <p>
        UHT Hub brings together learners, professionals, creatives and
        entrepreneurs who are committed to learning, creating and growing.
      </p>
    </div>


    <div className="community-grid">

      <div className="community-stat">
        <strong>01</strong>
        <h3>Learn</h3>
        <p>
          Develop practical skills that you can apply to real projects
          and opportunities.
        </p>
      </div>

      <div className="community-stat">
        <strong>02</strong>
        <h3>Build</h3>
        <p>
          Turn your knowledge into projects, portfolios, products and
          meaningful ideas.
        </p>
      </div>

      <div className="community-stat">
        <strong>03</strong>
        <h3>Connect</h3>
        <p>
          Meet people with different skills, ideas and experiences and
          grow together.
        </p>
      </div>

    </div>


    <div className="testimonial-heading">
      <span className="section-label">WHAT PEOPLE SAY</span>
      <h3>Voices from the UHT community</h3>
    </div>


    <div className="testimonial-grid">

      <article className="testimonial-card">
        <div className="quote-mark">“</div>

        <p>
          UHT Hub is designed to be a place where people can gain practical
          skills, meet others and turn ideas into something real.
        </p>

        <div className="testimonial-person">
          <div className="person-avatar">U</div>

          <div>
            <strong>Ayo</strong>
            <span>UHT Student</span>
          </div>
        </div>
      </article>


      <article className="testimonial-card featured-testimonial">
        <div className="quote-mark">“</div>

        <p>
          A learning environment should be more than just a classroom.
          It should inspire people to build, collaborate and keep growing.
        </p>

        <div className="testimonial-person">
          <div className="person-avatar">U</div>

          <div>
            <strong>Salome</strong>
            <span>UHT Student</span>
          </div>
        </div>
      </article>


      <article className="testimonial-card">
        <div className="quote-mark">“</div>

        <p>
          The goal is simple: create access to practical technology
          education and a community that helps people move forward.
        </p>

        <div className="testimonial-person">
          <div className="person-avatar">U</div>

          <div>
            <strong>Hope</strong>
            <span>UHT Student</span>
          </div>
        </div>
      </article>

    </div>

  </div>
</section>

        {/* Coworking placeholder */}
        <section id="coworking" className="placeholder-section">
          <div className="container">
            <p className="section-label">COWORKING</p>
            <h2>A place to work, create and connect.</h2>
            <p>
              Flexible workspaces for freelancers, entrepreneurs, creatives
              and remote professionals.
            </p>
          </div>
        </section>

        {/* Contact placeholder */}
        <section id="contact" className="contact-section">
  <div className="contact-container">

    <div className="contact-content">
      <span className="section-label">GET IN TOUCH</span>

      <h2>
        Ready to start your
        <span> journey?</span>
      </h2>

      <p>
        Whether you want to learn a new skill, attend an event, collaborate
        with us, or simply find out more about UHT Hub, we'd love to hear
        from you.
      </p>

      <div className="contact-actions">

        <a
          href="https://wa.me/2349058458691?text=Hello%20UHT%20Hub%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programmes."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <span>💬</span>
          Chat with us on WhatsApp
        </a>

        <a
          href="mailto:uhtworld@gmail.com"
          className="email-button"
        >
          ✉ Email UHT Hub
        </a>

      </div>
    </div>


    <div className="contact-card">

      <div className="contact-card-item">
        <span>WHATSAPP</span>
        <a
          href="https://wa.me/2349058458691"
          target="_blank"
          rel="noopener noreferrer"
        >
          +234 905 845 8691
        </a>
      </div>

      <div className="contact-card-item">
        <span>EMAIL</span>
        <a href="mailto:uhtworld@gmail.com">
          uhtworld@gmail.com
        </a>
      </div>

      <div className="contact-card-item">
        <span>LOCATION</span>
        <strong>Ikorodu, Lagos</strong>
      </div>

    </div>

  </div>
</section>

      </main>

<footer className="site-footer">
  <div className="footer-container">
    <div className="footer-brand">
      <h2>UHT<span> Hub</span></h2>
      <p>
        Learn. Build. Connect.
      </p>
      <p className="footer-description">
        Empowering people with practical tech skills, meaningful
        connections, and opportunities to grow.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#about">About Us</a>
      <a href="#courses">Courses</a>
      <a href="#experience">The UHT Experience</a>
      <a href="#events">Events</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-links">
      <h3>Our Courses</h3>
      <a href="#courses">Web Development</a>
      <a href="#courses">Data Analytics</a>
      <a href="#courses">UI/UX Design</a>
      <a href="#courses">Digital Marketing</a>
    </div>

    <div className="footer-contact">
      <h3>Get in Touch</h3>
      <a href="mailto:uhtworld@gmail.com">uhtworld@gmail.com</a>
      <a href="https://wa.me/2349058458691" target="_blank" rel="noreferrer">
        +234 905 845 8691
      </a>
      <p>Ikorodu, Lagos, Nigeria</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} UHT Hub. All rights reserved.</p>
    <p>Built for learning, innovation, and growth.</p>
  </div>
</footer>

      <footer className="footer">
        <div className="container">
          <p>© 2026 UHT Hub. Learn. Build. Connect.</p>
        </div>
      </footer>
    </div>
  )
}

export default App