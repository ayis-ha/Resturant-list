import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <div className='d-flex flex-column align-items-center justify-content-center bg-dark' style={{ width: '100%', height: '400px', border: '1px solid transparent', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}>
      <div className="footer d-flex  justify-content-evenly w-100 " style={{ color: 'white' }}>
        <div className="website" style={{ width: '300px' }}>
          <h4 style={{fontWeight:'700'}}>
            <i class="fa-solid fa-mug-hot me-2"></i>
            De-Caffes
          </h4>
          <h6>
            Designed and built with all the love in the world by the Bootstrap team with the help of our contributers.
          </h6>
          <h6>
            Code licenced MIT, docs CC BY 3.0.
          </h6>
          <p>Currently v5.3.2</p>
        </div>
        <div className="links d-flex flex-column">
          <h4 >Links</h4>
          <Link to={'./'} style={{ textDecoration: "none", color: "white" }}>Home</Link>
          <Link to={'./login'} style={{ textDecoration: "none", color: "white" }}>Login</Link>
          <Link to={'./register'} style={{ textDecoration: "none", color: "white" }}>Register </Link>


        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'https://react.dev/'} style={{ textDecoration: "none", color: "white" }}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: "none", color: "white" }}>React Bootstrap</Link>
          <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{ textDecoration: "none", color: "white" }}>Routing </Link>


        </div>

      </div>
      <p style={{ color: 'white' }}>Copyright © 2023 De-Caffes. Built with React.</p>
    </div>
  )
}

export default Footer