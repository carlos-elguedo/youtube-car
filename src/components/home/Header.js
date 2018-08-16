import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component{

    render(){
        return(
                <nav className="navbar navbar-light bg-danger">
                    <a className="navbar-brand text-white" href="">
                        <Link to={`/`}>
                            <img src="assets/images/logo.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                        </Link>
                        {this.props.nav_title}
                    </a>
                </nav>
        
        );
    }
    /* this.props.titulo */
}

export default Header;