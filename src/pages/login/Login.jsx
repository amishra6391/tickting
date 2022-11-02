//  this line of code help tho the 
import React, { useState } from "react";
import './login.css';
import { signInWithEmailAndPassword } from "firebase/auth"; // this method is import to perform the signin operation to user
import {auth} from "../../firebase";
import swal from 'sweetalert';
import { useNavigate, Link} from "react-router-dom";
import { TextField } from "@mui/material";
    
    const Login=()=>{
        const [error, setError] = useState(false);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navitage= useNavigate();
        document.title=`Login`;
        const gotoHome=()=>{
            navitage("/");
        }
        
            const handleLogin=(e)=>{
                e.preventDefault();
                 signInWithEmailAndPassword (auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user.uid)
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
                <h1 className="loginh1">Login</h1>
                {/* with the help of  @mui/material be cam create the ui like the google logoin input feauld 
                and if you want to use the meterialui then you need to import and install @mui/material package*/}
                    <TextField id="outlined-basic" label="User Id" variant="outlined"  autoComplete="off" className="inputLogin"
                     onChange={(e)=>setEmail(e.target.value)}
                    //  and  autoComplete="off" help to stop the auto compleate feauldes when user fill the forms
                     /><br/>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined"  className="inputLogin"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    {error &&<p className="loginSpan">Wrong Email or Password</p>}
                    <button className="Loginbtm">Login</button>
                    <p><Link to="/New" className="gotolink">Create account</Link></p>
                </form>
                </div>
            </div>
        </>
        );
    };
    export default Login;