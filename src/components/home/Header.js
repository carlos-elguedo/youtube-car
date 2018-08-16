import React, {Component} from 'react';
import { Link } from "react-router-dom";

/**
 * Class Header
 * Header of the application
 * receives as parameter the text to be displayed in the upper bar
 * It contains a link to the Home page ('/')
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class Header extends Component{

    render(){
        return(
                <nav className="navbar navbar-light bg-danger">
                <Link to={`/`}>
                    <div className="navbar-brand text-white" href="">
                        <img src="assets/images/logo.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                        {this.props.nav_title}
                    </div>
                </Link>
                </nav>
        
        );
    }
    
}

export default Header;