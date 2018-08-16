import React, {Component} from 'react';
import { Link } from "react-router-dom";

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
    /* this.props.titulo */
}

export default Header;