import { Link } from 'react-router-dom'

export default function Reference(){
  return(
    <div className="min-h-screen bg-slate-600">
      <nav className="justify-between bg-white px-5 py-3 flex items-center text-center mb-10">
        <Link className="text-amber-500 font-medium text-2xl hover:text-amber-600" to= '/'>Api-Loc</Link>
        <ul className="flex gap-5 text-medium">
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><Link to="/docs">Docs</Link></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'>References</li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><Link to= '/guide'>Guide</Link></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><a href="">Contact Us</a></li>
        </ul>
        <button className="bg-amber-500 text-white p-2.5 rounded-xl text-sm font-serif">Get Started</button>
      </nav>

      <div className="container mx-auto px-4 py-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-amber-500 mb-3">Getting Started</h2>
            <p className="text-gray-700">Learn the basics of our API platform, including authentication, endpoints, and best practices.</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-amber-500 mb-3">API Reference</h2>
            <p className="text-gray-700">Detailed reference for all available API endpoints, parameters, and response formats.</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-amber-500 mb-3">Integration Guide</h2>
            <p className="text-gray-700">Step-by-step guides for integrating Api-Loc into your applications and projects.</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-amber-500 mb-3">Best Practices</h2>
            <p className="text-gray-700">Recommended approaches for building secure, fast, and scalable applications with our APIs.</p>
          </div>
        </div>
      </div>

    </div>
  )
}