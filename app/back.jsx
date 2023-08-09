import Image from "next/image";

export default function(props){
    return (
        <>
        
        <a href={props.to} className='inline-flex transition ease-out duration-150 hover:underline'>
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
        </>
    )
}