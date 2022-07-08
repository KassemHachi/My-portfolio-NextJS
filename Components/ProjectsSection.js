import ModalImage from "react-modal-image";



export default function ProjectsSection() {
 
  return (
    <section id="projects" className="bg-gray-700 text-slate-100 md:min-h-screen w-full   py-10 px-20 ">
      <div className="flex flex-col text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">My Projects </h1>
        <div className="border-green-400/80 border-t-4 w-40  self-center"></div>
        <div className="border-green-400/80 border-t-[3.5px] w-20 mt-3  self-center"></div>
      </div>
      <div className="flex flex-wrap  justify-center  ">
      <ModalImage
      hideDownload = {true} 
  small={'https://scontent.floo1-1.fna.fbcdn.net/v/t1.15752-9/285612037_437229055075313_2048625068671358490_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGrzTD-AdcFo2Sk19knG-4DfJfUQqjbLm98l9RCqNsub4ACOwDkMO9svScBW20Y7NliCB0gjBR02UYvlUokO_uc&_nc_ohc=sMg6jUdCvrkAX8YMfoB&_nc_oc=AQnyB_PDR9UPDBptKkMYEQbTyGwdaL3--WSLDbeCFqIcwUTKfpLPETth3S0CRV4qWuM&_nc_ht=scontent.floo1-1.fna&oh=03_AVKrhVkTZ9g8_BKZq3N8FfvpXhP_Zvi68Y69XkUem3ibEA&oe=62C8B5A9'}
  large={'https://i.suar.me/eWeYK/l'}

  alt="WifiDjelfa.net"
  className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "
/>



        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  ">
        
       </div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
      </div>
    </section>
  );
}
