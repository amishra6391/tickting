import React from "react";
import './sendemail.css';
import {CgProfile} from "react-icons/cg"
import Sidebar from '../component/sidebar/Sidebar.jsx'; 
import Navbar from  '../component/navbar/Navbar.jsx';
import Textbox from "./Textbox";
    const SendEmail=()=>{
        document.title=`Message`
        return(
            <>
                <div className="home">
                <Sidebar/>
                 <div className="homeContainer">
                    <Navbar/>

                    <div className="sendemail">
                    
                    <div className="abouteTicket">
                    
                        <h2 className="content">Subject of Ticket</h2>
                        <p className="pticket">Via sample ticket</p>
                    </div>
                    <div className="chatsend">
                        <div className="senderLogo"/>
                        <div className="emailmessages">
                          <CgProfile className="logopro"/><p>Amir Khan</p>
                            <p className="userQ">Using CSS together with JavaScript to show content
                            This example demonstrates how to use CSS and JavaScript to show an element on click.
                            </p>
                        </div>
                        <div className="emailmessages">
                          <CgProfile className="logopro"/><p>Amir Khan</p>
                            <p className="userQ">Using CSS together with JavaScript to show content
                            This example demonstrates how to use CSS and JavaScript to show an element on click.
                            </p>
                        </div>
                        <div className="emailmessages">
                          <CgProfile className="logopro"/><p>Amir Khan</p>
                            <p className="userQ">Using CSS together with JavaScript to show content
                            This example demonstrates how to use CSS and JavaScript to show an element on click.
                            </p>
                        </div>
                        
                      
                    </div>
                    </div>
                        <Textbox/>
                    </div>
                </div>
               
                    
            </>
        )
    }
    export default SendEmail;