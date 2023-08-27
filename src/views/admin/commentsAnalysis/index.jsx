import MiniCalendar from "components/calendar/MiniCalendar";
import Heatmap from "components/charts/heatmap";
import WeeklyRevenue from "views/admin/commentsAnalysis/components/WeeklyRevenue";
import TotalSpent from "views/admin/commentsAnalysis/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import image1 from "assets/img/profile/image1.png";
import image3 from "assets/img/profile/image3.png";
import image2 from "assets/img/profile/image2.png";
import React, { useState, useEffect } from "react";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/commentsAnalysis/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const arr = [
  {
    id: 1,
    title: "Anura Kumara",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VTKDssPY4_jwXHjFC9IZC3HETWr2VZqdrl2MqSoh0Dqy4AVrNnquO766DyekdX95OHU&usqp=CAU",
  },
  {
    id: 2,
    title: "Ranjan Ramanayake",
    image:
      "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_a8cb32cb66.jpg",
  },
  {
    id: 3,
    title: "Harsha de silva",
    image:
      "https://pbs.twimg.com/profile_images/1392509837074907137/WkYiuVBO_400x400.jpg",
  },
];
const Dashboard = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [dataArr, setDataArr] = React.useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const changeOnClick = (e) => {
    const reqData = {
      news: inputValue,
    };
    // axios
    //   .post(`http://127.0.0.1:8000/api/v1/sentiment_news`, reqData)
    //   .then((res) => {
    //     console.log("🚀 ~ file: index.jsx:68 ~ .then ~ res:", res)
    //     const resData = {
    //       // userName: inputValue,
    //       // predicted: res.predicted_class_name,
    //        userName: "inputValue",
    //       predicted: "res.predicted_class_name",
    //     };
    // setDataArr(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // history.push("/Landing");
  };
  return (
    <div>
      {/* Card widget */}

      <div
        style={{}}
        className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6"
      >
        <div className="flex h-full w-full items-center rounded-full border bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <button className="linear mt-2 rounded-xl bg-brand-500 py-[12px] pl-6 pr-6 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Proceed
        </button>
      </div>
      <div className="ml-5 mt-5 text-xl font-bold text-navy-700 dark:text-white">
        Trending
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {arr.map((it, index) => (
          <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <div className="flex items-center">
              <div className="">
                <p className="m-5 text-base text-xl  font-bold font-medium text-navy-700 dark:text-white">
                  {it.id}
                </p>
              </div>
              <div className="">
                <img
                  className="h-[83px] w-[83px] rounded-lg"
                  src={it.image}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  {it.title}
                </p>
                {/* <p className="mt-2 text-sm text-gray-600">
                  Project #1 .
                  <a
                    className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                    href=" "
                  >
                    See product details
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        ))}

        {/* <TotalSpent /> */}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <div className="ml-5 mt-5 text-xl font-bold text-navy-700 dark:text-white">
            Ranjan Ramanayake
          </div>
          <p className="ml-5 text-base font-medium text-navy-700 dark:text-white">
            Quis fugiat veniam velit in.
          </p>
          <img
            className="ml-5 mt-5 h-[183px] w-[183px] rounded-lg"
            src={
              "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_a8cb32cb66.jpg"
            }
            alt=""
          />
        </div>
        <div >
          <textarea
            type="text"
            rows="5"
            name="name"
            placeholder="Comment"
            onChange={onChangeHandler}
            value={inputValue}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${"border-gray-200 dark:!border-white/10 dark:text-white"}`}
          />
          <button
            onClick={() => changeOnClick()}
            className="linear mt-2 rounded-xl bg-brand-500 py-[12px] pl-6 pr-6 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Proceed
          </button>
        </div>
        <div className="md:grid-cols mt-5 grid grid-cols-1 gap-5">
          {/* <p className=" ml-1 text-base text-xl text-gray-600">
          Candidate Name : Adipisicing quis
        </p> */}
          <p className="mb-9 ml-1 text-base text-xl text-gray-600">
            Sentiment : {dataArr?.sentiment}
          </p>
          <p className="mb-9 ml-1 text-base text-gray-600">{dataArr?.comment}</p>
        </div>
        <Heatmap />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>
      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default Dashboard;
