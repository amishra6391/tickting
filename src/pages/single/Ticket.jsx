import React from "react";
import './ticket.css';
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar.jsx";
import DataTicket from "./DataTicket";


    const Ticket=()=>{
        return(
            <>
             <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <DataTicket/>
                </div>
                </div>
            </>
        );
    };
    export default Ticket;