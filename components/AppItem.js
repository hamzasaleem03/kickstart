import Image from "next/image";
import React from "react";

const AppItem = ({ category, app1, app2, app3, app4 }) => {
  return (
    <div className="text-white flex flex-col  items-center">
      <p className="text-[19px]  font-semibold pb-2">{category}</p>
      <div className="space-y-1">
        {/* App1 */}
        <label htmlFor={app1.id} className="flex items-start gap-2 ">
          <input type="checkbox" id={app1.id} className="rounded-full " />
          <Image src={app1.icon} className="w-5 " />
          <p>{app1.name}</p>
        </label>
        {/* App2 */}
        <label htmlFor={app2.id} className="flex items-center gap-2">
          <input type="checkbox" id={app2.id} />
          <Image src={app2.icon} className="w-5" />
          <p>{app2.name}</p>
        </label>

        {/* App3 */}
        <label htmlFor={app3.id} className="flex items-center gap-2">
          <input type="checkbox" id={app3.id} />
          <Image src={app3.icon} className="w-5" />
          <p>{app3.name}</p>
        </label>

        {/* App4 */}
        <label htmlFor={app4.id} className="flex items-center gap-2">
          <input type="checkbox" id={app4.id} />
          <Image src={app4.icon} className="w-5" />
          <p>{app4.name}</p>
        </label>
      </div>
    </div>
  );
};

export default AppItem;
