import './Header.css'
import BrandPic from '../../assets/images/profile.jpg'
import { useState } from 'react';

function Header() {
  const [classToggle, setClassToggle] = useState(false)
  
  return (
    <header className='flex flex-row parent text-amber-100 text-2xl font-bold mx-0 mt-0 mb-3 h-12 bg-amber-200 hover:bg-amber-100'>
      <div className="basis-1/15 ml-12 mr-4 my-auto rounded-4xl h-10 bg-[url(../../assets/images/profile.jpg)]"></div>

      <div className=" basis-9/15 pl-65 my-auto text-center text-3xl tracking-wide font-extrabold text-red-500 text-shadow-blue-500 text-shadow-2xs">
          <h1>Brand Name</h1>
      </div>

      <div className={classToggle ? 'flex lg:flex-nowrap space-x-1.5 pr-5' : 'basis-5/15 pl-50'}>
          <button
            className='shrink-<2> mt-3.5 cursor-pointer pl-30' 
            onClick={() => setClassToggle(!classToggle)}
          >
            <span className="bg-purple-800 w-12 mb-2 h-0.5 block border-hidden rounded-2xl"></span>
            <span className="bg-purple-800 w-12 mb-2 h-0.5 block border-hidden rounded-2xl"></span>
            <span className="bg-purple-800 w-12 mb-2 h-0.5 block border-hidden rounded-2xl"></span>
          </button>
            
          {classToggle && (
            <div className="flex-grow shrink-0 justify-items-center my-auto">
              <a href="#" className='text-black font-light mr-1 hover:underline hover:text-blue-900'>Link 1</a>
              <a href="#" className='text-black font-light mr-1 hover:underline hover:text-blue-900'>Link 2</a>
              <a href="#" className='text-black font-light mr-1 hover:underline hover:text-blue-900'>Link 3</a>
            </div>
          )}
      </div>
    </header>
  )
}

export default Header