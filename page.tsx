
// Create 2 components  which name  is header.tsx and about.tsx and import it on homepage.
import React from "react"
import Link from "next/link"
import Header from "./header/page"
import About from"./about/page"
export default function Home(){
  return(
    <div>
      
      <h1 className='bg-blue-400 text-black p-4pt '>Home</h1>
      <Link href={"/header"}>Header</Link>
      <br></br>
      <Link href={"/about"}>About</Link>
      
    </div>
  )
};