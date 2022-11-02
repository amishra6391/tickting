import React, { useState } from "react";
import './createTicket.css'
import swal from 'sweetalert';
import {collection, serverTimestamp, addDoc} from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import { HiOutlineReply } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";
    const CreateTicket=()=>{
        const navigateTo= useNavigate();
        document.title=`New Tickets`;
        const [newticket,setNewticket]=useState({
            subject:"",email:"",cc:"",inputfe:"",
        });
        let name,value;
        const handleInputs=(e)=>{
            name = e.target.name;
            value = e.target.value;
            // this both value and name store data which user has inserted into the inputbox 
            // and setNewticket is function which provide the all data to the newticket value
            setNewticket({...newticket, [name]:value})
        }
        const sendEmainandFB= async(e,action)=>{
            e.preventDefault()
            try{
                await addDoc(collection(db,'NewTicket',),{
                    ...newticket,
                    sendDateTime: serverTimestamp(),
                });
                swal("Ticket Successfully", "Created", "success");
                navigateTo(-1);
            }catch(error){
                swal("Tyr again", "Fail", "error");
            }
            action.resetForm();
         }
        return(
            <>
                <div className="home">
                    <Sidebar/>
                    {/* side bar and nav bar is used to display the content of the */}
                        <div className="homeContainer">
                            <Navbar/>
                                <div className="mainCreateTi">
                                <div className="showNew"><b className="creTB">New</b> Tickets</div>
                                    <form onSubmit={sendEmainandFB}>
                                        <div className="subject">
                                            <input type="text" placeholder="Subject" className="ticketSubj" 
                                                name="subject" id="subject"  value={newticket.subject} onChange={handleInputs} required autoComplete="off"
                                            />
                                        </div>
                                        <div className="createTicketSpace">
                                        {/* this upper line of code help give space in center */}
                                        </div>
                                        <div className="border">
                                            <div className="public"><HiOutlineReply/> Public Reply <span className="to">TO 
                                                <span className="sendToEm"><input type='email' placeholder="Email" className="emaile" required
                                                    name="email" id="email" value={newticket.email} onChange={handleInputs}
                                                />
                                                <input type='email' placeholder="CC" className="emaile"
                                                    name="cc" id="cc" value={newticket.cc} onChange={handleInputs}
                                                />
                                                </span></span>
                                            </div>
                                                <textarea id="inputfe" name="inputfe" value={newticket.inputfe} onChange={handleInputs}
                                                placeholder="Write query ..." style={{height:'120px',width:'82.5%'}} required autoComplete="off"/>
                                                <button className="cc">CC</button>
                                                <div className="bottbtn">
                                            <h2>This Email Be</h2>
                                            <button className="sendbtn">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                      </div>
                </div>
            </>
        )
    }
    export default CreateTicket;