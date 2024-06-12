"use client";
import React from "react";
import { useState } from "react";

export default function Navbar() {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
  
    const dropdownList1 = [
      { text: "Emas", href: "#" },
      { text: "Inspirasi", href: "#" },
      { text: "Investasi", href: "#" },
      { text: "Keuangan", href: "#" },
      { text: "Wirausaha", href: "#" },
    ];
    const dropdownList2 = [
      { text: "Simulasi Cicil Emas", href: "#" },
      { text: "Harga Emas Hari Ini", href: "#" },
      ];
  return (
    <nav className="py-5">
    <div className="container mx-auto">
      <div className="flex items-center font-bold font-poppins text-text-200">
        <div className="w-2/12">
          <div className="item-center px-2 mr-[50px] ">
            <img
              src="/images/logo.png"
              alt="Pegadaian"
              className=" h=[10] "
            />
          </div>
        </div>
        <div className="w-8/12 ">
        <ul className="space-x-[45px] flex items-center mx-[140px]">
        <li>
          <a
            href="#"
            className="text-200 font-poppins font-reguler hover:text-text-100">
            Produk
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-200 font-poppins font-reguler hover:text-text-100">
            Promo
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="text-200 font-poppins font-reguler hover:text-text-100 flex items-center"
            onClick={() => setDropdown1(!dropdown1)}>
            Artikel
            <svg className="ml-1 "
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.43148 4.63138C1.59557 4.46734 1.81809 4.37519 2.05011 4.37519C2.28212 4.37519 2.50464 4.46734 2.66873 4.63138L6.99998 8.96263L11.3312 4.63138C11.4963 4.47199 11.7173 4.38379 11.9467 4.38579C12.1761 4.38778 12.3956 4.4798 12.5578 4.64203C12.7201 4.80427 12.8121 5.02373 12.8141 5.25315C12.8161 5.48257 12.7279 5.7036 12.5685 5.86862L7.61861 10.8185C7.45452 10.9825 7.232 11.0747 6.99998 11.0747C6.76796 11.0747 6.54544 10.9825 6.38136 10.8185L1.43148 5.86862C1.26744 5.70454 1.17529 5.48202 1.17529 5.25C1.17529 5.01798 1.26744 4.79546 1.43148 4.63138Z"
                fill="#505050"
              />
            </svg>
          </a>
          {dropdown1 && (
            <ul className="absolute w-[200px] bg-white border-2 rounded shadow-lg mt-4">
              {dropdownList1.map(({ text, href }) => (
                <li
                  key={text}
                  className="border-b border-black/5 last:border-0"
                >
                  <a
                    href={href}
                    className="flex py-3 px-6   hover:text-text-100 hover:bg-gray-200/50"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <a
            href="#"
            className="text-200 font-poppins font-reguler hover:text-text-100">
            Acara
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-200 font-poppins font-reguler hover:text-text-100">
            Simulasi
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="text-200 font-poppins font-reguler hover:text-text-100 flex items-center"
            onClick={() => setDropdown2(!dropdown2)}>
            Ebook
            <svg className="ml-1 "
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.43148 4.63138C1.59557 4.46734 1.81809 4.37519 2.05011 4.37519C2.28212 4.37519 2.50464 4.46734 2.66873 4.63138L6.99998 8.96263L11.3312 4.63138C11.4963 4.47199 11.7173 4.38379 11.9467 4.38579C12.1761 4.38778 12.3956 4.4798 12.5578 4.64203C12.7201 4.80427 12.8121 5.02373 12.8141 5.25315C12.8161 5.48257 12.7279 5.7036 12.5685 5.86862L7.61861 10.8185C7.45452 10.9825 7.232 11.0747 6.99998 11.0747C6.76796 11.0747 6.54544 10.9825 6.38136 10.8185L1.43148 5.86862C1.26744 5.70454 1.17529 5.48202 1.17529 5.25C1.17529 5.01798 1.26744 4.79546 1.43148 4.63138Z"
                fill="#505050"
              />
            </svg>
            
          </a>
          {dropdown2 && (
            <ul className="absolute w-[250px] bg-white border-2 rounded shadow-lg mt-4">
              {dropdownList2.map(({ text, href }) => (
                <li
                  key={text}
                  className="border-b border-black/5 last:border-0"
                >
                  <a
                    href={href}
                    className="flex py-3 px-6   hover:text-text-100 hover:bg-gray-200/50"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        </ul>
        </div>
        
        <div className="w-2/12">
        <input
              className=" bg-gray-300 py-2 px-4 w-40 rounded-xl bg-search pl-8 "
              placeholder="Search..."
            />
        </div>
      </div>
    </div>
  </nav>
  );
}
