// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => { 

       return (
                <div>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                  <div className="container-fluid">
                    <a className="navbar-brand" to="/">NewsAlpha</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link className="nav-item">
                    <a className="nav-Linknk active" aria-current="page" to="/">Home</a>
                  </Link>
                  <Link className="nav-item"> <a className="nav-Link" to="business"> Business</a> </Link>
                  <Link className="nav-item"> <a className="nav-Link" to="entertainment">Entertainment</a> </Link>
                  <Link className="nav-item"> <a className="nav-Link" to="general"> General</a> </Link>
                  <Link className="nav-item"> <a className="nav-Link" to="health"> Health</a> </Link>
                  <Link className="nav-item"> <a className="nav-Link" to="science"> Science</a> </Link>
                  <Link className="nav-item"> <a className="nav-Link" to="sports"> Sports</a> </Link>
                  <Link className="nav-item"> <a className="nav-Link" to=" technology"> Technology</a> </Link>       
                </ul>
              </div>
            </div>
          </nav>

                </div>
              )
  
}
export default Navbar
