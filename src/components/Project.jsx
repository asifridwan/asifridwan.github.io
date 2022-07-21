export default function Project({name, desc, keyword, github, main}) {
  return (
    <div className="project-box">
        <p className="project-name">{name}</p>
        <p className="project-description">{desc}</p>
        <p className="project-keywords">{keyword}</p>
        <div className="project-links">
            <a className="github-link" href={github}><i className="fab fa-github-alt"></i> View GitHub Repo</a>
            {main && <a className="main-link" href={main}><i className="fas fa-code-branch"></i> View Project</a>}
        </div>
    </div>
  )
}