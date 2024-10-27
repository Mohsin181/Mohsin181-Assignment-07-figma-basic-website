import react from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

export default function Home () {

  return(

    <main className="bg-[url('/gradientShape.png')]  bg-no-repeat">
     <Navbar/>
     <Hero/>
     
    </main>
    
  )
}