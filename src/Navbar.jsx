import { Link } from "react-router-dom";

function Navbar({ isSidebarOpen, toggleSidebar, hamburgerRef }) {
  return (
    <div className="navbar">
      <button
        ref={hamburgerRef}
        className={`hamburger ${isSidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="brand-name">
          <h3>
            <i className="fa-solid fa-flask"></i> iNTUIT Labs.
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
