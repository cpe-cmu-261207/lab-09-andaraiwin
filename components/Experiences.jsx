import React from "react";

export default function Experiences() {
  return (
    <div className="justify-content-center gap-5 fs-4">
      <div
        className="card mb-3 my-5 mx-2"
        style={{ maxWidth: "540px", fontSize: "18px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="images\voting.jpg"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Mini-project with blockchain
              </h5>
              <p className="card-text">
                I have been one of a contributor in mini-project for school.
                Using C++ language to implement the blockchain with voting.
                <a
                  href="https://github.com/p-m-a-w/boxblock.git"
                  target="_blank"
                >
                  BoxBlock Mini-project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card mb-3 my-5 mx-2"
        style={{ maxWidth: "540px", fontSize: "18px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="images\MacManMap.jpg"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">MacMan from scratch</h5>
              <p className="card-text">
                I have been a designer for MacMan game. It is a project for
                school. Using scratch to make a game.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1F4m4CCaZIOz_23agdA1Ty_yy3e5xszJo?usp=sharing"
                target="_blank"
              >
                MacMan project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
