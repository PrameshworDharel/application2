import React from "react";
import {ReactComponent as ShopIcon } from "../assets/icons/shop.svg";
import {ReactComponent as Search } from "../assets/icons/search.svg";
import {ReactComponent as Man } from "../assets/icons/man.svg";
import Girl from '../assets/photos/girl1.png';
import { Link } from "react-router-dom";


const Navbar = () =>{
return (
  <>
   <div >
<nav>
  <div class="flex mt-7 justify-between ">
  <ul class="flex gap-7 ml-10">

      <li> <Link to="/" >Outer</Link>  </li>
      <li> <Link to="/" >Skirt</Link>  </li>
      <li> <Link to="/" >Pants</Link>  </li>
      <li> <Link to="/" >Outer</Link>  </li>
      <li> <Link to="/" >Accessories</Link>  </li>
      </ul>
      <div>
        <h1 class=" text-2xl font-bold ">LOGO</h1>
      </div>
 <div class="flex justify-end mr-20 gap-5">
  <div className="relative">
<Search class="absolute right-2 top-1"/>
  ​<input class=" border border-black rounded-2xl" type="text" placeholder=" Search.." name="search" ></input>
      </div>
      <ShopIcon class="w-6 h-6 shrink-0"/>
      <div class="flex border border-black bg-slate-400 w-[100px] rounded-2xl items-center gap-2">
        <Man class="w-4 h-4 ml-2"/>
      <h4 class="">Signin</h4>
      </div>
  </div>
  </div>
    </nav>
   {/*section */}
    <div class="mt-7 ">
    <img class="w-[100%]" src={Girl}alt="school"></img>
    </div>
    </div>
    </>
)
};
export default Navbar;
