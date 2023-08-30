import MiniCalendar from "components/calendar/MiniCalendar";
import Heatmap from "components/charts/heatmap";
import WeeklyRevenue from "views/admin/commentsAnalysis/components/WeeklyRevenue";
import TotalSpent from "views/admin/commentsAnalysis/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import axios from "axios";
import image1 from "assets/img/profile/image1.png";
import image3 from "assets/img/profile/image3.png";
import image2 from "assets/img/profile/image2.png";
import InputField from "components/fields/InputField";
import { columnsDataDevelopment } from "./variables/columnsData";
import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import DevelopmentTable from "./components/DevelopmentTable";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/commentsAnalysis/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [dataArr, setDataArr] = React.useState("");
  const [selectedCandidate, setSelectedCandidate] = React.useState("");


  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    onLoadApp();
  }, []);
  const onLoadApp = async () => {
    let imageArr = await JSON.parse(localStorage.getItem("imageData"));
    var imageData = imageArr?.filter((elements) => {
      return elements !== null;
    });
    setDataArr(imageData);
  };
  const handleFileSelect = (event) => {
    let value = URL.createObjectURL(event.target.files[0]);
    console.log("🚀 ~ file: index.jsx:55:", value);
    setSelectedFile(value);
  };
  const SaveDataToLocalStorage = (data) => {
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem("imageData")) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    console.log(a); // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("imageData", JSON.stringify(a));
  };

  const changeOnClick = (e) => {
    SaveDataToLocalStorage();
    const reqData = {
      image_path: `D:/SLIIT/YEAR4/Semester 1/Research Project/coding/Politician Evaluation System/data/Categories/${selectedFile.name}`,
    };
    // const resData = {
    //   // userName: inputValue,
    //   // predicted: res.predicted_class_name,
    //   userName: "inputValue",
    //   predicted: "res.predicted_class_name",
    // };
    // SaveDataToLocalStorage(resData);
    axios
      .post(`http://127.0.0.1:8000/api/v1/image_classifier`, reqData)
      .then((res) => {
        console.log("🚀 ~ file: index.jsx:68 ~ .then ~ res:", res);
        const resData = {
          userName: "inputValue",
          predicted: "res.predicted_class_name",
        };
        SaveDataToLocalStorage(resData);
      })
      .catch((err) => {
        console.log(err);
      });
    // history.push("/Landing");
  };
  const handleAddrTypeChange = (e) => setSelectedCandidate(e.target.value);
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

  return (
    <div>
      <div className="mt-5 grid grid-rows-1 gap-5 md:grid-rows-2">
        <select
          onChange={(e) => handleAddrTypeChange(e)}
          style={{ height: 50, borderRadius: 10 }}
          className="mb-3 mr-2 flex items-center justify-center border border-gray-200 text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white"
        >
          {arr.map((ob) => (
            <option value={ob.title}>{ob.title}</option>
          ))}
        </select>
        <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
          <input
            type="file"
            onChange={handleFileSelect}
            className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0"
          >
            {/* <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
            <h4 className="text-xl font-bold text-brand-500 dark:text-white">
              Upload Files
            </h4>
            <p className="mt-2 text-sm font-medium text-gray-600">
              PNG, JPG files are allowed
            </p> */}
          </input>
        </div>
        <button
          onClick={() => changeOnClick()}
          className="linear mt-2 rounded-xl bg-brand-500 py-[12px] pl-6 pr-6 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Proceed
        </button>
      </div>
      {dataArr && (
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={dataArr}
        />
      )}
    </div>
  );
};

export default Dashboard;
