import React from "react";
import Logo from "../Images/Header/Logo.svg";
import LogoName from "../Images/Header/LogoName.svg";

export default function Header() {
  return (
    <div className="flex flex-col bg-black">
      <header className="flex gap-5 justify-center px-12 py-8 w-full backdrop-blur-[50px] bg-zinc-900 bg-opacity-10 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={Logo}
          alt="Logo"
          className="shrink-0 max-w-full aspect-[4.76] w-[171px]"
        />
        <img
          loading="lazy"
          src={LogoName}
          alt=""
          className="shrink-0 my-auto w-6 aspect-square"
        />
      </header>
    </div>
  );
}
