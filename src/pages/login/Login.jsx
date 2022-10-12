import React, { useState } from "react";
import './login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import swal from 'sweetalert';
import { useNavigate, Link} from "react-router-dom";
    
    const Login=()=>{
        const [error, setError] = useState(false);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navitage= useNavigate();
        const gotoHome=()=>{
            navitage("/");
        }
            const handleLogin=(e,action)=>{
                e.preventDefault();
                 signInWithEmailAndPassword (auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user)
                        swal("Login", "Successful", "success");
                        gotoHome();
                    })
                    .catch((error) => {
                      setError(true);
                    console.log(error)
                    });

             };
        return(
        <>
             <div className="loging">
                <div className="login2">
                
                <form onSubmit={handleLogin} className="formLogin">
                <h1 className="loginh1">Login your Account</h1>
                    <input type="email" placeholder="Email ID"
                     className="inputLogin"
                     onChange={(e)=>setEmail(e.target.value)}
                     />

                    <input type="password" placeholder="Password" 
                    className="inputLogin"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    {error &&<p className="loginSpan">Wrong Email or Password</p>}
                    <button className="Loginbtm">Login</button>
                    <p>Create new <Link to="/New">Account</Link></p>
                </form>
                </div>
            </div>
        </>
        );
    };
    export default Login;