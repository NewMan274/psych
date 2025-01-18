const dashes = document.querySelector('.options');
const show = document.querySelector('.dropdown-content')
dashes.addEventListener('click', () => {
  if(!show.classList.contains('show')){
    show.classList.add('show');
  }else {
    show.classList.remove('show');
  }
})

document.querySelector('.js-index')
  .innerHTML = `
    <section class="container">
      <h2>✨ Are you ready to embrace your destiny? ✨</h2>

      <div>
        <p>
          At <span class="name">[Your Brand Name]</span>, we believe that the stars hold the key to unlocking your true potential. With a great years of experience of astrology we delve deep into the celestial tapestry to provide you with personalized insights that can empower you to:
        </p>

        <div class="points">
          <div class="list">
            <span class="h3">Understand your strengths and weaknesses:</span> Discover your unique personality traits, talents, and challenges based on your birth chart.
          </div>
          <div class="list">
            <span class="h3">Navigate life's challenges with confidence:</span> Gain valuable insights into your relationships, career, and overall well-being.
          </div>
          <div class="list">
            <span class="h3">Make informed decisions:</span> Learn how the cosmic energies are influencing your life and make choices that align with your true purpose.
          </div>
          <div class="list">
            <span class="h3">Embrace your unique path:</span> Discover your life's purpose and create a fulfilling and meaningful existence.
          </div>
        </div>
      </div>

      <a href="#contact"><button class="contactButton">Contact Us</button></a>
    </section>
  `;

/* function calculateSign() {
  const birthdayInput = document.getElementById('birthdayInput');
  const birthday = new Date(birthdayInput.value);
  const month = birthday.getMonth();
  const day = birthday.getDate();

  let sign;

  if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    sign = "Aquarius";
  } else if ((month === 1 && day >= 19) || (month === 2 && day <= 19)) {
    sign = "Pisces";
  } else if ((month === 2 && day >= 20) || (month === 3 && day <= 19)) {
    sign = "Aries";
  } else if ((month === 3 && day >= 20) || (month === 4 && day <= 19)) {
    sign = "Taurus";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    sign = "Gemini";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    sign = "Cancer";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    sign = "Leo";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    sign = "Virgo";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    sign = "Libra";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
    sign = "Scorpio";
  } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
    sign = "Sagittarius";
  } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
    sign = "Capricorn";
  }

  document.getElementById('userSign').textContent = "Your Zodiac Sign: " + sign;

  // Fetch horoscope from an external API (replace with your actual API call)
  const today = new Date().toISOString().slice(0, 10);
  const formData = new URLSearchParams();
  formData.append('sign', sign);
  formData.append('day', 'today'); // 'today' should be the correct value for the API
  fetch('https://aztro.sameerkumar.website/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sign: sign, day: 'today' }),
  })
  .then((response) => response.json())
  .then((data) => {
    const horoscopeDiv = document.getElementById('horoscope');
    horoscopeDiv.textContent = data.description; // Assuming the API returns a 'description' field
  })
  .catch((error) => {
    console.error('Error fetching horoscope:', error);
    const horoscopeDiv = document.getElementById('horoscope');
    horoscopeDiv.textContent = "Failed to fetch horoscope.";
  });
} */

function getHoroscope() {
  document.querySelector('.js-new')
    .innerHTML = `
      <form id="birthdateForm">
        <label for="dayInput">Day of Birth:</label>
        <input type="number" class="dayInput" min="1" max="31" required><br>
      
        <label for="monthInput">Month of Birth:</label>
        <input type="number" class="monthInput" min="1" max="12" required><br>

        <button type="button" class="js-getHoroButton">Get Horoscope</button>
      </form>
      <p class="userSign"></p>
      <p class="horoscope"></p> 
    `;
  
  // Display the user's zodiac sign
  document.querySelector('.js-getHoroButton')
    .addEventListener('click', () => {
      let dayInput = document.querySelector('.dayInput').value;
      let monthInput = document.querySelector('.monthInput').value;
    
      // Validate user input
      if (!dayInput || !monthInput || isNaN(dayInput) || isNaN(monthInput)) {
        alert('Please enter a valid day and month.');
        return;
      }
    
      const day = parseInt(dayInput, 10);
      const month = parseInt(monthInput, 10) - 1; // Adjust month to 0-based index
    
      let sign;
    
      // Determine zodiac sign based on the birthdate
      if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
        sign = "Aquarius";
      } else if ((month === 1 && day >= 19) || (month === 2 && day <= 19)) {
        sign = "Pisces";
      } else if ((month === 2 && day >= 20) || (month === 3 && day <= 19)) {
        sign = "Aries";
      } else if ((month === 3 && day >= 20) || (month === 4 && day <= 19)) {
        sign = "Taurus";
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = "Gemini";
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        sign = "Cancer";
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        sign = "Leo";
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = "Virgo";
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = "Libra";
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
        sign = "Scorpio";
      } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
        sign = "Sagittarius";
      } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
        sign = "Capricorn";
      }

      document.querySelector('.userSign').innerHTML = `Your Zodiac Sign: ${sign}`;

      async function apiHoroscope() {
        const url = `https://json.freeastrologyapi.com/d40-chart-info`;
      
        try {
          // IMPORTANT: Changed to POST method
          const request = new Request (url, {
            method: 'POST',  // <---  This is the crucial change
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'OV0Ub1B8AD10FOI4pWcr23vRieaP72oX4ZjVq7jL',
            }
          })
          const response = await fetch(request);
      
          /* if (!response.ok) {
            const errorData = await response.json().catch(() => ({})); // Try to parse error response
            const errorMessage = errorData.message || `Error fetching horoscope: ${response.status}`;
            throw new Error(errorMessage); 
          } */
      
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      apiHoroscope();

      document.querySelector('.horoscope').innerHTML = `Your horoscope today: ${data}`;
    })
}

getHoroscope();