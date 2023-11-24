"use client";

import { useState } from "react";
import Image from "next/image";
import "@styles/home.css";

export default function Home() {
  const [nama, setNama] = useState("A. Fauzan Adhima");
  const [userInput, setUserInput] = useState("");
  // const input = document.querySelector("input");

  function handlerGantiNama() {
    setNama(userInput);
    // input.value = "";
  }

  function handlerInput(input) {
    setUserInput(input.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlerGantiNama();
    }
  };

  return (
    <div className="body">
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/assets/fa_circle.png"
              alt="Picture of the author"
              fill
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              {/* NIM dan BIO*/}
              <p>D121211030</p>
              <p>React Novice</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <input
            style={{
              marginTop: "12px",
            }}
            placeholder="Put name here"
            onKeyDown={handleKeyDown}
            onInput={handlerInput}
          ></input>
          {/* Tombol CTA */}
          <div
            className="cta-button"
            style={{
              marginTop: "12px",
              cursor: "pointer",
            }}
            onClick={handlerGantiNama}
          >
            <p>Change name</p>
          </div>
        </div>
      </div>
      {/* <script type="text/jsx">
        const textInput = document.querySelector("input");
      </script> */}
    </div>
  );
}
