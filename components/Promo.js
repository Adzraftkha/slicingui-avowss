import React from "react";

export default function Promo() {
  return (
    <div className=" mx-[225px] ">
      <div className="flex items-center font-bold font-poppins text-text-200 justify-between pt-[60px]">
        <div className="text-2xl">Promo</div>
        <div>
          <a href="#" className=" text-xl text-text-100 hover:underline ">
            Promo Lainnya
          </a>
        </div>
      </div>
      <div className=" items-center">
      <div className="w-8/12">
            <div className="bg-white shadow-lg rounded-lg mt-[30px] h-[419px] w-[990px]">
              <div className="flex -mx-10"></div>
              <div className="flex -mx-3 item-center">
                <div className=" w-7/12">
                  <img
                    src="/images/promo.png"
                    className="rounded-xl w-full py-11"
                  />
                </div>
                <div className="w-5/12 pt-[65px]">
                  <div className="flex items-center text-base space-x-[105px] text-text-100 font-bold font-lato">
                    <div className="uppercase  ">44 Hari lagi</div>

                    <div className="">25 Mei - 05 Juni, 2024</div>
                  </div>
                  <h2 className="text-xl mt-12 w-10/12">
                    GAJIAN TIBA, Pakai Promo Pegadaian Digital Aja, Diskon
                    Hingga 1 jt Rupiah!!
                  </h2>
                  <a href="#" className="font-bold text-text-100 ">
                    Baca Selengkapnya
                  </a>
                  <div className="flex items-center text-base space-x-[220px] text-text-100 font-bold font-lato mt-[65px]">
                    <div>
                      <div className="">Kode Promo</div>
                      <div className="uppercase "> Gajian Emas</div>
                    </div>
                    <a href="#" className="">
                      Salin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
