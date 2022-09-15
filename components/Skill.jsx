import React from "react";

export default function Skill() {
  return (
    <div>
      <h2
        className="ms-5 p-2 fw-bold "
        style={{ textAlign: "left", fontSize: "30px" }}
      >
        <u>My Skill</u>
      </h2>

      <div className="card mb-3 my-5 mx-2" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="images\programming.png"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">Programming</h5>
              <p className="card-text">
                I have recently been in this programming field for 3 years now.
                I have learned many programming languages such as C++, Py, Html,
                CSS, and Java.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 my-5 mx-2" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="images\Language.jpg"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">Languages</h5>
              <p className="card-text">
                I'm interested in other languages. I can write in 4 languages.
                Those are English, Korea, Japanese and Thai. I also get TOFEL
                PBT up to 450+ pts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 my-5 mx-2" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="images\Music Instrument.jpg"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">Music Instruments</h5>
              <p className="card-text">
                I can play some songs with guitar and ukulele. I also have tried
                to play a song with piano and violin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
