import UserInfo from "./UserInfo";
export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-800 text-slate-100 lg:h-[150vh] xl:h-screen w-full py-10 px-20 ">
      <div className="flex  justify-center  text-center ">
        <div className="flex flex-col  ">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="border-green-400/80 border-t-4 w-40  self-center"></div>
          <div className="border-green-400/80 border-t-[3.5px] w-20 mt-3  self-center"></div>
          <p className="text-medium  text-slate-100/70 my-20">
            Hello 👋, I am{" "}
            <span className="font-semibold text-green-400/80">
              Hachi Kassem
            </span>
            . Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <br />
      <UserInfo />
    </section>
  );
}
