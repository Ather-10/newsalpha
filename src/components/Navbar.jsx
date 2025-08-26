// import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom';

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
                 <NavLink className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/">Home</a>
                  </NavLink>
                 <NavLink className="nav-item"> <a className="nav-link" to="business"> Business</a> </NavLink>
                 <NavLink className="nav-item"> <a className="nav-link" to="entertainment">Entertainment</a> </NavLink>
                 <NavLink className="nav-item"> <a className="nav-link" to="general"> General</a> </NavLink>
                 <NavLink className="nav-item"> <a className="nav-link" to="health"> Health</a> </NavLink>
                 <NavLink className="nav-item"> <a className="nav-link" to="science"> Science</a> </NavLink>
                 <NavLink className="nav-item"> <a className="nav-link" to="sports"> Sports</a> </NavLink>
                 <NavLink className="nav-item"> <a className="nav-link" to=" technology"> Technology</a> </NavLink>       
                </ul>
              </div>
            </div>
          </nav>

                </div>
              )
  
}
export default Navbar
