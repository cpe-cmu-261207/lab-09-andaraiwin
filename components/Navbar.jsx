import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div style={{ maxWidth: "600px" }} className="mx-auto">
        <div className="d-flex justify-content-center gap-5 fs-4">
          <Link href="/home">
            <a>Home</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>

          <Link href="/experience">
            <a>Experience</a>
          </Link>

          <Link href="/todolist">
            <a>ToDo</a>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}
