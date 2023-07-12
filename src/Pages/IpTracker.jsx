import React, { useState, useEffect } from "react";
import Images from "../assets/Images";
import { getGeoLocation } from "../APIs/GeoLocation";
import { useQuery, useMutation } from "@tanstack/react-query";
// import GoogleMap from "./GoogleMap";

function IpTracker() {
  const [IP, setIP] = useState("");

  const { data, error, isLoading, refetch } = useQuery(["geoLocation"], () =>
    getGeoLocation(IP)
  );
  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
    setIP("");
  };
  const city = "Lahore";

  return (
    // main Container
    <div className=" relative flex flex-col  items-center justify-center  bg-slate-100">
      {/* main card */}

      {/* loading state */}

      {isLoading && (
        <div className="flex flex-col items-center justify-center h-screen w-full mt-20 bg-slate-100">
          <h1 className="text-3xl text-black font-bold">Loading...</h1>
        </div>
      )}

      <div className="flex flex-col mx-auto  z-40  absolute top-5 ">
        <h1 className="text-3xl text-white text-center font-bold">
          {" "}
          IP Address Tracker{" "}
        </h1>
        {/* input */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center justify-center mt-5 w-full"
        >
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="w-[90%] md:max-w-sm h-10 rounded-l-lg text-black px-5"
            onChange={(e) => setIP(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white h-10 rounded-r-lg px-5"
          >
            <img src={Images.Arrow} alt="" />
          </button>
        </form>

        {/* details */}
        <div className="bg-white w-full mx-auto rounded-lg  flex flex-col md:flex-row mt-5 md:mt-10 space-y-5 md:space-y-0 md:space-x-5 py-10 md:px-10">
          {/* ipAddress */}
          <div className="mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-sm  text-slate-400">IP ADDRESS</h1>
            <h1 className="text-lg font-bold text-black">{data?.ip}</h1>
          </div>

          {/* line on medum screen */}
          <div className="hidden md:block h-16 w-[1px]  bg-slate-200 "></div>

          {/* location */}
          <div className="mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-sm  text-slate-400">LOCATION</h1>
            <h1 className="text-lg font-bold text-black">
              {data?.location?.country}, {data?.location?.region}
            </h1>
          </div>
          {/* line on medum screen */}
          <div className="hidden md:block h-16 w-[1px]  bg-slate-200 "></div>

          {/*  Time Zone */}
          <div className="mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-sm  text-slate-400">TIME ZONE</h1>
            <h1 className="text-lg font-bold text-black">
              UTC{data?.location?.timezone}
            </h1>
          </div>
          {/* line on medum screen */}
          <div className="hidden md:block h-16 w-[1px]  bg-slate-200 "></div>

          {/* ISP */}
          <div className="mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-sm  text-slate-400">ISP</h1>
            <h1 className="text-lg font-bold text-black">{data?.isp}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-400">
        {/*mobile image */}
        <div>
          <img src={Images.Phone} alt="" className="md:hidden" />
        </div>

        {/* desktop Image */}
        <div className="hidden md:block">
          <img src={Images.Desktop} alt="" />
        </div>

        {/* map */}
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=657&amp;height=525&amp;hl=en&amp;q=peshawar&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://thepasswordgame.com/">Password Game</a>
          </div>
          <style>
            {`.mapouter{position:relative;text-align:right;width:100%;height:525px;}.gmap_canvas{overflow:hidden;background:none!important;width:100%;height:525px;}.gmap_iframe{height:525px!important;}`}
          </style>
        </div>

        {/* <GoogleMap /> */}
      </div>
    </div>
  );
}

export default IpTracker;
