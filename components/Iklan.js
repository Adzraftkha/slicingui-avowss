import React from 'react'

export default function Iklan() {
  return (
    <div className='flex mx-[100px] my-[90px] '>
        <div className='w-4/12 '>
        <img src="/p2.svg" />
        </div>
        <div className=" text-center w-8/12 my-[70px]">
          <h1 className=" pt-5  px-4 mx-auto font-poppins font-bold text-2xl text-black">
            Atur Keuangan dalam Genggamanmu
          </h1>
          <p className=" font-lato text-base text-text-200 px-4 pt-2 mx-auto w-[538px] ">
            Wujudkan rencanamu dengan mengelola aset secara aman dan praktis
            melalui Pegadaian Digital. Nabung emas, cicil emas, dan layanan
            gadai untuk memenuhi kebutuhanmu jadi mudah!
          </p>
          <a href="#" className="font-bold text-text-100 mt-24">
            Baca Selengkapnya
          </a>
          <div className="text-base font-poppins font-bold mt-[30px] ">
            Download Pegadaian Digital
          </div>
          <div className="flex space-x-3 mt-2 ml-56">
            <img src="/images/google.svg" />
            <img src="/images/app.svg" />
          </div>
        </div>
    </div>
  )
}
