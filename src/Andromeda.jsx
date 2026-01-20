function Andromeda() {
  return (
    <>
      <div>
        <div className="andromeda-banner">
          <h1>Andromeda.</h1>
        </div>

        <div className="andromeda-description-wrapper">
          <div className="andromeda-description">
            <p>
              Andromeda is a thoughtful productivity space designed to help you
              find clarity and act with intention. <br /> <br />
              We’ve removed the typical digital noise and distractions, offering
              you a quiet environment to plan and stay focused—free from
              cognitive overload.
            </p>
            <br />
            <p>
              With a modern, intuitive interface, Andromeda is built to be fast
              and deeply respectful of your time. It is our goal to support
              those who value structure and reliability above all else. <br />{" "}
              <br /> Rather than pushing you, Andromeda simply provides the
              steady tools you need to stay centered and accomplish what matters
              most to you.
            </p>
          </div>
        </div>

        <div className="andromeda-screenshot-wrapper">
          <div className="andromeda-screenshot-notes"></div>
          <div className="andromeda-screenshot-notes-open"></div>
        </div>

        <div className="wrapper">
          <div className="andromeda-page-heading">
            <h2>NOTES</h2>
            <p>
              To help you stay centered as you capture your thoughts, Andromeda
              offers a beautifully simple space to organize your notes. <br />{" "}
              <br />
              You can easily prioritize your ideas by pinning or unpinning them,
              ensuring your most important tasks always remain on track. <br />
              <br /> To make the experience truly yours, you can also customize
              your workspace with a variety of beautiful colors for a more
              personal, intentional feel.
            </p>

            <div className="note-features">
              <p>👉 Pin important notes</p>
              <p>👉 Give your notes colors</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Andromeda;
