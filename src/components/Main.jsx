import React from "react";
import Women from '../assets/photos/woman3.png';
import Women1 from '../assets/photos/woman2.png';
import Women2 from '../assets/photos/woman5.png';
import Women3 from '../assets/photos/woman1.png';
import Women4 from '../assets/photos/woman4.png';
import hello from '../assets/photos/hello.jpg';
import Women5 from '../assets/photos/Rectangle 295.jpg';
import Women6 from '../assets/photos/Rectangle 348.jpg';
import Women7 from '../assets/photos/Rectangle 349.png';
import WomenA from '../assets/photos/fashion-4514910_1920 1.jpg';
import WomenB from '../assets/photos/woman-5823403_1920 1.jpg';
import WomenC from '../assets/photos/woman-5534389_1280 1.jpg';
import WomenD from '../assets/photos/girl-5728568_1920 1.jpg';
import {ReactComponent as Star } from "../assets/icons/star.svg";
import PhotoA from '../assets/photos/Rectangle 241.jpg';
import PhotoB from '../assets/photos/Rectangle 242.jpg';
import PhotoC from '../assets/photos/Rectangle 243.jpg';
import PhotoD from '../assets/photos/Rectangle 244.jpg';
import PhotoE from '../assets/photos/Rectangle 245.jpg';
import PhotoF from '../assets/photos/Rectangle 252 .jpg';
import PhotoG from '../assets/photos/Rectangle 253 .jpg';
import PhotoH from '../assets/photos/Rectangle 254.jpg';
import PhotoI from '../assets/photos/Rectangle 255.jpg';
 import {ReactComponent as Line} from "../assets/icons/line.svg";





const Main = () =>{
    return (
        <>
        <div>
        <div class="flex justify-center mt-12  gap-2">
            <Line class="mt-5 "/>
            <h1 class="font-bold text-3xl">Main Categories</h1>
            <Line class="mt-5 "/>
        </div>
        <div class="flex gap-1 ml-10 mr-10 mt-10">
            <div class="relative">
            <img src={Women}alt="women"></img>
            <p class="absolute top-[90%] left-1/2 -translate-x-1/2 text-white" >Outer</p>
            </div>
            <div class="relative"> 
            <img src={Women1}alt="women"></img>
            <p class="absolute top-[90%] left-1/2 -translate-x-1/2 text-white" >Top</p>
            </div>
            <div class="relative"> 
            <img src={Women2}alt="women"></img>
            <p class="absolute top-[90%] left-1/2 -translate-x-1/2 text-white" >Skirt</p>
            </div>
            <div class="relative"> 
            <img src={Women3}alt="women"></img>
            <p class="absolute top-[90%] left-1/2 -translate-x-1/2 text-white" >Pants</p>
            </div>
            <div class="relative"> 
            <img src={Women4}alt="women"></img>
            <p class="absolute top-[90%] left-1/2 -translate-x-1/2 text-white" >Accessories</p>
            </div>
        </div>
        <div class="flex justify-center mt-16 gap-2">
        <Line class="mt-5 "/>
            <h1 class="font-bold text-3xl">Best Selling</h1>
            <Line class="mt-5 "/>
        </div>
        <div class="mt-16">
        <div class="flex justify-between gap-2 ml-1 mt-2 mr-12 ">
        <img  src={hello}alt="women"></img>
        <img  class="h-[50%]"src={Women7}alt="women"></img>
         </div>
         <div class="flex justify-end -translate-y-[290px] gap-1 mr-12 mt-1">
         <img src={Women5}alt="women"></img>
        <img src={Women6}alt="women"></img>
         </div>

         <div class=" flex gap-16">
            <div class="flex gap-2 ml-9">
            <h1 class="font-bold text-3xl">Review</h1>
            <Line class="mt-6 "/>
            </div>
        
            <div class="flex gap-3 -translate-y-[130px] mr-16">
                <div>
                <img src={WomenA}alt="women"></img> 
                <div class="flex ml-2 mt-2">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <p class="ml-2 mt-1">95%</p>
                </div>
                </div>
                <div>
                <img src={WomenB}alt="women"></img> 
                <div class="flex ml-2 mt-2">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <p class="ml-2 mt-1">90%</p>
                </div>
                </div>
                <div>
                <img src={WomenC}alt="women"></img> 
                <div class="flex ml-2 mt-2">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <p class="ml-2 mt-1">85%</p>
                </div>
                </div>
                <div>
                <img src={WomenD}alt="women"></img> 
                <div class="flex ml-2 mt-2">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <p class="ml-2 mt-1">80%</p>
                </div>
                </div>
            </div>
         </div>
        </div>
        <div class="bg-gray-300">
        <div class="flex justify-center gap-2">
        <Line class="mt-16 "/>
            <h1 class="font-bold text-3xl mt-10">Instagram</h1>
            <Line class="mt-16"/>
        </div>
        <div class="flex justify-center gap-2 mt-10">
        <img src={PhotoA}alt="photo"></img> 
        <img src={PhotoB}alt="photo"></img>
        <img src={PhotoC}alt="photo"></img>
        <img src={PhotoD}alt="photo"></img>
        <img src={PhotoE}alt="photo"></img>
        </div>
        <div class="flex justify-center gap-2 mt-2">
        <img src={PhotoF}alt="photo"></img>
        <img src={PhotoG}alt="photo"></img>
        <img src={PhotoH}alt="photo"></img>
        <img src={PhotoI}alt="photo"></img>
        <img src={PhotoG}alt="photo"></img>
        </div>
         </div>

</div>
        </>
        )
};
export default Main;