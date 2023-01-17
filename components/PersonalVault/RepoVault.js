import React from "react";

const Repository = () => {
  return (
    <div className="bg-[#041d33] py-20 px-4">
      <div className="bg-[#041d33] text-white font-semibold  flex flex-col justify-center items-center pb-8 md:pb-20 rounded-b-[2rem] md:rounded-b-[3rem]">
        <div className="sm:flex gap-4 text-[40px]  text-center">
          <p>Repository</p>
        </div>
        <div className="flex lg:gap-10 gap-8 lg:flex-nowrap flex-wrap items-start container mx-auto mt-20">
          <div className="px-4 pb-8">
            <p className="text-[19px] text-white font-semibold pb-6">
              Save Software
            </p>
            <input
              type="text"
              placeholder="Drop down of category "
              className="outline-none font-normal text-black p-1 w-[300px] text-center"
            />
            <br />
            <input
              type="text"
              placeholder="Drop down of software "
              className="outline-none font-normal text-black p-1 w-[300px] text-center mt-6"
            />
            <div className=" flex items-center justify-start mt-4">
              <button className=" font-bold text-black py-2 text-sm bg-[#0ff6f6] w-[150px] rounded-full mt-4 hover:bg-[#50f0f0] transform duration-300 ease-in-out">
                Add Software
              </button>
            </div>
          </div>
          <div className="w-full" aria-label="main">
            <div className="flex justify-between gap-4 items-center w-full flex-wrap">
              <p className="text-[19px] text-white font-semibold">
                Show 4 entries
              </p>
              <div className="flex gap-2 items-center">
                <labke>Search</labke>
                <input
                  type="text"
                  placeholder="Drop down of software "
                  className="outline-none font-normal text-black p-1 w-[300px] text-center"
                />
              </div>
            </div>
            <div className="w-full mt-5 overflow-auto">
              <table className="border whitespace-nowrap w-full">
                <tbody className="border">
                  <tr>
                    <th className="border px-3 pt-3 pb-5 font-bold text-2xl text-left">
                      Tools
                    </th>
                    <th className="border px-3 pt-3 pb-5 font-bold text-2xl text-left">
                      Category
                    </th>
                    <th className="border px-3 pt-3 pb-5 font-bold text-2xl text-left">
                      Action
                    </th>
                  </tr>
                  <tr>
                    <td className="border px-3 py-3 font-medium text-xl">
                      Chrome
                    </td>
                    <td className="border px-3 py-3 font-medium text-xl">
                      Browser
                    </td>
                    <td className="border px-3 py-3 font-medium text-xl">5</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-3 font-medium text-xl">
                      Edge
                    </td>
                    <td className="border px-3 py-3 font-medium text-xl">
                      Browser
                    </td>
                    <td className="border px-3 py-3 font-medium text-xl">5</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-3 font-medium text-xl">
                      Firefox
                    </td>
                    <td className="border px-3 py-3 font-medium text-xl">
                      Browser
                    </td>
                    <td className="border px-3 py-3 font-medium text-xl">5</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-3 font-medium text-xl">
                      Visual Studio Code
                    </td>
                    <td className="border px-3 py-3 font-medium text-xl">
                      Browser
                    </td>
                    <td className="border px-3 py-3 font-medium text-xl">5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
