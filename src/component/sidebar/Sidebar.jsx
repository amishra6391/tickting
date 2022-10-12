import React from "react";
import {AiFillHome,AiFillSetting} from "react-icons/ai";
import {HiChatAlt2,} from "react-icons/hi";
import {ImProfile} from "react-icons/im";
import {FaTicketAlt} from "react-icons/fa";
import {MdOutlineNotificationsActive} from "react-icons/md";
import {Link} from "react-router-dom"
import {BiLogOutCircle} from "react-icons/bi";
import './sidebar.css';
    const Sidebar=()=>{
        return(
            <>
                <div className="sidebar">
                    <div className="top">
                        <span className="logo">NIT</span>
                    </div>
                    <hr/>
                    <div className="center">
                        <ul>
                            <li>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                    <AiFillHome className="icons"/>
                                    <span>Dashbord</span>
                            </Link>
                            </li>
                            <li>
                            <Link to="/users/Ticket">
                            <FaTicketAlt className="icons"/>
                                 <span>Ticket</span>
                            </Link>
                            </li>
                            <li>
                                <Link to="/users">
                                <ImProfile className="icons"/>
                                    <span>Profiles</span>
                                </Link>
                            </li>
                            <li><HiChatAlt2  className="icons"/><span>Chat</span></li>
                            <li><MdOutlineNotificationsActive  className="icons"/><span>Notifications</span></li>
                            <li><AiFillSetting className="icons"/><span>Settinges</span></li>
                            <li><BiLogOutCircle  className="icons"/><span>LogOut</span></li>
                        </ul>
                    </div>
                    {/* <div className="bottom">color option</div> */}
                </div>
            </>
        );
    }
    export default Sidebar;