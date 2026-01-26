import React from 'react'
import GridLayout from './components/gridlayout'

function App() {
  return (
    <div className="h-[100%] bg-slate-800">
      <nav className="justify-between bg-black px-5 py-3 flex items-center text-center mb-10">
        <h1 className="text-amber-500 font-medium text-2xl font-serif">Api-Loc</h1>
        <ul className="flex gap-5 font-serif text-medium">
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><a href="">Docs</a></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><a href="">Refernces</a></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><a href="">Guide</a></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><a href="">Contact Us</a></li>
        </ul>
        <button className="bg-amber-500 text-white p-2.5  rounded-xl text-sm font-serif">Get Started</button>
      </nav>
      <div className="border border-amber-500 mt-15 mx-auto flex items-center justify-center gap-2 w-56 p-2 rounded-xl font-serif">
        <img
          src="/assets/react.svg"
          alt="React logo"
          className="w-3 h-3"
          />
        <p className="text-sm font-medium text-white">Secure and Scalable Api's</p>
      </div>
      <div className="text-center mt-3">
        <p className="text-gray-200 text-3xl font-monospace font-medium grid">Powerful Api's, Scalable <span className="text-3xl text-amber-500">Infrastructure, Easy Integration</span></p>
        <p className="grid mt-2 font-serif text-sm text-gray-200">Access scalable,secure and ready-to-integrate APIs that accelerate your development <span>process, reduce overhead and enable faster time to market</span> </p>
        <button className="bg-amber-500 text-white p-2.5 rounded-xl text-sm font-serif mt-5">Try Api-Loc</button>
      </div>

      <div className='mt-10 h-64 rounded-xl m-3 flex items-center'>
        <div className='border border-gray-300 flex w-80 h-48 rounded-xl mt-5 mx-auto p-3 gap-5'>
          <div className='bg-amber-500 rounded-full w-64 h-12 mt-5'>
            <img src="/assets/api.jpg" alt="" />
          </div>
          <div className='grid'>
            <h3 className='text-black font-serif'>Integration Guide</h3>
            <p className='text-black font-serif text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo fugiat, in debitis odio incidunt sit cumque. Reiciendis ab ea placeat consequuntur? Iure at beatae fugit quo sint. Harum, magnam!</p>
          </div>
        </div>

        <div className='border border-gray-300 flex w-80 h-48 rounded-xl mt-5 mx-auto p-3 gap-5'>
          <div className='bg-amber-500 rounded-full w-64 h-12 mt-5'>
            <img src="/assets/api.jpg" alt="" />
          </div>
          <div className='grid'>
            <h3 className='text-black font-serif'>API Interface</h3>
            <p className='text-black font-serif text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo fugiat, in debitis odio incidunt sit cumque. Reiciendis ab ea placeat consequuntur? Iure at beatae fugit quo sint. Harum, magnam!</p>
          </div>
        </div>

        <div className='border border-gray-300 w-80 h-48 rounded-xl mt-5 mx-auto p-3 gap-5'>
          <div className='flex justify-between gap-10'>
            <p className='text-black font-serif mt-3 font-medium'>Total API Requests</p>
            <div className='bg-amber-500 rounded-full w-12 h-12 '>
              <img src="/assets/api.jpg" alt="" />
            </div>
          </div>
          <div className='grid gap-5'>
            <p className='mt-4 text-2xl font-serif'>15,647</p>
            <p className='font-serif text-medium'>Monitoring incoming API traffic with accuracy</p>
          </div>
        </div>
      </div>
      <div className='text-center mt-20'>
          <div className="border border-amber-500  mx-auto flex items-center justify-center gap-2 w-44 p-2 rounded-xl font-serif">
            <img
              src="/assets/react.svg"
              alt="React logo"
              className="w-3 h-3"
              />
            <p className="text-sm font-medium">API Introduction</p>
          </div>
        <p className='grid text-3xl font-serif mt-5'>Start Building Powerful, <span>Reliable API Infrasturtuce</span></p>
        <p className='grid text-sm mt-3 mb-5'> Learn the basics of our API platform - authenction,endpoint and <span>best practices to build fast, secure and scalable applications from day one</span></p>
        <GridLayout/>
      </div>






    </div>
  )
}

export default App
