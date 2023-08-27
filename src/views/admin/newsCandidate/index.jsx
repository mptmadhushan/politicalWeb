import MiniCalendar from "components/calendar/MiniCalendar";
import Heatmap from "components/charts/heatmap";
import WeeklyRevenue from "views/admin/commentsAnalysis/components/WeeklyRevenue";
import TotalSpent from "views/admin/commentsAnalysis/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import axios from "axios";
import InputField from "components/fields/InputField";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
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
      <div className="mt-5 grid grid-rows-1 gap-5 md:grid-rows-2">
        <InputField
          variant="auth"
          extra="mb-3"
          label="Candidate name*"
          placeholder="Candidate name"
          id="email"
          type="text"
        />{" "}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Position*"
          placeholder="Position"
          id="email"
          type="text"
        />{" "}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Currently elected position*"
          placeholder="Position"
          id="email"
          type="text"
        />
        <textarea
          type="text"
          name="name"
          placeholder="News"
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
        {/* <TotalSpent /> */}
      </div>

      <div className="md:grid-cols mt-5 grid grid-cols-1 gap-5">
        {/* <p className=" ml-1 text-base text-xl text-gray-600">
          Candidate Name : Adipisicing quis
        </p> */}
        <p className="mb-9 ml-1 text-base text-xl text-gray-600">
          Candidate stats : {dataArr?.sentiment}
        </p>
        <p className="mb-9 ml-1 text-base text-gray-600">{dataArr?.news}</p>
      </div>
    </div>
  );
};

export default Dashboard;
