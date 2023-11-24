"use client";
import "@components/navbar/navbar.css";
import React from "react";
import Link from "next/link";
import Diary from "@app/diary/page.js";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar">
      <Link
        href="/"
        className={`navbar-text ${pathname === "/" ? "active" : "default"}`}
      >
        Home
      </Link>
      <p>|</p>
      <Link
        href="/diary"
        className={`navbar-text ${
          pathname === "/diary" ? "active" : "default"
        }`}
      >
        Fetch
      </Link>
    </div>
  );
};

export default Navbar;
