import React, { Component } from 'react';
import './Login.css';
import Logo from './img/logo-unison-png-2.png'

class Login extends Component{
    render(){
        return (
            <div>
                
                <div>
                    <img src={Logo} alt="Logo Unison" className="Logo"/>
                </div>
            </div>
        )
    }
}


export default Login;