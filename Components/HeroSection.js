
import UserCard from "./UserCard";
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
      <UserCard />

    </div>
  );
}
