import Image from 'next/image'

export default function(){
    return (
<nav
  className="relative flex w-full flex-wrap items-center justify-between bg-[#ff3333] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div>
      <a
        className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="#">
          <Image
          src = "/../public/RMX.png"
          width={180}
          height={100}
          alt='RAMEXA Logo'
          ></Image>
      </a>
    </div>
    <div>
      <a
        className="block mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0 lg:hidden"
        href="#">
          <span class="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-7 w-7">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
      </a>
    </div>
    <div
      className="!visible hidden flex justify-end items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-te-collapse-item>
      <ul
        className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
        data-te-navbar-nav-ref>
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="#"
            data-te-nav-link-ref
            >Dashboard</a
          >
        </li>
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            data-te-nav-link-ref
            >Team</a
          >
        </li>
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            data-te-nav-link-ref
            >Projects</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
)}