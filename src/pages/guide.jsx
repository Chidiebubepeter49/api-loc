import { Link } from 'react-router-dom'

export default function Guide(){
  return(
    <div className="min-h-screen bg-slate-600">
      <nav className="justify-between bg-white px-5 py-3 flex items-center text-center mb-10">
        <Link className="text-amber-500 font-medium text-2xl hover:text-amber-600" to= '/'>Api-Loc</Link>
        <ul className="flex gap-5 text-medium">
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><Link to="/docs">Docs</Link></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><Link to="/references">References</Link></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'>Guide</li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><a href="">Contact Us</a></li>
        </ul>
        <button className="bg-amber-500 text-white p-2.5 rounded-xl text-sm font-serif">Get Started</button>
      </nav>
    </div>
  )
}