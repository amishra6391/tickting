import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase";
import {MdModeEditOutline} from "react-icons/md"
import './list.css';
    const List=()=>{
        return(
            <>
               <div className="new">
                    <Sidebar/>
                    <div className="newContaner">
                        <Navbar/>
                           <div className="profileDiv">
                              <div className="profileSubDiv">
                                <h1 className="welcome">Welcome </h1>
                                    <div className="detail">
                                          <div className="edit"><MdModeEditOutline/></div>  
                                    </div>
                                    <div className="mainField">
                                        <div className="datField">
                                            Company Name
                                        </div>
                                        <div className="datField">
                                            Name
                                        </div>
                                        <div className="datField">
                                            User ID
                                        </div>
                                        <div className="datField">
                                            Email ID
                                        </div>
                                        <div className="datField">
                                            City
                                        </div>
                                        <div className="datField">
                                            Pincode
                                        </div>
                                    </div>
                              </div>  
                           </div>
                    </div>
                </div>
            </>
        );
    };
    export default List;