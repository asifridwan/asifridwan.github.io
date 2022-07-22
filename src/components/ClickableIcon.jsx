export default function ClickableIcon({link, icon, tooltip}) {
  return (
    <div className="icon">
      <a href={link}>
        <i className={icon}></i>
      </a>
      <p className="tooltip">{tooltip}</p>
    </div>
  )
}