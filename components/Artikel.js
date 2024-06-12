import React from "react";

export default function Artikel() {
  return (
    <div className="mx-[225px]">
      <div className="flex items-center font-bold font-poppins text-text-200 justify-between pt-[60px]">
        <div className="text-2xl">Artikel Terbaru</div>
        <div>
          <a href="#" className=" text-xl hover:text-text-100 hover:underline ">
            Artikel Lainnya
          </a>
        </div>
      </div>
      <div className=" flex mt-[48px] space-x-10 -my-20">
        <div className=" w-6/>12">
          <img src="/images/artikel1.svg" />
        </div>
        <div className=" w-6/>12 ">
          <img src="/images/artikel2.svg" />
        </div>
      </div>
    </div>
  );
}
