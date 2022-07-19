import React from 'react'

export default function UserInfoSkills() {
    return (
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
    )
}
