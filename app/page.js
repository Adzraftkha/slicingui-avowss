
import React from "react";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Menu from "@/components/Menu";
import Iklan from "@/components/Iklan";
import Promo from "@/components/Promo";
import Ebook from "@/components/Ebook";
import Artikel from "@/components/Artikel";
import Video from "@/components/Video";
import Footer from "@/components/Footer";

export default function Home() {
 
  return (
    <div className=" bg-white min-h-screen ">
      <Navbar/>
      <div className=" flex w-screen h-[664px]  bg-landingpage">
      <Landing/></div>
      <div className="container  mx-auto">
      <Menu/></div>
      <div className="  mx-auto bg-bg1 h-[650px] ">
      <Promo/></div>
      <div className="h-[550px] mx-auto">
      <Artikel/></div>
      <div className="  mx-auto bg-ebook ">
      <Ebook/></div>
  
      <div className="h-[550px] bg-bg1 mx-auto">
      <Video/></div>
      <div className="container mx-auto">
      <Iklan/></div>

      <div className="  h-[489px] mx-auto bg-ebook ">
      <Footer/></div>
    </div>
    
  );
}
