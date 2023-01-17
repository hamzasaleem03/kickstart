import React from "react";

const About_meet = () => {
  return (
    <div className="bg-[#041d33] text-white py-10 md:py-24">
      <p className="font-bold text-[40px] md:text-[55px] text-center">
       MEET THE TEAM
      </p>
      <p className="text-white text-[20px] max-w-[50rem]   mx-auto text-center items-center pt-1"> 
      Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-6 md:pt-12 container mx-auto place-items-center w-full">
        {/* Card 1 */}
        <div className=" bg-[#040d18]  h-full md:h-[31rem] w-full gap-8  rounded-[0.5rem]  px-2 max-w-[24rem] mx-auto">
          {/* Video */}
          <div className="mt-2">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/img-2.png" className="h-[310px] w-full"/>
          </div>

          {/* Description */}
          <div className="">
            <p className="text-white font-bold text-[24px] text-center pt-3">
              Lorem Ipsum
            </p>
            <p className="text-center pt-4 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis,
              alias! Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        {/* Video 2 */}
        <div className="bg-[#040d18]  h-full md:h-[31rem] w-full   rounded-[0.5rem]  px-2 max-w-[24rem] mx-auto">
          {/* Video */}
          <div className="mt-2">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/img-2.png" className="h-[310px] w-full"/>
          </div>

          {/* Description */}
          <div className="">
            <p className="text-white font-bold text-[24px] text-center pt-3">
              Lorem Ipsum
            </p>
            <p className="text-center pt-4 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis,
              alias! Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        {/* Video 3 */}
        <div className="bg-[#040d18]  h-full md:h-[31rem] w-full   rounded-[0.5rem]  px-2 max-w-[24rem] mx-auto">
          {/* Video */}
          <div className="mt-2">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/img-2.png" className="h-[310px] w-full"/>
          </div>

          {/* Description */}
          <div className="">
            <p className="text-white font-bold text-[24px] text-center pt-3">
              Lorem Ipsum
            </p>
            <p className="text-center pt-4 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis,
              alias! Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default About_meet;
