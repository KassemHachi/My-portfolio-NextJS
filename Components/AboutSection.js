export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-800 text-slate-100 md:h-screen w-full py-10 px-20 ">
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
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <h3 className="text-2xl font-bold">My Peronal Details</h3>
          <div className="border-green-400/80 border-t-2 w-[13.3rem] mt-1  self-center"></div>
          <ul className="list-none mt-4">
            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">
                Name:
              </span>
              Hachi Kassem
            </li>
            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">Age:</span>
              22
            </li>
            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">
                Email:
              </span>
              kassem.hachi@outlook.com
            </li>
            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">
                Phone Number:
              </span>
              +213 794 30 39 05
            </li>
            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">
                Address:
              </span>
              Djelfa, Algeria
            </li>
          </ul>
        </div>
        <div className="col-span-1 my-4 ">
          <h3 className="text-2xl font-bold md:my-0">My Skills </h3>
          <div className="border-green-400/80 border-t-2 w-[6.3rem] mt-1  self-center"></div>
          <ul className="list-none mt-4">
            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">
                Front-End:
              </span>
              HTML, CSS, JavaScript, React, NextJS,  TailwindCSS
            </li>
            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">
                Design:
              </span>
              Photoshop, Illustrator, XD, Figma
            </li>
            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">
                Motion Graphics:
              </span>
              After Effects, Premiere Pro, Adobe
              Illustrator
            </li>

            <li className="text-slate-100/70 my-2">
              <span className="font-semibold text-green-400/80 mr-4">
                Other:
              </span>
              Git, Github, Firebase
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
