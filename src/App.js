import React from 'react';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';

import Loginpage from './Initialpage/Loginpage';
import Forgotpassword from './Initialpage/Forgotpassword';
import CandidateList from './Jobs/candidatelist';

const App = () => {

  return ( 
    <div className = "App">
      {/* <Loginpage/> */}
      {/* <Forgotpassword/> */}
      <CandidateList/>
    </div>
   
  )

}

export default App;
