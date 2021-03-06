import Head from "next/head";
import Image from "next/image";
import TopBar from "../Components/TopBar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import ProjectsSection from "../Components/ProjectsSection";
import GithubLink from "../Components/GithubLink";
import TwitterLink from "../Components/TwitterLink";
import FreelancerLink from "../Components/FreelancerLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kassem Hachi</title>
      </Head>
      <div >
        <TopBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <footer id="contact" className=" bg-gray-800 text-white text-center  py-5 px-10">
          <h1 className="text-3xl font-bold ">Kassem Hachi</h1>
            <p className=" text-sm  text-slate-100/70">
              Programmer, Designer, Animator
            </p>
        
          <div className="flex justify-center items-center gap-4 py-5">
          <GithubLink href="https://github.com/KassemHachi/"/>
            <TwitterLink href="https://twitter.com/kassemhachi" />
            <FreelancerLink  href="https://www.freelancer.com/u/kassemhachi" />
            
          </div>
          <div className="flex justify-center items-center gap-4 ">
          <hr className="w-1/4 h-1"></hr>
          </div>
          <p>
            All rights reserved &copy; {new Date().getFullYear()}
          </p>
         
      
        </footer>
      </div>
      
    </>
  );
}
