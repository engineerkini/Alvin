import VRCubeWithStyles from "../components/CubeAbout";
import Link from "next/link";
import { Component } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="h-full bg-white pt-[150px]">
      <div className="w-full flex lg:flex-row flex-col justify-between lg:items-start items-center min-h-screen h-full">
        <div className="flex flex-col items-center lg:items-start justify-start lg:px-[100px] gap-2">
          <h2 className="text-black text-3xl md:text-8xl text-center font-medium flex items-center justify-center gap-5">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Me
            </span>
          </h2>
          <div className="shadow rounded-full w-[200px] h-[200px]  my-5 ">
            <img
              className="object-center rounded-full object-cover"
              src="/me.jpeg"
              alt=""
            />
          </div>

          <p className="text-black/60 text-bodyDefault md:text-bodyLager leading-bodyDefault text-center lg:text-start w-full min-w-[280px] md:w-3/4 xl:w-3/4">
            I’m Alvine, a passionate and detail-oriented creative specialist
            with experience in book editing, graphic design, branding, and
            merchandise design. I excel at transforming ideas into polished,
            impactful visual and written content that resonates with audiences.
          </p>
          <p className="text-black/60 text-bodyDefault md:text-bodyLager leading-bodyDefault text-center lg:text-start md:w-2/4 xl:w-3/4 mt-4">
            My mission is to create impactful designs and content that engage
            audiences. I continuously refine my skills and collaborate to
            deliver high-quality creative solutions.{" "}
          </p>
          <button
            type="button"
            className="px-8 py-3 lg:mt-[100px] rounded-md mt-5 font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:opacity-90 transition-all duration-300"
            style={{
              boxShadow: "0 4px 15px rgba(91, 192, 255, 0.3)",
            }}
          >
            <Link href="/#contact">
              <span className="flex items-center justify-center gap-2">
                <Component className="w-[14px] h-[14px]" /> Let's talk
              </span>
            </Link>
          </button>
        </div>
        <VRCubeWithStyles />
      </div>
    </div>
  );
};

export default About;
