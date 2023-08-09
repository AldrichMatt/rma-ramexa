"use client"
import Image from 'next/image'
import Back from '../../back'
import Nav from '../../nav'
import { Card } from '../page';



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
      <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl flex flex-col justify-center pt-16 text-sm ">
        <div className='px-8 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8'>
          <Back to="../backoffice"></Back>
        <p className="text-2xl font-semibold">RMA Master</p>
        </div>
        <div className="flex flex-row -m-2 mt-4 justify-center flex-wrap xl:px-8 lg:px-8 md:px-2 sm:px-24">
        <Card to="./warranty/form/" img="/../public/form-new.png" text="Create new RMA Form"></Card>
        <Card to="./warranty/items/" img="/../public/form-time.png" text="Items warrant & duration"></Card>
        <Card to="#" img="/../public/form-gear.png" text="Warranty Master"></Card>
        </div>
        </div>
      </div>
    </main>
  )
}
