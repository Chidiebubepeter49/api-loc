import { Link } from 'react-router-dom'
import Docs from '../pages/docs'


export default function Apilisting() {
  return(
    <section className = 'flex items-center gap-7 justify-center mt-10 mb-10'>
      <div className='border border-slate-400 w-72 h-72 rounded-xl items-center justify-center grid text-center '>
        <h2 className="text-white font-serif text-medium mt-3">Weather API</h2>
        <p className="m-3.5 text-white font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error culpa porro enim possimus ratione eligendi non ipsa beatae repellendus est. lorem est ti piut </p>
        <button className="bg-amber-500 text-white rounded-xl text-sm p-3 w-32 text-center ml-20 mb-3 font-serif">
          <Link to="/docs">Learn More {'->'}</Link>
        </button>
      </div>
      <div className='border border-slate-400 w-72 h-72 rounded-xl items-center justify-center grid text-center '>
        <h2 className="text-white font-serif text-medium mt-3">Chatbox API</h2>
        <p className="m-3.5 text-white font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error culpa porro enim possimus ratione eligendi non ipsa beatae repellendus est. lorem est ti piut </p>
        <button className="bg-amber-500 text-white rounded-xl text-sm p-3 w-32 text-center ml-20 mb-3 font-serif">
          <Link to="/docs">Learn More {'->'}</Link>
        </button>
      </div>
      <div className='border border-slate-400 w-72 h-72 rounded-xl items-center justify-center grid text-center '>
        <h2 className="text-white font-serif text-medium mt-3">Movies API</h2>
        <p className="m-3.5 text-white font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error culpa porro enim possimus ratione eligendi non ipsa beatae repellendus est. lorem est ti piut </p>
        <button className="bg-amber-500 text-white rounded-xl text-sm p-3 w-32 text-center ml-20 mb-3 font-serif">
          <Link to="/docs">Learn More {'->'}</Link>
        </button>
      </div>
      <div className='border border-slate-400 w-72 h-72 rounded-xl items-center justify-center grid text-center '>
        <h2 className="text-white font-serif text-medium mt-3">Location API</h2>
        <p className="m-3.5 text-white font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error culpa porro enim possimus ratione eligendi non ipsa beatae repellendus est. lorem est ti piut </p>
        <button className="bg-amber-500 text-white rounded-xl text-sm p-3 w-32 text-center ml-20 mb-3 font-serif">
          <Link to="/docs">Learn More {'->'}</Link>
        </button>
      </div>
    </section>
  )
}