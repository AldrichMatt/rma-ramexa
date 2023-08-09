"use client"
import Image from 'next/image'
import Nav from '../nav'

export function Label(props){
  return(
    <>
    <label
      className="px-4 py-2">
        {props.label}
    </label>
    </>

  )
}

export function InputGroup(props){
  return (
    <>
    <div class={props.className}>
    <input
            type="text"
            className="flex justify-center rounded-l-md pl-2 focus:outline-none"
            placeholder="L152XXXX-XXXX"/>
          <button
            className="z-[2] inline-block rounded-r bg-[#ff3333] px-6 pb-2 pt-2.5 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            type="button">
             <Image
          src = "/../public/search.png"
          width={25}
          height={25}
          alt='Search'
          ></Image>
          
          </button>
          </div>
    </>
  )
}

export default function Home() {
  return (
    <main >
      <Nav></Nav>
      <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="z-10 w-full max-w-5xl flex flex-col justify-center pt-24 text-sm">
        <div className='flex justify-center'>Search your serviced item(s) by S/N</div>
          <InputGroup className="flex justify-center my-4 px-4 flex flex-wrap"></InputGroup>
        <div className='flex justify-center'>Or</div>
        <div className='flex justify-center'>Scan your service QR from your receipt</div>
        <div className='flex justify-center'>
          <button
           className="z-[2] inline-block rounded bg-[#ff3333] px-4 m-5 pb-2 pt-2.5 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
           type="button">
             <Image
          src = "/../public/camera.png"
          width={25}
          height={25}
          alt='Camera'
          ></Image>
          </button>
        </div>
        <div className='flex justify-center'>Read our <a className='underline px-1' href='#'>Terms & Policies</a> for warranty item(s)</div>
      </div>
      </div>
    </main>
  )
}
