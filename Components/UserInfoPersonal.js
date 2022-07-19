import React from 'react'

export default function UserInfoPersonal() {
    return (
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
    )
}
