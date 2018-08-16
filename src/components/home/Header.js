import React, {Component} from 'react';
import { Link } from "react-router-dom";

/**
 * Cabezera de la aplicacion
 * recibe como parametro el texto a mostrar en la barra superior
 * Contiene un enlace a la pagina Home ('/')
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