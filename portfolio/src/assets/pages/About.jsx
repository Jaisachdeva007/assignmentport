function About() {
    return (
      <div className="container about-container mt-5">
        <h2 className="section-title">About Me</h2>
        <p className="intro-text">
        A 3rd-year Computer Science student at <strong>Dalhousie University</strong> , passionate about Cybersecurity, Artificial Intelligence, and UI/UX. Beyond tech, I’m a sports enthusiast with a background in roller hockey, tennis, and competitive debating.
        </p>
  
        <hr className="section-divider" />
  
        <h3 className="section-subtitle">Education</h3>
        <ul className="education-list">
          <li><strong>BSc in Computer Science</strong>, Dalhousie University (2022 - 2026)</li>
        </ul>
  
        <hr className="section-divider" />
  
        <h3 className="section-subtitle">Work Experience</h3>
        <div className="experience-card">
          <h4> Research Assistant - Dalhousie University</h4>
          <p><em>2025 - Present</em></p>
          <ul>
            <li>Conducting research on <strong>AI-assisted learning and student engagement models</strong>.</li>
            <li>Developing models to <strong>analyze learning behaviors</strong> and optimize AI-driven tutoring.</li>
          </ul>
        </div>
  
        <div className="experience-card">
          <h4> Teaching Assistant - CSCI 1105</h4>
          <p><em>2025 - Present</em></p>
          <ul>
            <li>Leading labs for <strong>60+ students</strong>, assisting with <strong>Java programming concepts</strong>.</li>
            <li>Grading assignments and mentoring students in <strong>debugging and problem-solving</strong>.</li>
          </ul>
        </div>
  
        <div className="experience-card">
          <h4> ITS Client Services - Dalhousie University</h4>
          <p><em>2022 - Present</em></p>
          <ul>
            <li>Resolved over <strong>500+ IT tickets</strong>, helping students and faculty with technical issues.</li>
            <li>Managed computer deployments, including <strong>Azure Join configurations</strong>.</li>
          </ul>
        </div>
  
        <hr className="section-divider" />
  
        <h3 className="section-subtitle">Skills & Technologies</h3>
        <div className="skills-grid">
          <span> Java</span>
          <span> Python</span>
          <span>PHP</span>
          <span>JavaScript</span>
          <span> C</span>
          <span> React.js</span>
          <span> HTML & CSS</span>
          <span> SQL</span>
          <span> Git</span>
          <span> VS Code</span>
          <span> IntelliJ</span>
          <span> MySQL Workbench</span>
          <span> Unity</span>
        </div>
  
        <hr className="section-divider" />
  
        <h3 className="section-subtitle">Volunteer & Leadership</h3>
        <ul className="volunteer-list">
          <li>🔹 <strong>VP Internal</strong>, Enactus Dalhousie</li>
          <li>🔹 <strong>Founder & President</strong>, Enora Model United Nations</li>
          <li>🔹 <strong>Volunteer</strong>, ShiftKey Labs (Hackathons, Game Jams)</li>
        </ul>
      </div>
    );
  }
  
  export default About;
  