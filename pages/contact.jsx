import { IconBrandFacebook } from "@tabler/icons";
import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <h1 className="text-bg-dark rounded-5" style={{ textAlign: "center" }}>
        Contact Me
      </h1>
      <div className="d-flex ">
        <div style={{ padding: "60px 60px 2500px", fontSize: "30px" }}>
          <img
            src="images/My PIc.jpg"
            style={{ objectFit: "cover", width: "200px", height: "200px" }}
            className="ps-lg-2 ms-2 my-4 mx-lg-4 rounded-circle"
          />
        </div>

        <div style={{ fontSize: "18px" }}>
          <span className="fw-bold">Name: </span>
          <span>Raiwin Inthasit</span>
          <p></p>
          <span className="fw-bold">Nickname: </span>
          <span>Anda</span>
          <p></p>
          <span className="fw-bold">Address: </span>
          <span>Tarntip Garden Place 2, Suthep, Mueng, Chiang Mai, 50200</span>
          <p></p>
          <p>
            <IconBrandFacebook />:
            <a
              href="https://www.facebook.com/profile.php?id=100010926915759"
              target="_blank"
              rel="noreferrer"
            >
              Anda Raiwin
            </a>
          </p>
          <p>
            <span>📧: </span>
            <a
              href="mailto:raiwin_inthasit@cmu.ac.th"
              target="_blank"
              rel="noreferrer"
            >
              raiwin_inthasit@cmu.ac.th
            </a>
          </p>
          <p>Call me at 📞: 098-963-7797</p>
        </div>
      </div>
    </div>
  );
}
