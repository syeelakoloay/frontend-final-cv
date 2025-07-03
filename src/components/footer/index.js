import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gitHub, setGitHub] = useState("");

  useEffect(() => {
    const db = getDatabase();

    onValue(ref(db, "footer/"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setEmail(data.email);
        setPhone(data.phone);
        setGitHub(data.gitHub);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <section id="footer" className="footer_area gray-bg pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_content text-center">
              <ul className="footer_menu">
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                  <a href={`tel:${phone}`}>{phone}</a>
                </li>
                <li>
                  <a href={`https://github.com/${gitHub}`}>{gitHub}</a>
                </li>
              </ul>
              <p className="credit pt-45">Copyright &copy; 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
