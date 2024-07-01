import React from "react";
import Logo from "../Images/Header/Logo.svg";
import Twitter from "../Images/Footer/Twitter.svg";
import Facebook from "../Images/Footer/Facebook.svg";
import Instagram from "../Images/Footer/Instagram.svg";
import Linkedin from "../Images/Footer/Linkedin.svg";
import Mail from "../Images/Footer/Mail.svg";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black">
      <footer className="flex flex-col px-12 pt-16 pb-9 mt-14 w-full border-t border-solid border-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col self-start text-xs text-white">
            <img
              loading="lazy"
              src={Logo}
              alt="Kana Labs Logo"
              className="self-center aspect-[4.76] w-[190px]"
            />
            <div className="mt-6">© Copyright 2023 Kana Labs</div>
          </div>
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <nav className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-white max-md:mt-7">
                        <h4 className="text-sm uppercase">Company</h4>
                        <ul className="flex flex-col mt-3 text-base font-medium leading-7">
                          <li>
                            <a href="#" className="justify-center">
                              Who we are
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="justify-center mt-3 whitespace-nowrap"
                            >
                              FAQs
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="justify-center mt-3 whitespace-nowrap"
                            >
                              Blog
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <nav className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-white max-md:mt-7">
                        <h4 className="text-sm uppercase">Links</h4>
                        <ul className="flex flex-col mt-3 text-base font-medium leading-7">
                          <li>
                            <a
                              href="#"
                              className="justify-center whitespace-nowrap"
                            >
                              Documentation
                            </a>
                          </li>
                          <li>
                            <a href="#" className="justify-center mt-3">
                              SDK Docs
                            </a>
                          </li>
                          <li>
                            <a href="#" className="justify-center mt-3">
                              Launch App
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                  <div className="flex flex-col">
                    <h4 className="text-sm text-white uppercase">Follow Us</h4>
                    <div className="flex gap-5 justify-between mt-3">
                      <a href="#" aria-label="Twitter">
                        <img
                          loading="lazy"
                          src={Twitter}
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                        />
                      </a>
                      <a href="#" aria-label="Facebook">
                        <img
                          loading="lazy"
                          src={Facebook}
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                        />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <img
                          loading="lazy"
                          src={Instagram}
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                        />
                      </a>
                      <a href="#" aria-label="LinkedIn">
                        <img
                          loading="lazy"
                          src={Linkedin}
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                        />
                      </a>
                    </div>
                  </div>
                  <button className="justify-center p-2.5 mt-7 text-sm font-semibold text-white rounded border border-blue-400 border-solid max-md:px-5">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 self-end mt-36 mr-11 max-w-full text-xs text-slate-500 w-[620px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
          <div className="flex-auto">
            <a href="#" className="mr-2">
              Terms & Conditions
            </a>{" "}
            |
            <a href="#" className="mx-2">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="ml-2">
              Security
            </a>
          </div>
          <div className="flex gap-2.5 whitespace-nowrap">
            <img
              loading="lazy"
              src={Mail}
              alt=""
              className="shrink-0 w-4 aspect-square"
            />
            <a href="mailto:hello@kanalabs.io">hello@kanalabs.io</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
