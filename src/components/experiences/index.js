import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Experiences = () => {
  const [experience, setExperience] = useState("");
  const [experience1, setExperience1] = useState("");
  const [experience2, setExperience2] = useState("");
  const [role, setRole] = useState("");
  const [role1, setRole1] = useState("");
  const [role2, setRole2] = useState("");

  useEffect(() => {
    const db = getDatabase();

    onValue(ref(db, "experiences/affiliation/"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setExperience(data.experience);
        setExperience1(data.experience1);
        setExperience2(data.experience2);
        setRole(data.role);
        setRole1(data.role1);
        setRole2(data.role2);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <section id="experience" className="call_to_action_area">
      <div className="container">
        <div
          className="call_to_action_wrapper wow fadeIn"
          data-wow-duration="1.3s"
          data-wow-delay="0.5s"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="call_to_action_content">
                <div className="section_title text-center pb-30">
                  <h5 className="sub_title">Experiences</h5>
                  <h3 className="main_title">Affiliation</h3>
                  <ul className="line">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="single_service mt-30 wow fadeInUpBig"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.8s"
                    >
                      <div className="service_content">
                        <h4 className="service_title">
                          <a href="#">{experience}</a>
                        </h4>
                        <p>{role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="single_service mt-30 wow fadeInUpBig"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.8s"
                    >
                      <div className="service_content">
                        <h4 className="service_title">
                          <a href="#">{experience1}</a>
                        </h4>
                        <p>{role1}</p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="single_service mt-30 wow fadeInUpBig"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.8s"
                    >
                      <div className="service_content">
                        <h4 className="service_title">
                          <a href="#">{experience2}</a>
                        </h4>
                        <p>{role2}</p>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
