"use client"
import Image from 'next/image'
import Nav from '../nav'
export default function Home() {
  return (
    <main >
      <Nav></Nav>
      <div className="flex min-h-screen flex-col items-center justify-between px-lg-24 px-md-16 px-sm-8">
      <div className="z-10 w-full max-w-5xl flex flex-col justify-center pt-24 text-sm">
        <div className="column-2 lg:columns-6 md:columns-4 sm:columns-2">
          <a href="/backoffice/warranty">
        <div className="block transition ease-in-out duration-200 hover:ease-out hover:bg-neutral-300 text-center mb-2 grow-0 mx-8 lg:mx-4 rounded-lg bg-neutral-200 drop-shadow-lg py-8">
        <Image
          className='px-auto mx-auto'
          src="/../public/checkbox.png"
          width={25}
          height={25}
          ></Image>
        <p className="pt-2 text-base text-neutral-600">
          RMA
        </p>
        </div>
          </a>
        <a href="#">
      <div className="block transition ease-in-out duration-200 hover:ease-out hover:bg-neutral-300 text-center mb-2 grow-0 mx-8 lg:mx-4  rounded-lg bg-neutral-200 drop-shadow-lg py-8">
        <Image
          className='px-auto mx-auto'
          src="/../public/gear.png"
          width={25}
          height={25}
          ></Image>
        <p className="pt-2 text-base text-neutral-600">
          Settings
        </p>
        </div>
        </a>
        <a href="#">
      <div className="block transition ease-in-out duration-200 hover:ease-out hover:bg-neutral-300 text-center mb-2 grow-0 mx-8 lg:mx-4  rounded-lg bg-neutral-200 drop-shadow-lg py-8">
        <Image
          className='px-auto mx-auto'
          src="/../public/gear.png"
          width={25}
          height={25}
          ></Image>
        <p className="pt-2 text-base text-neutral-600">
          Settings
        </p>
        </div>
        </a>
        <a href="#">
      <div className="block transition ease-in-out duration-200 hover:ease-out hover:bg-neutral-300 text-center mb-2 grow-0 mx-8 lg:mx-4  rounded-lg bg-neutral-200 drop-shadow-lg py-8">
          <Image
            className='px-auto mx-auto'
          src="/../public/gear.png"
          width={25}
          height={25}
          ></Image>
        <p className="pt-2 text-base text-neutral-600">
          Settings
        </p>
        </div>
        </a>
        </div>
        </div>
      </div>
    </main>
  )
}
