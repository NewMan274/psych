import './Body.css'
import 'tailwindcss';

function Body () {

  return (
    <div className=''>
      <section className="grid grid-rows-3">
          <div className='mt-2 mb-4 font-extrabold text-5xl text-white text-center pt-20'>
            ✨ Are you ready to embrace your destiny? ✨
          </div>

          <div className='text-center'>
            <p className='text-2xl text-white py-8 px-20'>
              Welcome to the <span className="font-bold">Your Brand Name</span> where you Discover the 
              Guidance Beyond and Connect with Spirit, and Find Your Path.
            </p>
            <p className='text-2xl text-white py-5 px-30'>
              At <span className="font-bold">Your Brand Name</span>, we believe that the stars hold the key to unlocking your true potential. With a great years of experience of astrology we delve deep into the celestial tapestry to provide you with personalized insights that can empower you to:
            </p>
          </div>

          <div className="flex flex-row flex-nowrap justify-center space-x-5 my-5 text-white px-4">
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

          <a href="#contact" className='mx-auto'><button className="p-1.5 bg-inherit text-white font-bold border-amber-200 border-solid border-2 rounded-xl">Contact Us</button></a>
      </section>
    </div>
  )
}

export default Body