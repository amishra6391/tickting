import React from "react";
import './navbar.css';
import {AiOutlineMenu} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {MdOutlineNotificationsActive} from "react-icons/md";
import {FiMessageSquare} from "react-icons/fi";
    const Navbar=()=>{

        return(
            <>
                <div className="navbar">
                   <div className="wrapper">
                    <div className="serch">
                        <input type="text" placeholder="search..."/><BsSearch className="searchLogo"/>
                    </div>
                    <div className="items">
                        <div className="item">
                            <MdOutlineNotificationsActive />
                            <div className="counter">1</div>
                        </div>
                        <div className="item">
                            <FiMessageSquare/>
                            <div className="counter">5</div>
                        </div>
                        <div className="item">
                            <AiOutlineMenu/>
                        </div>
                        <div className="item">
                           <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fnature-319.jpg&f=1&nofb=1&ipt=a4b389430c9a3aa354dc45c10b46edda8b7154ae71476adc7703e28c0bb16bcd&ipo=images"
                           alt=""
                           className="avater"
                           />
                        </div>
                    </div>
                   </div>
                </div>
            </>
        );
    }
    export default Navbar;