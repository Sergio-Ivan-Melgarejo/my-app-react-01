import React, { Component } from "react";
import logo from "../logo.svg"

class Navigation extends Component {
    openMenu(){
        document.querySelector(".mi-class__form-f").style.height = "auto";   
    }

    render() {
        return (
        <nav className="mi-class__nav navbar navbar-dark bg-dark">
            <a href="/" className="text-white">
                <img src={logo} className="App-logo mi-class__logo" alt="logo" />
                    {this.props.titulo} 
            </a>
            <div className="mi-class__nav-linea"></div>
            <ul className="mi-class__nav-ul">
                <li className="mi-class__nav-li">
                    <p onClick={this.openMenu} className="mi-class__agregar-t" onClick={this.openMenu}>Agregar Tareas</p>
                </li>
                <li className="mi-class__nav-li">
                    <p>Tareas:
                    <span className="mi-class__ntarea badge rounded-pill ml-2">
                        {this.props.ntareas}
                    </span>
                    </p>
                </li>
            </ul>
        </nav>
        )
    }
}

export default Navigation