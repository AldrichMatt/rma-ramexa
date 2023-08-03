"use client"
import Image from 'next/image'
import Nav from '../../nav'


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
        className="peer block min-h-[auto] w-full rounded border-0 focus:outline-none px-4 py-2 mb-2"
        placeholder={props.pl} /></>)
}
export default function Home() {
  return (
    <main >
      <Nav></Nav>
      <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="z-10 w-full max-w-5xl flex flex-col justify-center pt-24 text-sm">
        <a href="/backoffice" className='inline-flex transition ease-out duration-150 hover:underline'>
          <Image
          className='mr-1'
          src="/../public/arrow-left.png"
          height={13}
          width={18}
          ></Image>
          <p>
          Back
          </p>
        </a>
        <p className="text-2xl font-semibold">RMA Request Form</p>
        <GetDate></GetDate>
        <Input label="Customer's Name" pl="John Doe" type="text"></Input>
        <Input label="Phone Number" pl="081xxxxxxxxx" type="number"></Input>
        <Input label="Sales Name" pl="John Doe" type="text"></Input>
        </div>
      </div>
    </main>
  )
}
