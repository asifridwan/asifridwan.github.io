export default function NonClickableIcon({icon, tooltip}) {
  return (
    <div className="icon">
        <i className={icon}></i>
        <p className="tooltip">{tooltip}</p>
    </div>
  )
}