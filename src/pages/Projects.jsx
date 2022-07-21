import Project from "../components/Project";

export default function Projects() {
  return (
    <section className="page">
        <div className="info-container vertical">
          <div className="contact-tagline">
            <p className="home-info-name">Projects</p>
            <p className="home-info-id">Here's a list of some projects that I've done so far</p>
          </div>
          <div className="projects-wrapper">
            <Project name="ABC" desc="XYZ" keyword="123, abc, qwerty" github="qwe" main="rty" />
          </div>
        </div>
    </section>
  )
}