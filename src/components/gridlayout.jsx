export default function GridLayout() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div className="h-36 border border-slate-300 rounded-xl flex justify-center text-white items-start">
        <div className="flex items-start justify-center">
          <div className="bg-slate-200 rounded-full w-28 h-12 m-5 items-center flex justify-center">
            <img
              src="/assets/react.svg"
              alt=""
              className="object-contain w-7 h-7"
            />
          </div>

          <div className="m-5 grid">
            <h3 className=" text-lg text-white text-start font-serif">What is our API?</h3>
            <p className="text-slate-300 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam dolor ea est natus adipisci repudiandae doloribus exercitationem beatae aliquid ex?
            </p>
          </div>
        </div>
      </div>
      <div className="h-36 border border-slate-300 rounded-xl flex justify-center text-white items-start">
        <div className="flex items-start justify-center">
          <div className="bg-slate-200 rounded-full w-28 h-12 m-5 items-center flex justify-center">
            <img
              src="/assets/react.svg"
              alt=""
              className="object-contain w-7 h-7"
            />
          </div>

          <div className="m-5 grid">
            <h3 className="font-serif text-lg text-white text-start">What it's for?</h3>
            <p className="text-slate-300 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam dolor ea est natus adipisci repudiandae doloribus exercitationem beatae aliquid ex?
            </p>
          </div>
        </div>
      </div>
      <div className="h-36 border border-slate-300 rounded-xl flex justify-center text-white items-start">
        <div className="flex items-start justify-center">
          <div className="bg-slate-200 rounded-full w-28 h-12 m-5 items-center flex justify-center">
            <img
              src="/assets/react.svg"
              alt=""
              className="object-contain w-7 h-7"
            />
          </div>
          <div className="m-5 grid">
            <h3 className="font-serif text-lg text-white text-start">How it works</h3>
            <p className="text-slate-300 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam dolor ea est natus adipisci repudiandae doloribus exercitationem beatae aliquid ex?
            </p>
          </div>
        </div>
      </div>
      <div className="h-36 border border-slate-300 rounded-xl flex justify-center text-white items-start">
        <div className="flex items-start justify-center">
         <div className="bg-slate-200 rounded-full w-28 h-12 m-5 items-center flex justify-center">
            <img
              src="/assets/react.svg"
              alt=""
              className="object-contain w-7 h-7"
            />
          </div>
          <div className="m-5 grid">
            <h3 className="font-serif text-lg text-white text-start">Getting Started Quickly</h3>
            <p className="text-slate-300 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam dolor ea est natus adipisci repudiandae doloribus exercitationem beatae aliquid ex?
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
