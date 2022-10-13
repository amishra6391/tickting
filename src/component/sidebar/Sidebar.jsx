import React from "react";
import {AiFillHome,AiFillSetting} from "react-icons/ai";
import {HiChatAlt2, HiOutlineMenu} from "react-icons/hi";
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
                        <ul className="ulli_class">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <li>
                                    <AiFillHome className="icons"/>
                                    <span className="noneDisplay">Dashbord</span>
                            </li>
                            </Link>
                            <Link to="/users/Ticket">
                            <li>
                            
                            <FaTicketAlt className="icons"/>
                                 <span className="noneDisplay">Ticket</span>
                                 </li>
                            </Link>
                            <Link to="/users">
                                <li>
                                <ImProfile className="icons"/>
                                    <span className="noneDisplay">Profiles</span>
                                </li>
                                </Link>
                            
                            <li><HiChatAlt2  className="icons"/><span className="noneDisplay">Chat</span></li>
                            <li><MdOutlineNotificationsActive  className="icons"/><span className="noneDisplay">Notifications</span></li>
                            <li><AiFillSetting className="icons"/><span className="noneDisplay">Settinges</span></li>
                            <li><BiLogOutCircle  className="icons"/><span className="noneDisplay">LogOut</span></li>
                        </ul>
                    </div>
                    {/* <div className="bottom">color option</div> */}
                </div>
            </>
        );
    }
    export default Sidebar;