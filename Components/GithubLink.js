import React from 'react'
import {

  SiGithub as GithubIcon,

} from "react-icons/si";

export default function GithubLink(props) {
  return (
    <div>
      <a  href={props.href} target="_blank"><GithubIcon className="text-3xl" /></a>
    </div>
  )
}
