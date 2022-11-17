// import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import { Logo } from '../Entryfile/imagepath'
import './style.css'


function Loginpage() {
  return (
    <>
      <Helmet>
        <title>Login - qBotica</title>
        <meta name="description" content="Login page"/>	
      </Helmet>
      <div className='container'>
         {/* Account Logo */}
        <div className='account-logo'>
        <img src={Logo} alt="qBotioca-logo" />
        </div>
         {/* /Account Logo */}
         <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <div>
                <form>
                <div className="form-group">
                  <label>Email Address</label> 
                   <input   className={`form-control `} type="text"/>
                </div>
                <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      <div className="col-auto">
                        Forget password?
                      </div>
                    </div> {/*row*/}
                      <div className="pass-group">
                        <input  type="password" className={`form-control`} />
                        <span className={`fa toggle-password"`}/>
                      </div>

                </div> {/*form-group*/}
                <div className="form-group text-center">
                  <button
                    className="btn btn-primary account-btn"
                    type="submit">
                  Login
                  </button>
                   
                </div>
                </form>




                </div> 

                </div> {/*account-wrapper */}
          </div> {/*account-box */}    
      </div> {/*container */}   

          
      
    </>
  )
};

export default Loginpage
