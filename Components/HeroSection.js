import {
  SiTwitter as TwitterIcon,
  SiGithub as GithubIcon,
  SiFreelancer as FreelancerIcon,
} from "react-icons/si";
export default function HeroSection() {
  return (
    <div className=" content-center mx-auto justify-center top-full relative">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg"
        className="-z-10 overflow-hidden h-screen w-full object-cover"
        alt="Hero Section"
      />
      <div
        className="z-0  h-screen w-full absolute top-0 bg-gradient-to-t from-slate-800 to-slate-800/80"

      ></div>

      <div className="z-10 absolute top-44 md:right-[42.5%] right-[25%] sm:right-[30%] animate-fade-in-up">
      
        <div className="border-4 border-green-400/80 rounded-full overflow-clip shadow-xl">
        

          <img
            className="h-56 w-56 z-20"
            src="https://scontent.floo1-2.fna.fbcdn.net/v/t1.6435-9/71118931_739274396537626_1576056919490035712_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFKE2VpHpsDW8rPs06-O_Z4Q1KdUElyN5ZDUp1QSXI3ll81UQWGPI8XnAWQJYXhW5hSwYXwKDpwwHN37b3rUtoa&_nc_ohc=WSwYQKriVQgAX_cMR-q&tn=FlL6pyq3-fuQ6F9w&_nc_ht=scontent.floo1-2.fna&oh=00_AT_afpO1P-Ck4IUGdsMeJaUc5-MtnRcvEVdrMZVoVanAZg&oe=62B989FF"
          />
          <span className="animate-ping absolute top-0 inline-flex h-56 w-56  rounded-full bg-green-500 opacity-75 -z-10"></span>
        </div>
        <div className="bg-slate-800 -z-20 absolute right-0 left-[-15px] top-[10rem] text-center text-slate-100 rounded-lg shadow-xl h-72 w-64">
          <h1 className="text-3xl font-bold mt-28  ">Kassem Hachi</h1>
          <p className=" text-sm pb-6 mb-10 border-b-2 border-green-400/80 text-slate-100/70">
            Programmer, Designer, Animator
          </p>
          <div className="flex justify-center items-center gap-4">
            <GithubIcon className="text-3xl" />
            <TwitterIcon className="text-3xl" />
            <FreelancerIcon className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}