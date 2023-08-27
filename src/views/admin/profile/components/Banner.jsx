import React from "react";
import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";

const Banner = () => {
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img
            className="h-full w-full rounded-full"
            src={
              "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_a8cb32cb66.jpg"
            }
            alt=""
          />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Ranjan Ramanayake
        </h4>
        <p className="text-base font-normal text-gray-600">
          Aliqua tempor aute
        </p>
      </div>

      <div className="mb-3 mt-6 flex gap-4 md:!gap-14">
        <div className="flex flex-row items-center justify-center">
          <p className="text-xl font-normal text-gray-600">
            Have won the election before
          </p>
          <p className="ml-4 text-2xl font-bold text-navy-700 dark:text-white">
            17
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className="text-xl font-normal text-gray-600">
            If yes position holed
          </p>
          <p className="ml-4 text-2xl font-bold text-navy-700 dark:text-white">
            xxx
          </p>
        </div>
      </div>
      <div className="mb-3 mt-6 flex gap-4 md:!gap-14">
        <div className="flex flex-row items-center justify-center">
          <p className="text-xl font-normal text-gray-600">
           Currently elected position
          </p>
          <p className="ml-4 text-2xl font-bold text-navy-700 dark:text-white">
            XXX
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className="text-xl font-normal text-gray-600">
           Candidate Stats 
          </p>
          <p className="ml-4 text-2xl font-bold text-navy-700 dark:text-white">
            Negative
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
