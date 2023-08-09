"use client"
import Image from 'next/image'
import Back from '../../../back'
import Nav from '../../../nav'
import { InputGroup, Label } from '@/app/warranty/page';


export function GetDate(){
      const date = new Date();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var year = date.getFullYear();
      var month = parseInt(date.getMonth()) + 1;
      var d = days[date.getDay()];
      var day = date.getDate();
      var hour = date.getHours(); 
      var minute = date.getMinutes(); 
      var second = date.getSeconds(); 
      
      if(month < 10){
          month = 0 + month.toString();
      }
      if(day < 10){
          day = 0 + day.toString();
      }
      if(hour < 10){
          hour = 0 + hour.toString();
      }

      if(minute < 10){
          minute = 0 + minute.toString();
      }
  
      if(second < 10){
          second = 0 + second.toString();
      }

      return (
        <>
        <p>{d + ", " + day + "-" + month + "-" + year + " " + hour + ":" + minute + ":" +second }</p>
        </>
      );
}

export function Input(props){
  return(
  <><label
      className="px-4 py-2">
        {props.label}
    </label><input
        type={props.type}
        className="peer block min-h-[auto] w-full rounded border-0 focus:outline-none px-4 py-2 my-2 mb-2"
        placeholder={props.pl} /></>)
}
export default function Home() {
  return (
    <main >
      <Nav></Nav>
      <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="z-10 w-full max-w-5xl flex flex-col justify-center pt-16 text-sm">
        <Back to="../warranty"></Back>
        <p className="text-2xl font-semibold">RMA Request Form</p>
        <GetDate></GetDate>
<div className="m-4 p-4 drop-shadow-md">
        <Input label="Customer's Name" pl="John Doe" type="text"></Input>
        <Input label="Phone Number" pl="081xxxxxxxxx" type="number"></Input>
        <Input label="Sales Name" pl="John Doe" type="text"></Input>
        <Label label="Input item(s) by S/N"></Label>
        <div className='flex my-2'>
        <input
            type="text"
            className="flex w-full justify-center rounded-l-md px-4 focus:outline-none"
            placeholder="L152XXXX-XXXX"/>
          <button
            className="z-[2] inline-block rounded-r bg-[#ff3333] px-6 py-2 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            type="button">
             <Image
          src = "/../public/plus-white.png"
          width={25}
          height={25}
          alt='Search'
          ></Image>
          
          </button>
        </div>
</div>
        
        </div>
      </div>
    </main>
  )
}
