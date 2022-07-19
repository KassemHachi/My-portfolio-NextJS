
import TwitterLink from "../Components/TwitterLink";
import GithubLink from "../Components/GithubLink";
import FreelancerLink from "../Components/FreelancerLink";
export default function UserCard() {
    return (
        <div className="z-10 absolute top-44 md:right-[42.5%] right-[25%] sm:right-[30%] animate-fade-in-up">

            <div className="border-4 border-green-400/80 rounded-full overflow-clip shadow-xl">


                <img
                    className="h-56 w-56 z-20"
                    src="https://avatars.githubusercontent.com/u/30910460?v=4"
                />
                <span className="animate-ping absolute top-0 inline-flex h-56 w-56  rounded-full bg-green-500 opacity-75 -z-10"></span>
            </div>
            <div className="bg-slate-800 -z-20 absolute right-0 left-[-15px] top-[10rem] text-center text-slate-100 rounded-lg shadow-xl h-72 w-64">
                <h1 className="text-3xl font-bold mt-28  ">Kassem Hachi</h1>
                <p className=" text-sm pb-6 mb-10 border-b-2 border-green-400/80 text-slate-100/70">
                    Programmer, Designer, Animator
                </p>
                <div className="flex justify-center items-center gap-4">
                    <GithubLink href="https://github.com/KassemHachi/" />
                    <TwitterLink href="https://twitter.com/kassemhachi" />
                    <FreelancerLink href="https://www.freelancer.com/u/kassemhachi" />
                </div>
            </div>
        </div>

    )
}
