import Nav from './nav'

export default function Home() {
  return (
    <main >
      <Nav></Nav>
      <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>Hello World</p>
      </div>
      </div>
    </main>
  )
}
