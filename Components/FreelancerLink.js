import React from 'react'
import {
    SiFreelancer as FreelancerIcon,

} from "react-icons/si";

export default function FreelancerLink(props) {
  return (
    <div>
      <a  href={props.href} target="_blank"><FreelancerIcon className="text-3xl" /></a>
    </div>
  )
}
