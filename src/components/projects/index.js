import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Projects = () => {
  const [project, setProject] = useState("");
  const [project1, setProject1] = useState("");
  const [project2, setProject2] = useState("");
  const [project3, setProject3] = useState("");
  const [project4, setProject4] = useState("");
  const [project5, setProject5] = useState("");
  const [project6, setProject6] = useState("");
  const [project7, setProject7] = useState("");
  const [project8, setProject8] = useState("");
  const [project9, setProject9] = useState("");
  const [project10, setProject10] = useState("");
  const [project11, setProject11] = useState("");
  const [role, setRole] = useState("");
  const [role1, setRole1] = useState("");
  const [role2, setRole2] = useState("");
  const [role3, setRole3] = useState("");
  const [role4, setRole4] = useState("");
  const [role5, setRole5] = useState("");
  const [role6, setRole6] = useState("");
  const [role7, setRole7] = useState("");
  const [role8, setRole8] = useState("");
  const [role9, setRole9] = useState("");
  const [role10, setRole10] = useState("");
  const [role11, setRole11] = useState("");

  useEffect(() => {
    const db = getDatabase();

    onValue(ref(db, "projects/accomplishments"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setProject(data.project);
        setProject1(data.project1);
        setProject2(data.project2);
        setProject3(data.project3);
        setProject4(data.project4);
        setProject5(data.project5);
        setProject6(data.project6);
        setProject7(data.project7);
        setProject8(data.project8);
        setProject9(data.project9);
        setProject10(data.project10);
        setProject11(data.project11);
        setRole(data.role);
        setRole1(data.role1);
        setRole2(data.role2);
        setRole3(data.role3);
        setRole4(data.role4);
        setRole5(data.role5);
        setRole6(data.role6);
        setRole7(data.role7);
        setRole8(data.role8);
        setRole9(data.role9);
        setRole10(data.role10);
        setRole11(data.role11);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <section id="projects" className="services_area pt-115 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-30">
              <h5 className="sub_title">Projects</h5>
              <h3 className="main_title">Accomplishments</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.8s"
            >
              <div className="service_icon">
                <i className="lni lni-ux"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project}</h4>
                <p>{role}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="service_icon">
                <i className="lni lni-layout"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project1}</h4>
                <p>{role1}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.8s"
            >
              <div className="service_icon">
                <i className="lni lni-layout"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project2}</h4>
                <p>{role2}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <div className="service_icon">
                <i className="lni lni-bullhorn"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project3}</h4>
                <p>{role3}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="service_icon">
                <i className="lni lni-briefcase"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project4}</h4>
                <p>{role4}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <div className="service_icon">
                <i className="lni lni-code"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project5}</h4>
                <p>{role5}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.8s"
            >
              <div className="service_icon">
                <i className="lni lni-code"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project6}</h4>
                <p>{role6}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="service_icon">
                <i className="lni lni-bullhorn"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project7}</h4>
                <p>{role7}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="service_icon">
                <i className="lni lni-layout"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project8}</h4>
                <p>{role8}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="service_icon">
                <i className="lni lni-code"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project9}</h4>
                <p>{role9}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="service_icon">
                <i className="lni lni-code"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project10}</h4>
                <p>{role10}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="single_service mt-30 wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="service_icon">
                <i className="lni lni-layout"></i>
              </div>
              <div className="service_content">
                <h4 className="service_title">{project11}</h4>
                <p>{role11}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
