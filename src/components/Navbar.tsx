import React from 'react'

const Navbar = () => {
  return (
<div>

<div className=" absolute top-0 left-0 w-full bg-cover bg-center flex flex-col items-center justify-center">
<ul  className="flex justify-center gap-10 lg:gap-16 font-bold text-3xl p-4">
        <li className="hover:scale-105 hover:text-amber-400 transition duration-300 ease-in cursor-pointer menulink"> <a href="#About"></a>Products</li>
        <li className="hover:scale-105 hover:text-amber-400 transition duration-300 ease-in cursor-pointer menulink"> <a href="#About"></a>Devolper</li>
        <li className="hover:scale-105 hover:text-amber-400 transition duration-300 ease-in cursor-pointer menulink"><a href="#Hero"></a>Company </li>
        <li className="hover:scale-105 hover:text-amber-400 transition duration-300 ease-in cursor-pointer menulink"> <a href="#Projects"></a>Pricing</li>
        <li className="hover:scale-105 hover:text-amber-400 transition duration-300 ease-in cursor-pointer menulink"><a href="#Skills"></a>Sign In</li>

      </ul>
    
      </div>

</div>
  )
}
export default Navbar

