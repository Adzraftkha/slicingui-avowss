import React from 'react'

export default function Menu() {
  return (
    <div className='flex mx-[100px] my-[120px]'>
        <div className='w-4/12'>
        <img src="/images/p1.svg" />
        </div>
        <div className="w-8/12 text-center">
          <h1 className=" pt-5  px-4 mx-auto font-poppins font-bold text-2xl text-black">
            Solusi Keuangan Terbaik untuk Kamu
          </h1>
          <p className=" font-lato text-base text-text-200 px-4 pt-2 mx-auto w-[538px] ">
            Dapatkan solusi perencanaan keuangan demi kemudahan dan kenyamanan
            di masa depan
          </p>
          <div className="flex space-x-10 flex-wrap mx-32 w-[500px]">
            <div className="w-2/8 pt-10 ml-5 ">
              <button className="bg-bg1 hover:border-black shadow-lg rounded-lg outline-bg3 p-4 ">
                <img src="/images/emas.svg" />
                <div>
                  <p className="text-xs font-bold font-lato px-2 ">Tabungan Emas</p>{" "}
                </div>
              </button>
            </div>
            <div className="w-2/8 pt-10 ">
              <button className="bg-bg1 shadow-lg rounded-lg outline-bg3 p-4">
                <img src="/images/emas.svg" />
                <div>
                  <p className="text-xs font-bold font-lato px-2">Gadai Emas</p>{" "}
                </div>
              </button>
            </div>
            <div className="w-2/7 pt-10">
              <button className="bg-bg1 shadow-lg rounded-lg outline-bg3 p-4">
                <img src="/images/emas.svg" />
                <div>
                  <p className="text-xs font-bold font-lato px-2">Pinjam Usaha</p>{" "}
                </div>
              </button>
            </div>
            <div className="w-2/7 pt-10">
              <button className="bg-bg1 shadow-lg rounded-lg outline-bg3 p-4">
                <img src="/images/emas.svg" />
                <div>
                  <p className="text-xs font-bold font-lato px-3">Cicil Emas</p>{" "}
                </div>
              </button>
            </div>
            <div className="w-2/7 pt-10">
              <button className="bg-bg1 shadow-lg rounded-lg outline-bg3 p-4">
                <img src="/images/emas.svg" />
                <div>
                  <p className="text-xs font-bold font-lato">Payment Online</p>{" "}
                </div>
              </button>
            </div>
            <div className="w-2/7 pt-10">
              <button className="bg-bg1 shadow-lg rounded-lg outline-bg3 p-4">
                <img src="/images/emas.svg" />
                <div>
                  <p className="text-xs font-bold font-lato">Produk Lainnya</p>{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
