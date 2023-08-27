import React from "react";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import image2 from "assets/img/profile/image2.png";
import image3 from "assets/img/profile/image3.png";
import Card from "components/card";

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
const Project = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Candidates
        </h4>
      </div>
      {/* Project 1 */}
      {arr.map((ob) => (
        <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <div className="flex items-center">
            <div className="">
              <img
                className="h-[83px] w-[83px] rounded-lg"
                src={ob.image}
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {ob.title}
              </p>
            </div>
          </div>
          <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
            <MdModeEditOutline />
            <MdDeleteOutline />
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Project;
