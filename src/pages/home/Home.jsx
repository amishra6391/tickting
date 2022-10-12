import React from "react";
import Navbar from "../../component/navbar/Navbar.jsx";
import Sidebar from "../../component/sidebar/Sidebar";
import Totaltick from "../../component/Totaltick.jsx";
import './home.css';
    const Home=()=>{
        return(
            <>
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="widgets">
                        <Totaltick type="total"/>
                        <Totaltick type="done"/>
                        <Totaltick type="finished"/>
                        
                    </div>
                </div>
                

            </div>
            </>
        );
    };
    export default Home;