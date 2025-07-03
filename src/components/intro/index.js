import syeela from "../../assets/img/syeela.png";

const Intro = () => {
  return (
    <section id="intro" className="about_area pt-70 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div
              className="about_image mt-50 wow fadeInRightBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <img src={syeela} alt="Syeela" />
              <div className="about_shape"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about_content mt-45 wow fadeInLeftBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <div className="section_title">
                <h5 className="sub_title">Intro</h5>
                <h3 className="main_title">About Me</h3>
                <ul className="line">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <p>
                I’m an Information System student at Universitas Klabat
                (UNKLAB), working toward my S.Kom degree by 2026. Fun fact,
                Computer Science wasn’t actually my first choice, but I’ve grown
                to enjoy it!
              </p>
              <p>
                What do I like? I found joy in everything, even the little
                things. I like my late-afternoon stroll, a good book, or a movie
                marathon. But honestly, nothing beats just being comfortable at
                home.
              </p>
              <p className="skill_title" style={{ color: "#fff" }}>
                Fullname: Syeela Michelle Putri Koloay
              </p>
              <p className="skill_title" style={{ color: "#fff" }}>
                Date of Birth: June 8, 2004
              </p>
              <p className="skill_title" style={{ color: "#fff" }}>
                Citizenship: Indonesia
              </p>
              <div className="about_skills pt-15">
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <p className="skill_title" style={{ color: "#fff" }}>
                      Problem-solving
                    </p>
                    <div className="skill_percentage">
                      <p>
                        <span className="counter">90</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div
                        className="bar progress_line"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <p className="skill_title" style={{ color: "#fff" }}>
                      Adaptability
                    </p>
                    <div className="skill_percentage">
                      <p>
                        <span className="counter">92</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div
                        className="bar progress_line"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <p className="skill_title" style={{ color: "#fff" }}>
                      Attention to detail
                    </p>
                    <div className="skill_percentage">
                      <p>
                        <span className="counter">94</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div
                        className="bar progress_line"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <p className="skill_title" style={{ color: "#fff" }}>
                      Communication
                    </p>
                    <div className="skill_percentage">
                      <p>
                        <span className="counter">92</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div
                        className="bar progress_line"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill_item mt-20">
                <div className="skill_header">
                  <p className="skill_title" style={{ color: "#fff" }}>
                    Python, JavaScript, HTML
                  </p>
                  <div className="skill_percentage">
                    <p>
                      <span className="counter">88</span>%
                    </p>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="bar_inner">
                    <div
                      className="bar progress_line"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="skill_item mt-20">
                <div className="skill_header">
                  <p className="skill_title" style={{ color: "#fff" }}>
                    Git, GitHub
                  </p>
                  <div className="skill_percentage">
                    <p>
                      <span className="counter">90</span>%
                    </p>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="bar_inner">
                    <div
                      className="bar progress_line"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="skill_item mt-20">
                <div className="skill_header">
                  <p className="skill_title" style={{ color: "#fff" }}>
                    Whimsical, Figma, Canva
                  </p>
                  <div className="skill_percentage">
                    <p>
                      <span className="counter">94</span>%
                    </p>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="bar_inner">
                    <div
                      className="bar progress_line"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="skill_item mt-20">
                <div className="skill_header">
                  <p className="skill_title" style={{ color: "#fff" }}>
                    Word, Excel, PowerPoint
                  </p>
                  <div className="skill_percentage">
                    <p>
                      <span className="counter">96</span>%
                    </p>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="bar_inner">
                    <div
                      className="bar progress_line"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
