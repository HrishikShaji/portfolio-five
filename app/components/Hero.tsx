"use client";
import Image from "next/image";
import { data } from "../lib/data";
import { BugSvg } from "./BugSvg";
import { ResponsiveSvg } from "./ResponsiveSvg";
import { ReuseSvg } from "./ReuseSvg";
import { Slider } from "./Slider";

export const Hero = () => {
  return (
    <div className="text-white  grid grid-cols-4 grid-rows-11 gap-4">
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
      <div className="p-10 bg-black rounded-3xl flex flex-col items-center row-span-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <h1 key={i} className="text-8xl text-purple-500">
            #CODE
          </h1>
        ))}
      </div>
      <div className="p-10 bg-purple-500 flex  items-end rounded-3xl ">
        <h1 className="text-9xl text-white">About Me</h1>
      </div>
      <div className="px-20 bg-purple-500  items-center justify-center text-black flex flex-col gap-4 rounded-3xl row-span-2 col-span-2">
        <h2 className="text-black text-xl font-semibold">
          {data.about.description}
        </h2>
      </div>
      <div className="p-10 bg-black flex  flex-col rounded-3xl row-span-2">
        <h1 className="text-9xl text-red-500">UI/UX</h1>
        <h1 className="text-6xl text-red-500">FULL STACK</h1>
        <h1 className="text-9xl text-red-500">WEB3</h1>
        <h1 className="text-6xl text-red-500">ARTIFICIAL INTELLIGENCE</h1>
        <h1 className="text-9xl text-red-500">SASS</h1>
        <h1 className="text-6xl text-white">I KNOW EM ALL</h1>
      </div>
      <div className="p-10  rounded-3xl bg-purple-500 text-white">
        <h1 className="text-5xl">
          I JUST LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE
          LOVE LOVE LOVE CODING!!!!!!
        </h1>
      </div>
      <div className="p-10  rounded-3xl bg-red-500 flex flex-col gap-4 text-black">
        <div className="h-32 w-32">
          <BugSvg />
        </div>
        <h1 className="text-6xl text-black">BUG FREE CLEAN CODE</h1>
      </div>
      <div className="p-10 flex flex-col gap-4 rounded-3xl bg-red-500 text-black">
        <div className="w-32 h-32">
          <ReuseSvg />
        </div>
        <h1 className="text-6xl text-black">EFFICIENT & REUSABLE</h1>
      </div>
      <div className="p-10 flex flex-col gap-4 rounded-3xl bg-red-500 text-black">
        <div className="w-32 h-32">
          <ResponsiveSvg />
        </div>
        <h1 className="text-6xl text-black">ADAPTIVE & RESPONSIVE</h1>
      </div>
      <div className="p-10  bg-green-500 text-black rounded-3xl col-span-2 ">
        <h1 className="text-8xl">{`ON THE RIGHT ARE THE SKILLS I'M KNOWN FOR`}</h1>
      </div>
      <div className="p-5 bg-black text-green-500 flex items-center justify-center rounded-3xl col-span-2  row-span-2">
        <div className="grid grid-cols-3 gap-10">
          {data.skills.data.map((skill, i) => (
            <div key={i} className="">
              <h1 className="text-green-500 text-5xl">{skill}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 bg-black text-pink-500 rounded-3xl flex items-end  row-span-2">
        <h1 className="text-8xl text-pink-500">{`Let's SEE What My  clients has to say.`}</h1>
      </div>
      <div className="p-10 bg-green-500 rounded-3xl   ">
        <h1 className="text-6xl">And you are still not Impressed?</h1>
        <h1 className="text-8xl text-black">WELL,</h1>
      </div>
      <div className="p-5  rounded-3xl bg-pink-500 text-black col-span-2 ">
        <Slider items={data.testimonials} />
      </div>
      <div className="p-10 text-yellow-500 flex flex-col justify-evenly bg-black rounded-3xl  row-span-3 ">
        <h1 className="text-8xl inline-block text-white">
          still not enough for you?
        </h1>
        <h1 className="text-8xl text-blue-700 inline-block">
          see my WORK then.
        </h1>
      </div>
      <div className="p-10 bg-blue-700 text-black flex items-center justify-around rounded-3xl  row-span-2 col-span-3">
        <div className="flex flex-col ">
          {data.projects.data.slice(0, 5).map((project, i) => (
            <div className="" key={i}>
              <h1 className="text-9xl text-black">@{project.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10 bg-white text-black rounded-3xl   ">
        <h1 className="text-6xl">Like What you SEE?</h1>
        <h1 className="text-6xl">then CONTACT ME.</h1>
      </div>
      <div className="p-10 bg-black rounded-3xl  col-span-3">
        <form className="flex flex-col gap-2">
          <input
            className="border-b-4 border-white bg-black focus:outline-none placeholder:text-white w-full py-2"
            placeholder="Name..."
          />
          <input
            className="border-b-4 border-white focus:outline-none bg-black placeholder:text-white w-full py-2"
            placeholder="Email..."
          />
          <textarea
            className="border-b-4 focus:outline-none border-white bg-black placeholder:text-white w-full py-2"
            placeholder="Message..."
          />
          <button className="focus:outline-none">
            <h1 className="text-white text-5xl">SEND MESSAGE</h1>
          </button>
        </form>
      </div>
    </div>
  );
};
