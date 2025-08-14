import React from "react";

export default function Home() {
  return (
    <div className="home">
      <section className="hero card">
        <div className="hero-text">
          <h1>
            I am <span className="accent">Siva Sankar Chandu</span>
          </h1>
          <h2>
            <span className="chip">ServiceNow Administrator</span> &{" "}
            <span className="chip">Microsoft 365 Admin</span>
          </h2>
          <p>
            Working as a freelancer with strong expertise in <b>ServiceNow platform administration</b> and{" "}
            <b>Microsoft 365 environment management</b>. I specialize in automating workflows, managing ITSM
            processes, and delivering secure, efficient collaboration solutions.
          </p>
          <p>
            With 3+ years of hands-on experience, I have improved incident resolution speeds, reduced ticket volumes,
            and implemented integrations that drive operational efficiency.
          </p>
        </div>

        <div className="hero-avatar">
          <img src="/profile.jpg" alt="Siva Sankar Chandu" />
        </div>
      </section>

      <section className="section card">
        <h3 className="section-title">Latest LinkedIn Posts</h3>
        <div className="grid-embeds">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7339597928451194881?collapsed=1"
            height="420"
            width="100%"
            frameBorder="0"
            allowFullScreen
            title="LinkedIn Post 1"
          ></iframe>

          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7317749776224014337?collapsed=1"
            height="420"
            width="100%"
            frameBorder="0"
            allowFullScreen
            title="LinkedIn Post 2"
          ></iframe>

          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7348367152703229956?collapsed=1"
            height="420"
            width="100%"
            frameBorder="0"
            allowFullScreen
            title="LinkedIn Post 3"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
