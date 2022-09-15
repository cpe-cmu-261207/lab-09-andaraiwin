import React from "react";
import Experiences from "../components/Experiences";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <div>
      <Navbar />
      <h1 className="text-bg-dark rounded-5" style={{ textAlign: "center" }}>
        About my Experience
      </h1>

      <h2
        className="ms-5 p-4 fw-bold"
        style={{ textAlign: "center", fontSize: "30px" }}
      >
        <u>My Experience</u>
      </h2>

      <Experiences />
    </div>
  );
}
