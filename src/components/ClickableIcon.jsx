export default function ClickableIcon({link, icon, tooltip}) {
  return (
    <div className="icon">
      {!link && <i className={icon}></i>}
      {link && <a href={link}>
        <i className={icon}></i>
      </a>}
      <p className="tooltip">{tooltip}</p>
    </div>
  )
}