import React from 'react'
import {
    SiTwitter as TwitterIcon,

} from "react-icons/si";

export default function TwitterLink(props) {
  return (
    <div>
      <a  href={props.href} target="_blank"><TwitterIcon className="text-3xl" /></a>
    </div>
  )
}
