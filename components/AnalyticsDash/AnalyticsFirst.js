import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import curvedline from "../../assets/bg2.png";
import curvedline2 from "../../assets/bg10.png";
const AnalyticsFirst = () => {
  // chart 1
  useEffect(() => {
    const data = {
      datasets: [
        {
          label: "My First Dataset",
          data: [10, 100, 20, 50, 20, 300],
          borderWidth: 0,
          cutout: 50,
          backgroundColor: [
            "#fff",
            "#041d33",
            "#fff",
            "#041d33",
            "#fff",
            "#041d33",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const config = {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    };
    const myChart = new Chart("myChart1", config);
    const myChart2 = new Chart("myChart2", config);
    const myChart3 = new Chart("myChart3", config);
    const myChart4 = new Chart("myChart4", config);

    return () => {
      myChart.destroy();
      myChart2.destroy();
      myChart3.destroy();
      myChart4.destroy();
    };
  });
  // end
  // chart 2
  useEffect(() => {
    const labels = ["April 25", "May 02", "May 09", "May 16", "May 23"];

    const data = {
      labels: labels,
      color: "#fff",
      datasets: [
        {
          label: "Most Software Downloaded",
          backgroundColor: "#2c6aa1",
          borderColor: "#2c6aa1",
          color: "#fff",
          barThickness: 60,
          data: [30, 40, 50, 60, 70],
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      color: "#fff",
      options: {
        responsive: true,
        maintainAspectRatio: true,
        color: "#fff",
        plugins: {
          legend: {
            position: "bottom",
          },
          // datalabels:{
          //     display:true,
          //     color:"#fff",
          //     anchor:"end",
          //     align:"top"
          // },
          // plugins:[ChartDataLabels],
        },
        // plugins:[ChartDataLabels],

        scales: {
          x: {
            grid: {
              display: false,
              color: "#fff",
            },
            ticks: {
              color: "#fff",
            },
          },
          y: {
            grid: {
              display: true,
              color: "#fff",
            },
            scales: {
              beginAtZero: true,
            },
            min: 0,
            max: 75,
            ticks: {
              suggestedMin: 0,
              suggestedMax: 75,
              stepSize: 25,
              color: "#fff",
              callback: function (value) {
                return value + "%";
              },
            },
          },
        },
      },
    };
    const myChart = new Chart("myChart6", config);

    return () => {
      myChart.destroy();
    };
  });
  // end
  // chart
  useEffect(() => {
    const data = {
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 300],
          borderWidth: 0,
          //   cutout: 50,
          backgroundColor: ["#fff", "#2c6aa1"],
          hoverOffset: 4,
        },
      ],
    };

    const config = {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    };
    const myChart = new Chart("myChart7", config);

    return () => {
      myChart.destroy();
    };
  });
  // end
  return (
    <div aria-label="main">
      {/* CurverLineMobile*/}
      <div className="sm:hidden">
        <Image src={curvedline} className="w-full h-20" />
      </div>
      {/* CurverLineWeb */}
      <div className="hidden sm:flex">
        <Image src={curvedline2} className="w-full h-20" />
      </div>
      <div className="bg-[#041d33]">
        <div className="text-white py-10 md:py-20 w-full mx-auto container px-4">
          <p className="font-bold text-[40px] md:text-[55px] text-center">
            Analytics Dashboard
          </p>
          <div className="flex items-center justify-end w-full">
            <button className="text-[#041d33] font-bold py-2 text-sm bg-[#0ff6f6] px-2 rounded-full mt-4 hover:bg-[#50f0f0] transform duration-300 ease-in-out">
              Download Report
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-6 pt-6 md:pt-12">
            {/* Card 1 */}
            <div className="bg-[#2c6aa1] gradient py-3 w-full  rounded-[0.5rem]  px-2 max-w-[24rem] mx-auto">
              <div className="flex items-center justify-between gap-4">
                <div aria-label="one" className="w-full">
                  <p className="text-white font-bold text-[24px] text-center pt-3">
                    3434
                  </p>
                  <p className="text-center font-bold text-[24px] px-2">
                    Lorem Ipsum
                  </p>
                </div>
                <div className="w-[130px] mt-5 ">
                  <canvas id="myChart1"></canvas>
                </div>
              </div>
            </div>
            <div className="bg-[#2c6aa1] gradient py-3 w-full  rounded-[0.5rem]  px-2 max-w-[24rem] mx-auto">
              <div className="flex items-center justify-between gap-4">
                <div aria-label="one">
                  <p className="text-white font-bold text-[24px] text-center pt-3">
                    5345
                  </p>
                  <p className="text-center font-bold text-[24px] px-2">
                    Lorem Ipsum
                  </p>
                </div>
                <div className="w-[130px] mt-5 ">
                  <canvas id="myChart2"></canvas>
                </div>
              </div>
            </div>
            <div className="bg-[#2c6aa1] gradient py-3 w-full  rounded-[0.5rem]  px-2 max-w-[24rem] mx-auto">
              <div className="flex items-center justify-between gap-4">
                <div aria-label="one">
                  <p className="text-white font-bold text-[24px] text-center pt-3">
                    23
                  </p>
                  <p className="text-center font-bold text-[24px] px-2">
                    Lorem Ipsum
                  </p>
                </div>
                <div className="w-[130px] mt-5 ">
                  <canvas id="myChart3"></canvas>
                </div>
              </div>
            </div>
            <div className="bg-[#2c6aa1] gradient py-3 w-full  rounded-[0.5rem]  px-2 max-w-[24rem] mx-auto">
              <div className="flex items-center justify-between gap-4">
                <div aria-label="one">
                  <p className="text-white font-bold text-[24px] text-center pt-3">
                    555
                  </p>
                  <p className="text-center font-bold text-[24px] px-2">
                    Lorem Ipsum
                  </p>
                </div>
                <div className="w-[130px] mt-5 ">
                  <canvas id="myChart4"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-10 justify-center gap-4 items-center px-5 w-full xl:flex-nowrap flex-wrap">
            <div className="lg:max-w-[800px] w-full bg-[#2c6aa1] h-[350px] rounded px-4"></div>
            <div className="md:w-[650px] w-full mt-5">
              <canvas id="myChart6"></canvas>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-6  items-center px-4 xl:flex-nowrap flex-wrap">
            <div className="lg:max-w-[600px] gap-1 w-full flex justify-center items-center relative">
              <p className="text-[10px] md:block hidden w-full text-right">
                Lorem Ipsum 50%
              </p>
              <div className="bg-[#2c6aa1] min-w-[30px] md:block hidden h-[2px] "></div>
              <div className="md:w-[250px] w-full mt-5">
                <canvas id="myChart7"></canvas>
              </div>
              <div className="bg-white min-w-[30px] md:block hidden h-[2px] "></div>
              <p className="text-[10px] md:block hidden w-full">
                Lorem Ipsum 50%
              </p>
            </div>
            <div className="lg:max-w-[450px] w-full bg-[#2c6aa1] h-[270px] rounded px-4"></div>
            <div className="lg:max-w-[450px] w-full bg-[#2c6aa1] h-[270px] rounded px-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFirst;
