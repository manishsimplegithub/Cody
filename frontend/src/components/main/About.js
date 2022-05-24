import React from "react";
import nocode from "../../images/nocode.png";
import "../../images/about.css";

function About() {
  return (
    <>
      <div className="tab-main">
        {/* <div className="container emp-profilr">
          <form method=" "></form>
          <div className="row">
            <div className="col-md-4">
              <div className="tab-about">
              <img src={nocode} alt="manish1" width="500px"></img>
                <p>
                  No-code development removes programming as the barrier between
                  ideas and solutions. So we provide options to choose good
                  platform. It makes it possible to build applications &
                  websites without knowledge of coding, no-code platforms
                  leverage technology to empower the ability of humans to
                  innovate, rather than impede it.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head"></div>
            </div>
          </div>
        </div> */}

        <div className="tab-about">
          <img src={nocode} alt="manish1" width="500px"></img>
          <h3>
            No-code development removes programming as the barrier between ideas
            and solutions. So we provide options to choose good platform. It
            makes it possible to build applications & websites without knowledge
            of coding, no-code platforms leverage technology to empower the
            ability of humans to innovate, rather than impede it.
          </h3>
        </div>
      </div>
    </>
  );
}
export default About;
