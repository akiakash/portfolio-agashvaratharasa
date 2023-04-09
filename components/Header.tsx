/* eslint-disable @next/next/no-img-element */
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
        <img
          src="https://imagesportfolio.s3.ap-northeast-1.amazonaws.com/portfolio1.PNG?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiA4WC2H4x45937bVgOnYltuRmO97OegpYelOIm7AyXaSQIhALjV4GlOpCwDS6gOG%2F%2Frqr8IZcv3AS1qAc74%2BiIyYKUYKuQCCHAQABoMMDI4NTcxMjAxNjc4IgzMAJbzbVVHXVLpzE0qwQLvkvrkwt0%2F48gf7s%2FTUH5h8sngGozOCZ1iaNDgGHB9%2F9K4mkMzlyC1bq3Dgv3ZRL%2BOZS9bSshcdtPVO8Uxr9XU1BMAJ9Svp%2FdfqTD63UfZHMNGx3C5vJmpKdbWMWdSwtSNVklrh5velPKJH0utxsOJj54of%2Fi30FO4rV02B%2FIuLwbPNl0DX2D6ARFwjdnouoag19BewbrUoWVWyYqH5o%2B8D%2FY7egatAVuQ3R3G63eSVGeECsvfMbQOkxGjVDNfZo%2B4ovJC9DnOM7qhw4CVNKzKrdulrL4E7YwkqRfp49tOuebEG15ttaIMORI8%2FBUjDjrW32NdTqQjlX4WRf8V5Pgw0eX2eI1YxCQU5NaNL542bS44izeV%2FrZ2L7OESw9gh7knUIZQ%2B2R6LmXmYP4l7MLDhZUfENtOu1E6ZuYpqAa8Z0Ew2YrJoQY6swLrHSlRQM6jrOlm7Gkt7KTKkzfTS4bVMrIiBAw4SeW7dIyzPnksGVUJMNsKrNCVNlUREfkzy5VSfH9p34PxQ2zwiCv1uZBflv7txzCDZdbjlTI5I8DmXEp0MMTKY5nrjyWT%2FnqjHUheG5VTufklo5%2BKAjosAGR1TQGMGHrOfIzIJ5UbxaM1IVcWxZkaJRpmyk6Q9nr0X1AKIw0bBpHkrgfhlu%2FaiDJFN5%2FDI%2FgnpUUwkQ7uxOX1rGJFnpDU49hJULybijddmTcHNe%2Fi3QQHQrEIrBDWq50gkY6xuxe7StjyD0KwvojIa7HaQqdhWKBXRHnZ1%2BgJlo%2FuSZCJ5%2BmoahxiPMK1PZPhh3x3D8Ks65hzmFutEQceno9fxvUB4dGCFPkGLAFCgmwgVZj0SyzmROW0WdEH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230409T071648Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQNJXZ6CHFCHULGGI%2F20230409%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=7a2e8c31819d9e3f11b2486b89b5a7b920c0df214817b59750405f8d22817104"
          width={513}
          height={513}
          alt="Agash"
        />
      </div>
    </header>
  );
}
