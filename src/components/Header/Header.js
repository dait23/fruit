import React, {Component} from 'react';

import { Link } from 'react-router-dom'
class Header extends Component {


  render() {
   
   
    return (
      <div>
       
        <nav className="navbar navbar-light bg-white fixed-top mediumnavigation">

		 <div className="container">
		  <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
           <a className="navbar-brand" href="https://www.nomadic.co.id">
		  <img src="https://res.cloudinary.com/nomadic-id/image/upload/v1522308873/logo.png" alt="logo" />
		  </a>
        </div>
		 
		 <div id="navbar" className="navbar-collapse collapse">
		  <ul className="nav navbar-nav navbar-right">
		         <li>
		            <Link to="/">Home</Link>
		          </li>
		          <li>
		            <Link to="/help">Help</Link>
		          </li>
		          <li> <Link to="https://nomadic.co.id/nomadic" target="_Blank">Blog</Link></li>
		          <li> <Link to="https://status.nomadic.co.id" target="_Blank">Status</Link></li>
                   <li> <Link to="/privacy">Privacy</Link></li>
                    <li> <Link to="/terms">Terms</Link></li>

		           
		    </ul>
		 </div> 
		</div>
		    
		  </nav>

      </div>
    )
  }
}




export default Header ;
