import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({
  isSidebarOpen,
  shouldRenderSidebar,
  onClose,
  hamburgerRef,
  currentTheme,
}) {
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

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

      // Find the theme-switcher button in the document
      const themeSwitcherEl = document.querySelector(".theme-switcher");

      if (
        sidebarEl &&
        !sidebarEl.contains(event.target) &&
        hamburgerEl &&
        !hamburgerEl.contains(event.target) &&
        themeSwitcherEl &&
        !themeSwitcherEl.contains(event.target)
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
            <i className="fa-solid fa-flask"></i> iINTUIT Labs.
          </h3>
        </div>

        <div className="divider-line"></div>

        <div className="sidebar-items">
          <div className="menu-item">
            <p onClick={() => toggleMenu("ui")} style={{ cursor: "pointer" }}>
              🧪 The UI Lab
            </p>
            <button className="toggle-button" onClick={() => toggleMenu("ui")}>
              <i
                className={`fa-solid fa-angle-down arrow ${
                  menuVisibility === "ui" ? "rotate" : ""
                }`}
              />
            </button>
          </div>

          <div className="dropdown">
            <div className={`items ${menuVisibility === "ui" ? "open" : ""}`}>
              {" "}
              <div className="menu-items">
                <img
                  src="./space-nobg.png"
                  style={{ height: "35px", width: "35px" }}
                />

                <p
                  onClick={() => {
                    navigate("/andromeda");
                    onClose(); // Close sidebar after navigation
                  }}
                  style={{ cursor: "pointer" }}
                  className="andromeda-menu-text"
                >
                  Space.
                </p>
              </div>{" "}
              <div className="menu-items">
                <img
                  src="./proxima-nobg.png"
                  style={{ height: "35px", width: "35px" }}
                />

                <p
                  onClick={() => {
                    navigate("/ProximaCalculator");
                    onClose(); // Close sidebar after navigation
                  }}
                  style={{ cursor: "pointer" }}
                  className="calculator-menu-text"
                >
                  Proxima Calculator
                </p>
              </div>
              <div className="menu-items">
                <img
                  src="./sp-nobg.png"
                  style={{ height: "35px", width: "35px" }}
                />

                <p
                  onClick={() => {
                    navigate("/ScratchPad");
                    onClose(); // Close sidebar after navigation
                  }}
                  style={{ cursor: "pointer" }}
                  className="calculator-menu-text"
                >
                  ScratchPad Native
                </p>
              </div>
            </div>
          </div>

          <div className="menu-item">
            <p
              style={{ cursor: "pointer" }}
              onClick={() => toggleMenu("contact")}
            >
              📧 &nbsp; Contact
            </p>
            <button
              className="toggle-button"
              onClick={() => toggleMenu("contact")}
            >
              <i
                className={`fa-solid fa-angle-down arrow ${
                  menuVisibility === "contact" ? "rotate" : ""
                }`}
              />
            </button>
          </div>

          <div className="dropdown">
            <div
              className={`items ${menuVisibility === "contact" ? "open" : ""}`}
            >
              <div className="menu-items">
                <p
                  onClick={() => {
                    navigate("/ContactForm");
                    onClose(); // Close sidebar after navigation
                  }}
                >
                  👋 Get in touch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
