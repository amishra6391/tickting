import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import './list.css';
    const List=()=>{
        const [data, setData]=useState({});
        useEffect(()=>{
            const fetchData= async ()=>{
                let list=[];
                try{
                const querySnapshot = await getDocs(collection(db, "cities"));
                querySnapshot.forEach((doc)=>{
                    list.push(doc.data());
                });
                console.log(list);
                }catch(err){
                    console.log(err);
                }
            };
            fetchData()
        },[])
        console.log(data);
        return(
            <>
               <div className="new">
                    <Sidebar/>
                    <div className="newContaner">
                        <Navbar/>
                            <div className="profile">
                                <h1 className="h1List">Welcome!</h1>
                                <img src="imglogo.png"
                                    alt="not found"
                                    className="imaga"
                                />
                                <div className="maindata">
                                    <div className="dataList">
                                        <label className="lableList">Name</label>
                                        -
                                    </div>
                                    <div className="dataList">
                                        <label className="lableList">UserId</label>
                                        -
                                    </div>
                                    <div className="dataList">
                                        <label className="lableList">First Name</label>

                                    </div>
                                    <div className="dataList">
                                        <label className="lableList">Last Name</label>
                                        -
                                    </div>
                                    <div className="dataList">
                                        <label className="lableList">email Id</label>
                                        -
                                    </div>
                                    <div className="dataList">
                                        <label className="lableList">Company Name</label>
                                        -
                                    </div>
                                    <div className="dataList">
                                        <label className="lableList">City</label>
                                        -
                                    </div>
                                    <div className="dataList">
                                        <label className="lableList">Zip Code</label>
                                        -
                                    </div>
                                    

                                </div>
                            </div>
                    </div>
                </div>
            </>
        );
    };
    export default List;