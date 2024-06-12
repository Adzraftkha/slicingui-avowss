import React from "react";

export default function Footer() {
  return (
    <div className="mx-[225px] flex">
      <div className="w-3/12 text-white mt-[65px]">
        <h4 className="font-poppins font-bold text-xl space-y-2 pb-2">
          Tautan Cepat
        </h4>
        <div className="font-lato text-base space-y-2">
          <p>Produk</p>
          <p>Promo</p>
          <p>Artikel</p>
          <p>Acara</p>
          <p>Simulasi</p>
          <p>E-book</p>
        </div>
      </div>
      <div className="w-4/12 text-white mt-[65px]   ">
        <h4 className="font-poppins font-bold text-xl space-y-2 pb-2 ">Bantuan</h4>
        <div className="font-lato text-base  space-y-2  ">
          <p>Syarat dan Ketentuan</p>
          <p>hubungi Kami</p>
          <p>Tentang Kami</p>
        </div>
      </div>
      <div className="w-5/12 text-white mt-[65px]">
        <h4 className="font-poppins font-bold text-xl space-y-2 ">
          Kantor Pusat Pegadaian
        </h4>
        <p className="font-lato text-base space-y-2 bg-lokasi px-8 mt-2">
          Jl. Kramat Raya 162 Jakarta Pusat 10430
        </p>
        <div className=" flex font-lato text-base  space-x-2  items-center mt-2 ">
          <p className="bg-hp px-8">0213155550</p>
          <p className="bg-telp px-8">021 063 5162</p>
        </div>
        <div className="flex font-lato text-base  space-x-2  items-center mt-6 ">
          <img src="/images/cc.svg" />
        </div>
        <div className="text-base font-poppins font-bold mt-[40px] ">
          Download Pegadaian Digital
        </div>
        <div className="flex font-lato text-base  space-x-2  items-center mt-3 ">
          <img src="/images/google.svg" />
          <img src="/images/app.svg" />
        </div>
        <div className=" absolute left-56 right-56 flex mb-[60px] item-center ">
          <div className="  text-white w-7/12 text-base font-poppins font-bold mt-[30px] ">
            PT Pegadaian terdaftar dan diawasi oleh OJK
          </div>
          <div className="w-5/12 flex font-lato text-base  pl-1 items-center mt-6 ">
            <img src="/images/sosmed.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
