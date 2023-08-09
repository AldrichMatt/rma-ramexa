"use client"
import Image from 'next/image'
import Nav from '../nav'

export function Card(props){
  return(
    <>
    <a href={props.to}>
        <div className="flex m-1 flex-col w-50 h-100 shrink transition ease-in-out duration-200 hover:ease-out hover:bg-neutral-300 text-center mb-2 grow-1 lg:mx-4 md:mx-4 sm:mx-2 rounded-lg bg-neutral-200 drop-shadow-lg py-8 px-8">
        <Image
          className='px-auto mx-auto'
          src={props.img}
          width={35}
          height={35}
          alt={props.text}
          ></Image>
        <p className="pt-2 text-base text-neutral-600">
          {props.text}
        </p>
        </div>
          </a>
    </>

  )
}

export default function Home() {
  return (
    <main >
      <Nav></Nav>
      <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl flex flex-col justify-center pt-16 text-sm">
        <div className="flex flex-row -m-2 justify-center flex-wrap xl:px-8 lg:px-8 md:px-16 sm:px-24">
          <Card to="/backoffice/warranty" img="/../public/checkbox.png" text="RMA Master"></Card>
          <Card to="#" img="/../public/gear.png" text="Settings"></Card>
          <Card to="#" img="/../public/gear.png" text="Settings"></Card>
          <Card to="#" img="/../public/gear.png" text="Settings"></Card>
        </div>
        </div>
      </div>
    </main>
  )
}
