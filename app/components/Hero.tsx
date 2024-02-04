import { data } from "../lib/data";
import { BugSvg } from "./BugSvg";
import { ResponsiveSvg } from "./ResponsiveSvg";
import { ReuseSvg } from "./ReuseSvg";

export const Hero = () => {
  return (
    <div className="text-white  grid grid-cols-4 grid-rows-10 gap-4">
      <div className="flex items-center justify-center bg-black rounded-3xl text-center">
        <h1 className="text-[200px] leading-none">Hi</h1>
      </div>
      <div className="p-10 text-black  rounded-3xl col-span-3 flex flex-col gap-2 justify-center bg-cyan-500">
        <h1 className="text-8xl whitespace-nowrap text-balance">{`I'm`}</h1>
        <h1 className="text-8xl whitespace-nowrap text-balance">{`Anakin Skywalker.`}</h1>
      </div>
      <div className="p-10 bg-cyan-500 text-black flex flex-col gap-2 rounded-3xl col-span-3">
        <h1 className="text-9xl">{`I'm a`}</h1>
        <h1 className="text-9xl">{`Web Developer`}</h1>
      </div>
      <div className="p-10 bg-black rounded-3xl flex items-center row-span-2">
        <h1 className="text-8xl text-purple-500">About</h1>
      </div>
      <div className="p-10 bg-white flex items-end rounded-3xl ">
        <h1 className="text-9xl text-red-500"></h1>
      </div>
      <div className="p-5 bg-purple-500  items-center justify-center text-black flex flex-col gap-4 rounded-3xl row-span-2 col-span-2">
        <p className="text-black text-2xl">{data.about.description}</p>
      </div>
      <div className="p-10 bg-black flex items-end rounded-3xl row-span-2">
        <h1 className="text-9xl text-red-500">Features</h1>
      </div>
      <div className="p-10  rounded-3xl bg-white text-black">
        <h1 className="text-9xl"></h1>
      </div>
      <div className="p-10  rounded-3xl bg-red-500 text-black">
        <BugSvg />
      </div>
      <div className="p-10 rounded-3xl bg-red-500 text-black">
        <ReuseSvg />
      </div>
      <div className="p-10  rounded-3xl bg-red-500 text-black">
        <ResponsiveSvg />
      </div>
      <div className="p-10  bg-green-500 text-black rounded-3xl col-span-2 ">
        <h1 className="text-9xl">Skills</h1>
      </div>
      <div className="p-10 bg-black text-green-500 rounded-3xl col-span-2  row-span-2">
        <h1 className="text-9xl">Skills</h1>
      </div>

      <div className="p-10 bg-black text-pink-500 rounded-3xl flex items-end  row-span-2">
        <h1 className="text-9xl ">testimonials</h1>
      </div>
      <div className="p-10 bg-white rounded-3xl   ">
        <h1 className="text-9xl">fake</h1>
      </div>
      <div className="p-10  rounded-3xl bg-pink-500 text-black col-span-2 ">
        <h1 className="text-9xl">testi</h1>
      </div>
      <div className="p-10 text-yellow-500 flex items-center bg-black rounded-3xl  row-span-3 ">
        <h1 className="text-9xl">see preojects</h1>
      </div>
      <div className="p-10 bg-yellow-500 text-black rounded-3xl  row-span-2 col-span-3">
        <h1 className="text-9xl"> preojects</h1>
      </div>
      <div className="p-10 bg-white text-black rounded-3xl   ">
        <h1 className="text-9xl">contact me</h1>
      </div>
      <div className="p-10 bg-black rounded-3xl  col-span-3">
        <h1 className="text-9xl"> contact</h1>
      </div>
    </div>
  );
};
