import React, { Component } from 'react';
import './Login.css';
import Logo from './img/logo-unison-png-2.png'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Login extends Component{
    render(){
        return (
            <div>
                <div>
                    <img src={Logo} alt="Logo Unison" className="Logo"/>
                </div>
                <div className="FormContainer">
                    <TextField
                        id="outlined-email-input"
                        label="Usuario"
                        className="textField Form"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    </div>
                    <div className="FormContainer">
                    <TextField
                        id="outlined-password-input"
                        label="Contraseña"
                        className="textField Form"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className="FormContainer">
                    <Button variant="contained" color="primary" className="button">
                        Iniciar Sesión
                    </Button>
                </div>
            </div>
        )
    }
}


export default Login;