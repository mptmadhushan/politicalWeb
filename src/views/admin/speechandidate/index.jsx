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
import image1 from "assets/img/profile/image1.png";
import image3 from "assets/img/profile/image3.png";
import image2 from "assets/img/profile/image2.png";
import InputField from "components/fields/InputField";
import { columnsDataDevelopment } from "./variables/columnsData";
import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import DevelopmentTable from "./components/DevelopmentTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
    let imageArr = await JSON.parse(localStorage.getItem("speechData"));
    var speechData = imageArr?.filter((elements) => {
      return elements !== null;
    });
    setDataArr(speechData);
  };
  const handleFileSelect = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    console.log(
      "🚀 ~ file: index.jsx:49 ~ handleFileSelect ~ chosenFiles:",
      chosenFiles
    );
    setSelectedFile(chosenFiles);
  };
  const SaveDataToLocalStorage = (data) => {
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem("speechData")) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    console.log(a); // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("speechData", JSON.stringify(a));
  };

  const changeOnClick = (e) => {
    SaveDataToLocalStorage();
    const reqData = {
      audio_file1: `data/audios/Similar 2/${selectedFile[0].name}`,
      audio_file2: `data/audios/Similar 2/${selectedFile[1].name}`,
      transcribe1: `data/audios/Similar 2/${selectedFile[2].name}`,
      transcribe2: `data/audios/Similar 2/${selectedFile[3].name}`,
    };
    const resData = {
      // userName: inputValue,
      // predicted: res.predicted_class_name,
      userName: selectedCandidate,
      audio_dis_similarity: "0.8219662",
      audio_similarity: "0.17803382873535156",
      sentence_dis_similarity: "0.9999998",
      sentence_similarity: "1.788139343261718807",
    };
    SaveDataToLocalStorage(resData);
    axios
      .post(`http://127.0.0.1:8000/api/v1/audio_similarity`, reqData)
      .then((res) => {
        console.log("🚀 ~ file: index.jsx:68 ~ .then ~ res:", res);

        const resData = {
          userName: selectedCandidate,
          audio_dis_similarity: res.audio_dis_similarity,
          audio_similarity: res.audio_similarity,
          sentence_dis_similarity: res.audio_similarity,
          sentence_similarity: res.sentence_similarity,
        };
        SaveDataToLocalStorage(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

  const handleAddrTypeChange = (e) => setSelectedCandidate(e.target.value);

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
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
            <input multiple type="file" onChange={handleFileSelect} />
            <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
            <h4 className="text-xl font-bold text-brand-500 dark:text-white">
              Upload audio Files
            </h4>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Mp3, wav files are allowed
            </p>
          </div>
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
