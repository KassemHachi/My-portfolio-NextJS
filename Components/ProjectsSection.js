import ModalImage from "react-modal-image";
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";
import React from "react";
import ModalView from "./ModalView";

export default function ProjectsSection() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <section id="projects" className="bg-gray-700 text-slate-100 md:min-h-screen w-full   py-10 px-20 ">
      <div className="flex flex-col text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">My Projects </h1>
        <div className="border-green-400/80 border-t-4 w-40  self-center"></div>
        <div className="border-green-400/80 border-t-[3.5px] w-20 mt-3  self-center"></div>
      </div>
      <div className="flex flex-wrap  justify-center  ">




        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3 overflow-clip cursor-pointer ">
          <ModalView
            Title="Wifi Djelfa"
            Small="https://scontent.floo1-1.fna.fbcdn.net/v/t1.15752-9/285612037_437229055075313_2048625068671358490_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGrzTD-AdcFo2Sk19knG-4DfJfUQqjbLm98l9RCqNsub4ACOwDkMO9svScBW20Y7NliCB0gjBR02UYvlUokO_uc&_nc_ohc=XA9YvoR2zp4AX-L_miv&_nc_oc=AQmN87EVVnk42ASQjAbqzzHvmdUsnlTg2Xv7L0GgbsRu6W1U_rYXGHmogf8QBdsEQWw&_nc_ht=scontent.floo1-1.fna&oh=03_AVL83ij3PP0wlBjn8N-6JxVX-2adwwwCoBloOLtgKq5yVQ&oe=62DC7C29"
            Large="https://i.suar.me/eWeYK/l"
          />
        </div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  overflow-clip cursor-pointer ">
          <ModalView
            Title="Terrain Metrcis Hub"
            Small="https://scontent.floo1-2.fna.fbcdn.net/v/t1.15752-9/288854732_709107717050633_8949983914437839660_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGd9YnNg-zm_VNlf9LEetnXyCZk4yI_j7rIJmTjIj-PukZnTYyUl2yvoik7_Y6YR_0Ovt4MoHc9mqHZnB6KnWCL&_nc_ohc=m8VkrVwMN8cAX9cHw2M&_nc_ht=scontent.floo1-2.fna&oh=03_AVJsXAbe0-l3342inkmr0ROab4fjaRiJBjZZn2VM0108kw&oe=62DF9542"
            Large="https://i.suar.me/pyW22/l"
          />
        </div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3   overflow-clip cursor-pointer">
          <ModalView
            Title="App Promo Page"
            Small="https://scontent.floo1-2.fna.fbcdn.net/v/t1.15752-9/281869547_408963854596991_6671964074615137119_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF_XyIj0HaI6Jh25Fmq1GR6Jl8iJH8s9Z0mXyIkfyz1nW4trrLde1-yvrqsDujzDY1nwvfq8QUcYY83dQIe-m9T&_nc_ohc=Kf4hZE0qHcQAX_hjPgX&_nc_ht=scontent.floo1-2.fna&oh=03_AVIazG0OiOjDaIcNHkyPAiiCLvXZOEoSWSzN9VajQZTRDA&oe=62DCF537"
            Large="https://i.suar.me/oK4w1/l"
          />
        </div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
        <div className="rounded-xl h-64 w-full md:w-64 bg-gray-800 mx-3 my-3  "></div>
      </div>
    </section>
  );
}
