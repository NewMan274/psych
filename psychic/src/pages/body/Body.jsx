import './Body.css'

function Body () {

  return (
    <div className='main'>
      <section className="container">
        <h2>✨ Are you ready to embrace your destiny? ✨</h2>

        <div>
          <p>
            Welcome to the (brand name) where you Discover the 
            Guidance Beyond and Connect with Spirit, and Find Your Path.
            Here, we will help unlock your inner star power: Discover 
            your comic!
          </p>
          <p>
            At <span className="name">[Your Brand Name]</span>, we believe that the stars hold the key to unlocking your true potential. With a great years of experience of astrology we delve deep into the celestial tapestry to provide you with personalized insights that can empower you to:
          </p>

          <div className="points">
            <div className="list">
              <span className="h3">Understand your strengths and weaknesses:</span> Discover your unique personality traits, talents, and challenges based on your birth chart.
            </div>
            <div className="list">
              <span className="h3">Navigate life's challenges with confidence:</span> Gain valuable insights into your relationships, career, and overall well-being.
            </div>
            <div className="list">
              <span className="h3">Make informed decisions:</span> Learn how the cosmic energies are influencing your life and make choices that align with your true purpose.
            </div>
            <div className="list">
              <span className="h3">Embrace your unique path:</span> Discover your life's purpose and create a fulfilling and meaningful existence.
            </div>
          </div>
        </div>

        <a href="#contact"><button className="contactButton">Contact Us</button></a>
      </section>
    </div>
  )
}

export default Body