const Hero = () => {
  return (
    <section id="hero" className="header_area">
      <div className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#hero">
                        Home<span></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#intro">
                        Intro<span></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#projects">
                        Projects<span></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#experience">
                        Experience<span></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div id="intro" className="header_hero">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="header_hero_content mt-45">
                <h5
                  className="header_sub_title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Hi, I'm Syeela!
                </h5>
                <h2
                  className="header_title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.5s"
                >
                  UI/UX Designer & Full-Stack Developer
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.1s"
                >
                  Have a project in mind? Let's collaborate!
                </p>
                <a
                  href="mailto: koloaysyeela@gmail.com"
                  rel="nofollow"
                  className="main-btn wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.4s"
                >
                  Contact Me
                </a>
                <div style={{ height: "48px" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_hero_shape d-none d-lg-block"></div>
      </div>
    </section>
  );
};

export default Hero;
