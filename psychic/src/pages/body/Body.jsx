import 'tailwindcss';
import astral from '../../assets/images/fantasy.jpg'

function Body () {

  return (
    <div className=''>
      <section className="grid grid-rows-4">
          <div className='row-start-1 row-end-3'>
            <p className='mb-1 font-extrabold text-5xl text-amber-100 text-center pt-10 pb-5'>
              ✨ Are you ready to embrace your destiny? ✨
            </p>
            <div className='columns-2'>
              <p className='pl-12 pt-20'>
                <span className='text-amber-100 text-5xl font-mono'>Welcome to</span><br /><br /><span className="pl-5 pt-15 racking-wide font-extrabold text-red-500 text-shadow-blue-500 text-shadow-lg text-6xl animate-pulse">Your Brand Name</span><br /><br /><span className='text-amber-100 pt-5 text-3xl font-mono'>where you Discover the Guidance Beyond and Connect with Spirit, and Find Your Path.</span>
              </p>
              <div className='w-fit h-80 px-5 pb-24 pt-5 top-10'>
                <img src={astral} alt="astral" className='rounded-full scale-75 animate-bounce' />
              </div>
            </div>
          </div>


          <div className='row-start-3 text-center'>
            <p className='text-2xl text-white py-5 px-30'>
              At <span className="font-bold">Your Brand Name</span>, we believe that the stars hold the key to unlocking your true potential. With a great years of experience of astrology we delve deep into the celestial tapestry to provide you with personalized insights that can empower you to:
            </p>
          </div>

          <div className="row-start-4 flex flex-row flex-nowrap justify-center space-x-5 my-5 text-white px-4">
            <div className="bg-[url(../../assets/images/newww.jpg)] opacity-60 hover:border-amber-200 rounded-full hover:border-solid p-8 text-center hover:text-2xl hover:opacity-100">
              <span className="font-bold uppercase">Understand your strengths and weaknesses</span>
              <p>Discover your unique personality traits, talents, and challenges based on your birth chart.</p>
            </div>
            <div className="bg-[url(../../assets/images/newww.jpg)] opacity-60 hover:border-amber-200 rounded-full hover:border-solid p-8 text-center hover:text-2xl hover:opacity-100">
              <span className="font-bold uppercase">Navigate life's challenges with confidence</span> 
              <p>Gain valuable insights into your relationships, career, and overall well-being.</p>
            </div>
            <div className="bg-[url(../../assets/images/newww.jpg)] opacity-60 hover:border-amber-200 rounded-full hover:border-solid p-8 text-center hover:text-2xl hover:opacity-100">
              <span className="font-bold uppercase">Make informed decisions</span> 
              <p>Learn how the cosmic energies are influencing your life and make choices that align with your true purpose.</p>
            </div>
            <div className="bg-[url(../../assets/images/newww.jpg)] opacity-60 hover:border-amber-200 rounded-full hover:border-solid p-9 text-center hover:text-2xl hover:opacity-100">
              <span className="font-bold uppercase">Embrace your unique path</span> 
              <p>Discover your life's purpose and create a fulfilling and meaningful existence.</p>
            </div>
          </div>

          <a href="#contact" className='mx-auto'><button className="p-1.5 bg-inherit text-white font-bold border-amber-200 border-solid border-2 rounded-xl ring-2 ring-emerald-700">Contact Us</button></a>
      </section>
    </div>
  )
}

export default Body