import React from "react";
import {AiFillHome,AiFillSetting} from "react-icons/ai";
import {HiChatAlt2} from "react-icons/hi";
import {IoIosArrowForward} from 'react-icons/io';
import {ImProfile} from "react-icons/im";
import {FaTicketAlt} from "react-icons/fa";
import {MdOutlineNotificationsActive} from "react-icons/md";
import {NavLink} from "react-router-dom"
import {BiLogOutCircle} from "react-icons/bi";
import './sidebar.css';
    const Sidebar=()=>{
        return(
            <>
                <div className="sidebar">
                    <div className="top">
                         {/*
                                do not remove top className div because logo of the company set here with 
                                the help of the csss
                        */}
                    </div>
                    <hr/>
                    <div className="center">
                        
                        <ul className="ulli_class">
                        <li>
                            <NavLink to="/" style={{ textDecoration: "none" }}>
                                    <AiFillHome className="icons"/>
                                    <span className="noneDisplay">Dashbord</span>
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/users/Ticket">
                                <FaTicketAlt className="icons"/>
                                    <span className="noneDisplay">Ticket</span>
                                </NavLink>
                            </li>
                            <li>
                            <NavLink to="/users">
                                <ImProfile className="icons"/>
                                    <span className="noneDisplay">Profiles</span>
                                </NavLink>
                            </li>
                            <li><HiChatAlt2  className="icons"/><span className="noneDisplay">Chat</span></li>
                            <li><MdOutlineNotificationsActive  className="icons"/><span className="noneDisplay">Notifications</span></li>
                            <li><AiFillSetting className="icons"/><span className="noneDisplay">Settinges</span></li>
                            <li>
                                <NavLink to="/login">
                                
                                        <BiLogOutCircle className="icons"/><span className="noneDisplay">
                                        LogOut</span>
                                
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <button className="menu"><IoIosArrowForward/></button>
                </div>
            </>
        );
    }
    export default Sidebar;