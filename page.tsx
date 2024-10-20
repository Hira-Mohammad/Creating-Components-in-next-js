import React from "react"
import Link from "next/link"
export default function Header(){
    return(
      <div>
        <h1 className='bg-blue-400 text-black p-4pt '>This is my Header</h1>
        <Link href={"/home"}>Home</Link>
      <br></br>
      <Link href={"/about"}>About</Link>
      </div>
    )
  };