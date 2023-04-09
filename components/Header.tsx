/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <button>Full Stack Developer</button>

          <h1 className="white">Don't comment bad code,</h1>
          <h1 className="white">rewrite it. </h1>
          <p className="gray">
            Don't look for errors in my code. You just can't find it - Yogi
            Aristotle
          </p>
          <a className="green" href="mailto:akiagash12@gmail.com">
            Let&#39;s chat!
          </a>
        </div>
        <Image
          src="/images/portfolio1.png"
          width={513}
          height={513}
          alt="Agash"
        />
      </div>
    </header>
  );
}
