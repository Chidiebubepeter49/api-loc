export default function GridLayout() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div className="h-36 border border-slate-300 rounded-xl flex justify-center text-white items-start">
        <div className="flex items-start justify-center">
          <div className="bg-amber-500 rounded-full w-28 h-12 m-5">
            <img
              src="/assets/api.jpg"
              alt=""
              className="object-cover"
            />
          </div>

          <div className="m-5 grid">
            <h3 className=" text-lg text-black text-start font-serif">What is our API?</h3>
            <p className="text-gray-600 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam dolor ea est natus adipisci repudiandae doloribus exercitationem beatae aliquid ex?
            </p>
          </div>
        </div>
      </div>
      <div className="h-36 border border-slate-300 rounded-xl flex justify-center text-white items-start">
        <div className="flex items-start justify-center">
          <div className="bg-amber-500 rounded-full w-28 h-12 m-5">
            <img
              src="/assets/api.jpg"
              alt=""
              className="object-cover"
            />
          </div>

          <div className="m-5 grid">
            <h3 className="font-serif text-lg text-black text-start">What it's for?</h3>
            <p className="text-gray-600 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam dolor ea est natus adipisci repudiandae doloribus exercitationem beatae aliquid ex?
            </p>
          </div>
        </div>
      </div>
      <div className="h-36 border border-slate-300 rounded-xl flex justify-center text-white items-start">
        <div className="flex items-start justify-center">
          <div className="bg-amber-500 rounded-full w-28 h-12 m-5">
            <img
              src="/assets/api.jpg"
              alt=""
              className="object-cover"
            />
          </div>

          <div className="m-5 grid">
            <h3 className="font-serif text-lg text-black text-start">How it works</h3>
            <p className="text-gray-600 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam dolor ea est natus adipisci repudiandae doloribus exercitationem beatae aliquid ex?
            </p>
          </div>
        </div>
      </div>
      <div className="h-36 border border-slate-300 rounded-xl flex justify-center text-white items-start">
        <div className="flex items-start justify-center">
          <div className="bg-amber-500 rounded-full w-28 h-12 m-5">
            <img
              src="/assets/api.jpg"
              alt=""
              className="object-cover"
            />
          </div>

          <div className="m-5 grid">
            <h3 className="font-serif text-lg text-black text-start">Getting Started Quickly</h3>
            <p className="text-gray-600 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam dolor ea est natus adipisci repudiandae doloribus exercitationem beatae aliquid ex?
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
5