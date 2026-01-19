import { useEffect, useState, useRef } from "react";

function Sidebar({
  isSidebarOpen,
  shouldRenderSidebar,
  onClose,
  hamburgerRef,
}) {
  const sidebarRef = useRef(null);

  const [menuVisibility, setMenuVisibility] = useState(null);

  //****************************************************************************/
  //****************************************************************************/

  // Handle animation when closing via state change (hamburger button)
  useEffect(() => {
    if (sidebarRef.current) {
      if (isSidebarOpen && shouldRenderSidebar) {
        // Opening
        setTimeout(() => {
          if (sidebarRef.current) {
            sidebarRef.current.classList.add("sidebar-open");
            sidebarRef.current.classList.remove("sidebar-close");
          }
        }, 10);
      } else if (!isSidebarOpen && shouldRenderSidebar) {
        // Closing via state change (hamburger button)
        if (sidebarRef.current) {
          sidebarRef.current.classList.remove("sidebar-open");
          sidebarRef.current.classList.add("sidebar-close");
        }
      }
    }
  }, [isSidebarOpen, shouldRenderSidebar]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isSidebarOpen) return;

      const sidebarEl = sidebarRef.current;
      const hamburgerEl = hamburgerRef.current;

      if (
        sidebarEl &&
        !sidebarEl.contains(event.target) &&
        hamburgerEl &&
        !hamburgerEl.contains(event.target)
      ) {
        // Trigger close animation
        sidebarEl.classList.remove("sidebar-open");
        sidebarEl.classList.add("sidebar-close");

        // Notify parent to close
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, onClose, hamburgerRef]);

  function toggleMenu(menuName) {
    setMenuVisibility((prev) => (prev === menuName ? null : menuName));
  }

  //****************************************************************************/
  //****************************************************************************/

  return (
    <>
      <div ref={sidebarRef} className="sidebar">
        <div className="brand-name-sidebar">
          <h3>
            <i className="fa-solid fa-flask"></i> Aphelion Labs.
          </h3>
        </div>

        <div className="sidebar-items">
          <div className="menu-item">
            <p style={{ color: "midnightblue" }}>✨️ The UI Lab 🧪</p>
            <button className="toggle-button" onClick={() => toggleMenu("ui")}>
              {menuVisibility === "ui" ? (
                <i class="fa-solid fa-angle-up"></i>
              ) : (
                <i class="fa-solid fa-angle-down"></i>
              )}
            </button>
          </div>

          <div className="dropdown" style={{ color: "midnightblue" }}>
            <div className={`items ${menuVisibility === "ui" ? "open" : ""}`}>
              <p>Andromeda</p>
              <p>Proxima Calculator</p>
            </div>
          </div>

          <div className="menu-item">
            <p style={{ color: "midnightblue" }}>✨️ Contact 📧</p>
            <button
              className="toggle-button"
              onClick={() => toggleMenu("contact")}
            >
              {menuVisibility === "contact" ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </button>
          </div>

          <div className="dropdown" style={{ color: "midnightblue" }}>
            <div
              className={`items ${menuVisibility === "contact" ? "open" : ""}`}
            >
              <p>Email</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
