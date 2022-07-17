export default function Home() {
  return (
    <section className="home-page">
      <div className="home-info-container">
        <div className="home-info">
          <div className="home-icon"></div>
          <div className="home-tagline">
            <div className="home-info-name">Hello ! I am Asif Ridwan</div>
            <div className="home-info-id">A Full Stack Software Engineer who specializes in the MERN Stack</div>
          </div>
        </div>
        <div className="button-containers">
          <button className="about-button fade">Read More</button>
          <button className="projects-button fade">View Projects</button>
        </div>
      </div>
    </section>
  )
}