import React from "react";
import AppItem2 from "../../components/AppItem2";
import discord from "../../assets/discord.png";
import photoshop from "../../assets/photoshop.png";
import skype from "../../assets/skype.png";
import youtube from "../../assets/youtube.png";
import Image from "next/image";
import curvedline from "../../assets/bg2.png";
import curvedline2 from "../../assets/bg10.png";
const Vault = () => {
  const apps = [
    {
      category: "Web Tools",
      app1: { name: "Discord", icon: discord, id: 1 },
      app2: { name: "Photoshop", icon: photoshop, id: 2 },
      app3: { name: "Skype", icon: skype, id: 3 },
      app4: { name: "Youtube", icon: youtube, id: 4 },
    },
    {
      category: "Messaging",
      app1: { name: "Discord", icon: discord, id: 5 },
      app2: { name: "Photoshop", icon: photoshop, id: 6 },
      app3: { name: "Skype", icon: skype, id: 7 },
      app4: { name: "Youtube", icon: youtube, id: 8 },
    },
    {
      category: "Media",
      app1: { name: "Discord", icon: discord, id: 9 },
      app2: { name: "Photoshop", icon: photoshop, id: 10 },
      app3: { name: "Skype", icon: skype, id: 11 },
      app4: { name: "Youtube", icon: youtube, id: 12 },
    },
    {
      category: "Web Tools",
      app1: { name: "Discord", icon: discord, id: 13 },
      app2: { name: "Photoshop", icon: photoshop, id: 14 },
      app3: { name: "Skype", icon: skype, id: 15 },
      app4: { name: "Youtube", icon: youtube, id: 16 },
    },
    {
      category: "Messaging",
      app1: { name: "Discord", icon: discord, id: 17 },
      app2: { name: "Photoshop", icon: photoshop, id: 18 },
      app3: { name: "Skype", icon: skype, id: 19 },
      app4: { name: "Youtube", icon: youtube, id: 20 },
    },
    {
      category: "Media",
      app1: { name: "Discord", icon: discord, id: 21 },
      app2: { name: "Photoshop", icon: photoshop, id: 22 },
      app3: { name: "Skype", icon: skype, id: 23 },
      app4: { name: "Youtube", icon: youtube, id: 24 },
    },
    {
      category: "Web Tools",
      app1: { name: "Discord", icon: discord, id: 25 },
      app2: { name: "Photoshop", icon: photoshop, id: 26 },
      app3: { name: "Skype", icon: skype, id: 27 },
      app4: { name: "Youtube", icon: youtube, id: 28 },
    },
    {
      category: "Messaging",
      app1: { name: "Discord", icon: discord, id: 29 },
      app2: { name: "Photoshop", icon: photoshop, id: 30 },
      app3: { name: "Skype", icon: skype, id: 31 },
      app4: { name: "Youtube", icon: youtube, id: 32 },
    },
    {
      category: "Media",
      app1: { name: "Discord", icon: discord, id: 33 },
      app2: { name: "Photoshop", icon: photoshop, id: 34 },
      app3: { name: "Skype", icon: skype, id: 35 },
      app4: { name: "Youtube", icon: youtube, id: 36 },
    },
  ];
  return (
    <div className="">
      {/* CurverLineMobile*/}
      <div className="sm:hidden">
        <Image src={curvedline} className="w-full h-20" />
      </div>
      {/* CurverLineWeb */}
      <div className="hidden sm:flex">
        <Image src={curvedline2} className="w-full h-20" />
      </div>
      <div className="bg-[#041d33] pb-8 ">
        {/* Title */}
        <h1 className="text-[40px] text-center text-white font-semibold pt-4 px-4">
          Personal Vault
        </h1>

        {/* Display the Apps */}
        <div className="flex lg:gap-10 gap-8 lg:flex-nowrap flex-wrap items-start container mx-auto">
          <div className="px-4 py-8 mt-8">
            <p className="text-[19px] text-white font-semibold pb-6">
              Create new Package
            </p>
            <input
              type="text"
              placeholder="Type Package Name"
              className="outline-none p-1 w-[300px] text-center"
            />
            <div className=" flex items-center justify-start mt-4">
              <button className=" font-bold py-2 text-sm bg-[#0ff6f6] w-[150px] rounded-full mt-4 hover:bg-[#50f0f0] transform duration-300 ease-in-out">
                Add package
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3  py-12 gap-6 max-w-[90vw] mx-auto items-start w-full">
            {apps.map((app) => (
              <AppItem2
                category={app.category}
                app1={app.app1}
                app2={app.app2}
                app3={app.app3}
                app4={app.app4}
              />
            ))}
          </div>
        </div>
        {/* Download */}
        <div className=" flex items-center justify-center bg-[#0ff6f6] w-[20rem] mx-auto  rounded-full mt-4 hover:bg-[#50f0f0] transform duration-300 ease-in-out">
          <button className=" font-bold py-3.5 rounded-full text-[18px]">
            Download Checked Apps
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vault;
