import React from "react";
import curvedline from "../assets/bg2.png";
import curvedline2 from "../assets/bg10.png";
import logo from "../assets/kickstart.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#040d18] text-white">
      {/* CurverLineMobile*/}
      <div className="sm:hiddenbg-[#040d18] rotate-180">
        <Image src={curvedline} className="w-full h-20" />
      </div>
      {/* CurverLineWeb */}
      <div className="hidden sm:flexbg-[#040d18] rotate-180">
        <Image src={curvedline2} className="w-full h-20" />
      </div>
      <div className="bg-[#040d18] text-center pb-10 md:flex sm:pr-12 flex justify-center md:max-w-[85vw] mx-auto">
        <div className="w-full">
        <Image src={logo} alt="" className="w-[8rem] " />
          <p className="text-center sm:text-start px-12 sm:pr-6 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            fugit mollitia? Et quis iste ipsum!
          </p>
        </div>
        <div className=" sm:flex mx-auto justify-center gap-20 w-full ">
          {/* Quick Links 1*/}
          <div className="sm:text-start pt-8">
            <p className="text-[24px] font-bold whitespace-nowrap">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li className="pt-4">
                <p>Home</p>
              </li>
              <li>
                <p>Analytics</p>
              </li>
              <li>
                <p>Personal Vault</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
            </ul>
          </div>
          {/*Useful Links*/}
          <div className=" pt-8 whitespace-nowrap  sm:text-start">
            <p className="text-[24px] font-bold">Useful Links</p>
            <ul className="space-y-2">
              <li className="pt-4">
                <p>Sign up</p>
              </li>
              <li>
                <p>Account Login</p>
              </li>
              <li>
                <p>Feedback</p>
              </li>
              <li>
                <p>Terms</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
