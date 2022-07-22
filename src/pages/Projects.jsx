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
            <Project name="Browse Restaurants" desc={`A full stack application that allows users to view list of all restaurants, filter restaurants by "Name" or "Date and Time", save favorite ones into their own named collections and rename their named collections or delete them as well as delete a particular restaurant from a collection`} keyword="React JS, Node.js, Express, PostgreSQL" github="https://github.com/asifridwan/browse-restaurants-fullstack" main="https://asifridwan.github.io/browse-restaurants/" />
            <Project name="React Blog App" desc="A full stack blog application where users can write blogs with title, date and body, post comments in any of the blog posts and reply to any particular comment including the replies itself" keyword="React JS, Redux, Node.js, Express, PostgreSQL" github="https://github.com/asifridwan/react-blog-app" main="https://asifridwan.github.io/react-blog-app-client/" />
            <Project name="Candy Crush Clone" desc="A clone of the popular mobile game that functions just like the original one and displays the current score of the user during an ongoing match" keyword="React JS" github="https://github.com/asifridwan/candy-crush-clone" main="https://asifridwan.github.io/candy-crush-clone/" />
            <Project name="Users CRUD API" desc="A simple but powerful Restful API for CRUD (Create, Read, Update, Delete) operations to manage user profiles" keyword="Node.js, Express" github="https://github.com/asifridwan/users-crud-api" />
            <Project name="React Weather App" desc="A simple weather app that displays the current temperature and weather condition of any location typed" keyword="React JS, OpenWeatherAPI" github="https://github.com/asifridwan/react-weather-app" main="https://asifridwan.github.io/react-weather-app/" />
            <Project name="Budget Tracker App" desc="A simple budget tracker app that helps you plan your budget by keeping track of your income and expenses" keyword="React JS" github="https://github.com/asifridwan/ar-budget-tracker" main="https://asifridwan.github.io/ar-budget-tracker/" />
          </div>
        </div>
    </section>
  )
}