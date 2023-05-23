import React from "react";
import {ReactComponent as Facebook} from "../assets/icons/facebook.svg";
import {ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import {ReactComponent as Youtube } from "../assets/icons/youtube.svg";
import {ReactComponent as Pinterest } from "../assets/icons/pinterest.svg";
const Footer = () =>{
    return (
        <>
<div class="bg-cyan-950 mt-20 text-white">
    <div class="flex justify-center gap-36">
        <div class="mt-16 gap-2">

        <h1 class="font-bold">Customer Center</h1>
       
        <div class="mt-9">
        <h3>070-2707-1234</h3>
        <h3>Weekdays 09:30 - 18:00</h3>
          <h3>Weekends 12:00 - 13:00</h3>
         <h3>Holidays: Sat, Sun, National holidays</h3>
         </div>
        </div>
        <div class="mt-16">
        <h1 class="font-bold">Shippment Info</h1>
        <div class="mt-9 mb-12">
        <h3>Track Shipping Location</h3>
       <h3> Refund/exchange address</h3> 
       <h3> Incheon Gaeyanggu Gesangdong</h3> 
<h3>GeyangBG #1117</h3>
        <h3>(Please make sure to use </h3>
<h3>Post Office Parcel service)</h3>
         </div>
        </div>

        <div class="mt-16">
        <h1 class="font-bold">Company</h1>
        <div class="mt-9 mb-12">
        <h3> Company</h3>
       <h3>Notice/Event </h3> 
         </div>
        </div>
        <div class="mt-16">
        <h1 class="font-bold">Social media</h1>
        <div class=" flex  h-25 w-20 gap-2 mt-6">
        <Facebook/>
        <Youtube/>
        <Instagram/>
        <Pinterest/>
         </div>
        </div>
    </div>   
</div>
<hr></hr>
<div class="bg-cyan-950 ">
    <div class=" grid  text-white">
        <div class="grid justify-items-center mt-9 mb-6">
    <p><small>CEO : Honggildong │ Company Name : Needesign │ Tel : 070-123-1234 │ fax : 02-123-4567 │ E-mail : email@email.com │ address : S.Korea Seoul Mapogu Maporo 12 JayBG #201</small></p>
 <p><small>Business License Number : 123-45-78910 │ Technical Manager : Honggildong</small></p>
 <p><small>ⓒ 2020 JDESIGN All rights reserved. │ Privacy Policy │ Terms of Service</small></p>
   </div>
   </div>
</div>
         
        </>
        )
    };
    export default Footer;