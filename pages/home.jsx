import React from "react";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";

export default function home() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "60px 60px 2500px" }}>
        <h1 className="text-bg-dark rounded-5" style={{ textAlign: "center" }}>
          About Me
        </h1>
        <div className="text-center">
          <img
            src="images\My PIc.jpg"
            style={{ objectFit: "cover", height: "200px", width: "200px" }}
            className="ps-lg-2 ms-2 my-4 mx-lg-4 rounded-circle "
          />
        </div>
        <div className="d-flex">
          <p
            style={{
              fontSize: "18px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Hi! my name is Raiwin Inthasit. I'm currently studying computer
            engineering in Chiang Mai University. I'm quite fasinated in field
            of Machine Learning. I might still be a beginner in programming but
            I will not be inactive to learning it.
          </p>
        </div>
        <div className="justify-content-center">
          <Skill />
        </div>
      </div>
    </div>
  );
}
