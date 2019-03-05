import React, { Component } from 'react';
import './TopNav.css';
import Letragrama from './img/letragrama-cmyk-300.jpg'

export default class TopNav extends Component{
    render(){
        return(
            <div>
            <div className="Top">
               Hola
            </div>
            <div>
                <img src={Letragrama} className="LogoUnison" alt="logo"></img>
            </div>
            <div className="Nav">
                Menu
            </div>
            </div>
        )
    }

}
