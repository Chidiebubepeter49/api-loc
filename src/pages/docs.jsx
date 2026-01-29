import { Link } from 'react-router-dom'
import Footer from '../components/footer'

export default function Docs(){
  return(
    <div className="h-[100%] bg-slate-600 overflow-hidden">
      <nav className="justify-between bg-white px-5 py-3 flex items-center text-center mb-10">
        <Link className="text-amber-500 font-medium text-2xl hover:text-amber-600" to= '/'>Api-Loc</Link>
        <ul className="flex gap-5 text-medium">
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><Link to="/docs">Docs</Link></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><a href="/references">Refernces</a></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><Link to= '/guide'>Guide</Link></li>
          <li className='hover:text-amber-500 hover:fold-bold hover:scale-110'><a href="">Contact Us</a></li>
        </ul>
        <button className="bg-amber-500 text-white p-2.5 rounded-xl text-sm font-serif">Get Started</button>
      </nav>

        <div className='m-5'>
          <h1 className="text-2xl font-semibold text-white mb-4">API Overview</h1>
          <p className="text-gray-200 text-medium mb-8">
            API-LOC is a flexible search service that lets you manage your own content. It’s designed for developers who want to index documents manually, control domain crawling, and fine‑tune search results. With this API, you can build a search engine that follows your own rules and priorities.
          </p>
            <hr />
          <div>
            <h2 className='text-white text-2xl font-bold mb-5 mt-3 text-center'>Documentation</h2>
            <div>
              <h3 className='text-white font-serif text-2xl'>Weather API</h3>
              <p className='text-white text-sm font-sans mt-4'>
                it provides real‑time and forecast data so you can integrate accurate weather insights into your applications. It allows developers to fetch current conditions, hourly updates, and long‑range forecasts for any location worldwide. With simple endpoints and customizable parameters, you can tailor results to match your project’s needs — whether it’s powering a travel app, monitoring outdoor events, or building smart devices that respond to changing weather.
              </p>
              <div className='bg-white w-full h-10 mt-5 rounded-sm'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center hover:cursor-pointer'>
                    <img src="/assets/react.svg" alt="" className='w-7 h-5 ml-3 mt-2'/>
                    <a className='text-center font-serif mt-2 ml-3'>https://api-loc/api/weather.api</a>
                  </div>
                  <img src="/assets/copy.jpg" alt="" className='w-5 mr-3 mt-2 cursor-pointer'/>
                </div>
              </div>

            </div>
          </div>
          <hr className='mt-7 mb-7'/>
          <div className=' w-full h-72 flex p-3 gap-16'>
          <div className='justify-between gap-5 grid'>
            <h2 className='text-white font-serif text-xl'>Chatbox API</h2>
            <p className='text-white font-sans text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam eveniet, blanditiis ipsam modi dignissimos laboriosam ut soluta illum! Sapiente quaerat voluptatem explicabo facilis est cum eaque tenetur. Officiis, ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic perspiciatis dicta quas, laudantium quos dolorem doloribus eum autem quia ab eius quod facere non necessitatibus blanditiis temporibus suscipit rem.</p>
              <div className='bg-white w-full h-10 mt-5 rounded-sm'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center hover:cursor-pointer'>
                    <img src="/assets/react.svg" alt="" className='w-7 h-5 ml-3 mt-2'/>
                    <a className='text-center font-serif mt-2 ml-3'>https://api-loc/api/chatbox.api</a>
                  </div>
                  <img src="/assets/copy.jpg" alt="" className='w-5 mr-3 mt-2 cursor-pointer'/>
                </div>
              </div>
            </div>
          <div className='justify-between gap-5 grid'>
            <h2 className='text-white font-serif text-xl'>Movies API</h2>
            <p className='text-white font-sans text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium veniam eveniet, blanditiis ipsam modi dignissimos laboriosam ut soluta illum! Sapiente quaerat voluptatem explicabo facilis est cum eaque tenetur. Officiis, ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odit minima consectetur repudiandae possimus ducimus illum distinctio in cupiditate. Tenetur laborum fugit totam dolorum minima dolores id mollitia vero voluptatem!</p>
              <div className='bg-white w-full h-10 mt-5 rounded-sm'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center hover:cursor-pointer'>
                    <img src="/assets/react.svg" alt="" className='w-7 h-5 ml-3 mt-2'/>
                    <a className='text-center font-serif mt-2 ml-3'>https://api-loc/api/movies.api</a>
                  </div>
                  <img src="/assets/copy.jpg" alt="" className='w-5 mr-3 mt-2 cursor-pointer'/>
                </div>
              </div>
            </div>
          </div>

            <hr className='mt-7'/>

            <div>
              <h3 className='text-white font-serif text-2xl mt-10'>Location API</h3>
                <p className='text-white text-sm font-sans mt-4'>
                  it provides real‑time and forecast data so you can integrate accurate weather insights into your applications. It allows developers to fetch current conditions, hourly updates, and long‑range forecasts for any location worldwide. With simple endpoints and customizable parameters, you can tailor results to match your project’s needs — whether it’s powering a travel app, monitoring outdoor events, or building smart devices that respond to changing weather. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ratione fuga ducimus voluptate et delectus quo consequuntur harum est corporis incidunt, blanditiis sapiente repudiandae ad cupiditate? Quas iusto fugit aperiam?
                </p>
                <div className='bg-white w-full h-10 mt-5 rounded-sm'>
                        <div className='flex items-center justify-between'>
                    <div className='flex items-center hover:cursor-pointer'>
                      <img src="/assets/react.svg" alt="" className='w-7 h-5 ml-3 mt-2'/>
                    <a className='text-center font-serif mt-2 ml-3'>https://api-loc/api/location.api</a>
                  </div>
                <img src="/assets/copy.jpg" alt="" className='w-5 mr-3 mt-2 cursor-pointer'/>
              </div>
            </div>

          </div>
        </div>
                      <Footer/>

    </div>
  )
}