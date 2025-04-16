import './Header.css'
import BrandPic from '../../assets/images/profile.jpg'
import { useState } from 'react';

function Header() {
  const [classToggle, setClassToggle] = useState(false)
  
  return (
    <header id="home">
      <div className="brand-picture"></div>

      <div className="Names-Co">
          <h1>Brand Name</h1>
      </div>

      <div className={classToggle ? 'show' : 'options'}>
          <button
            className='dropdown-btn' 
            onClick={() => setClassToggle(!classToggle)}
          >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </button>
            
          {classToggle && (
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          )}
      </div>
    </header>
  )
}

export default Header