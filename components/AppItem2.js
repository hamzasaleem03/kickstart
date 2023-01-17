import Image from "next/image";
import React from "react";

const AppItem2 = ({ category, app1, app2, app3, app4 }) => {
  return (
    <div className="text-white flex flex-col  items-start justify-between">
      <p className="text-[19px]  font-semibold pb-2">{category}</p>
      <div className="space-y-1">
        {/* App1 */}
        <label htmlFor={app1.id} className="flex items-start gap-4 ">
          <input type="checkbox" id={app1.id} className="rounded-full " />
          <Image src={app1.icon} className="w-5 " />
          <p>{app1.name}</p>
        </label>
        {/* App2 */}
        <label htmlFor={app2.id} className="flex items-center gap-4">
          <input type="checkbox" id={app2.id} />
          <Image src={app2.icon} className="w-5" />
          <p>{app2.name}</p>
        </label>

        {/* App3 */}
        <label htmlFor={app3.id} className="flex items-center gap-4">
          <input type="checkbox" id={app3.id} />
          <Image src={app3.icon} className="w-5" />
          <p>{app3.name}</p>
        </label>

        {/* App4 */}
        <label htmlFor={app4.id} className="flex items-center gap-4">
          <input type="checkbox" id={app4.id} />
          <Image src={app4.icon} className="w-5" />
          <p>{app4.name}</p>
        </label>
      </div>
      <div className=" flex items-center justify-center gap-4">
          <button className="text-black font-bold py-2 text-sm bg-[#0ff6f6] px-2 mx-auto  rounded-full mt-4 hover:bg-[#50f0f0] transform duration-300 ease-in-out">
            Download Package
          </button>
          <button className="text-black font-bold py-2 text-sm bg-[#0ff6f6] px-4 mx-auto  rounded-full mt-4 hover:bg-[#50f0f0] transform duration-300 ease-in-out">
            Delete
          </button>
        </div>
    </div>
  );
};

export default AppItem2;
