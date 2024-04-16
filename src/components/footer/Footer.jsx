import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <hr style={{ width: "100%" }} />
        <div className="contact-div">
          <div className="phn-number">
            <h4>Phone</h4>
            <p>9028262771</p>
          </div>
          <div className="email">
            {" "}
            <h4>Email</h4>
            <p>mukhtadar09@gmail.com</p>
          </div>
          <div className="socials">
            <h4>Socials</h4>
            <div className="social-icons"></div>
          </div>
          <div className="copyright">
            <p>© 2035 Mirza Mukhtadar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
