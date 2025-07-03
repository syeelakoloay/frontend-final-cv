import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Intro = () => {
  const [image, setImage] = useState("");
  const [major, setMajor] = useState("");
  const [hobby, setHobby] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [skill, setSkill] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [skill5, setSkill5] = useState("");
  const [skill6, setSkill6] = useState("");
  const [skill7, setSkill7] = useState("");

  useEffect(() => {
    const db = getDatabase();

    onValue(ref(db, "intro/aboutMe"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setImage(data.image);
        setMajor(data.major);
        setHobby(data.hobby);
        setFullName(data.fullName);
        setDateOfBirth(data.dateOfBirth);
        setCitizenship(data.citizenship);
        setSkill(data.skill);
        setSkill1(data.skill1);
        setSkill2(data.skill2);
        setSkill3(data.skill3);
        setSkill4(data.skill4);
        setSkill5(data.skill5);
        setSkill6(data.skill6);
        setSkill7(data.skill7);
      } else {
        console.log("No data available");
      }
    });
  }, []);

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
              <img src={`data:image/png;base64, ${image}`} alt="Syeela" />
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
              <p className="skill_title" style={{ color: "#fff" }}>
                Fullname: {fullName}
              </p>
              <p className="skill_title" style={{ color: "#fff" }}>
                Date of Birth: {dateOfBirth}
              </p>
              <p className="skill_title" style={{ color: "#fff" }}>
                Citizenship: {citizenship}
              </p>
              <p>{major}</p>
              <p>{hobby}</p>

              <div className="about_skills pt-15">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card skill_card mt-20">
                      <div className="card-body">
                        <p className="skill_title" style={{ color: "#fff" }}>
                          {skill}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card skill_card mt-20">
                      <div className="card-body">
                        <p className="skill_title" style={{ color: "#fff" }}>
                          {skill1}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card skill_card mt-20">
                      <div className="card-body">
                        <p className="skill_title" style={{ color: "#fff" }}>
                          {skill2}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card skill_card mt-20">
                      <div className="card-body">
                        <p className="skill_title" style={{ color: "#fff" }}>
                          {skill3}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card skill_card mt-20">
                      <div className="card-body">
                        <p className="skill_title" style={{ color: "#fff" }}>
                          {skill4}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card skill_card mt-20">
                      <div className="card-body">
                        <p className="skill_title" style={{ color: "#fff" }}>
                          {skill5}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card skill_card mt-20">
                      <div className="card-body">
                        <p className="skill_title" style={{ color: "#fff" }}>
                          {skill6}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card skill_card mt-20">
                      <div className="card-body">
                        <p className="skill_title" style={{ color: "#fff" }}>
                          {skill7}
                        </p>
                      </div>
                    </div>
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
