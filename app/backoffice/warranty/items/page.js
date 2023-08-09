import Image from "next/image";
import Nav from "../../../nav";

export default function Home(){
    return (
        <main>
            <Nav></Nav>
            <div className="jumbotron h1">
                <p>List Warrant Item</p>
            </div>
            <div className="flex shrink justify-center">
        <table className="text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500 space-4">
            <tr>
              <th scope="col" className="px-2 py-4">#</th>
              <th scope="col" className="px-2 py-4">Form ID</th>
              <th scope="col" className="px-2 py-4">Customer's Name</th>
              <th scope="col" className="px-2 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-2 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-2 py-4">20230809092634</td>
              <td className="whitespace-nowrap px-2 py-4">John Doe</td>
              <td className="whitespace-nowrap px-2 py-4"><Image
              src= '/../public/more-horizontal.png'
              width = {15}
              height = {15}
              alt= 'more'
              ></Image></td>
            </tr>
          </tbody>
        </table>
            </div>
        </main>

    );
}