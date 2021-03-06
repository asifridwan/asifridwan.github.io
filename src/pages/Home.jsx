export default function Home({readMoreClick, viewProjectsClick}) {
  return (
    <section className="page">
      <div className="info-container vertical">
        <div className="home-info">
          <div className="home-icon"></div>
          <div className="home-tagline">
            <p className="home-info-name">Hello ! I am Asif Ridwanullah</p>
            <p className="home-info-id">A Full Stack Software Engineer who specializes in the MERN Stack</p>
          </div>
        </div>
        <div className="button-containers">
          <button className="about-button fade" onClick={readMoreClick}>Read More</button>
          <button className="projects-button fade" onClick={viewProjectsClick}>View Projects</button>
        </div>
      </div>
    </section>
  )
}