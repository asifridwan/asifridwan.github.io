import { useState } from "react";

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function ChangeIcon() {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <nav>
      <div className="logo fade"></div>
      <div className={isMenuClicked ? "nav-links" : "hidden"}>
        <span className="fade">About</span>
        <span className="fade">Projects</span>
        <span className="fade">Contact</span>
      </div>
      <div className="menu" onClick={ChangeIcon}>
        <i className={isMenuClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  )
}