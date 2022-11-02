// this page is containing the profile related jsx code 
import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import {MdModeEditOutline} from "react-icons/md"; 
import {GrAdd} from "react-icons/gr"
import { db } from "../../firebase";
import { collection,getDocs,query,serverTimestamp,addDoc } from "firebase/firestore";
import './list.css';
// import Preloding from "../../Preloding";
    const List=()=>{
        const [profile, setProfile]=useState([]);
        const [emails, setEmails]=useState({
            newEmail:"",
        });
        let name,value;
        const handleInputs=(e)=>{
            name = e.target.name;
            value = e.target.value;
            setEmails({...emails, [name]:value})
        }
        document.title=`Profile`
        const profileData=async()=>{
            const q = query(collection(db, "Registration"));
            const querySnapshot=await getDocs(q);
            const data = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id,
                
            }));
            setProfile(data);
        }
        const addEmai =async(e,id,password)=>{
            console.log(id);
            console.log(password);
            e.preventDefault()
            
                try{
                        await addDoc(collection(db,"Registration",id),{
                            ...emails,
                            sendDataTime:serverTimestamp(),
                        });
                        }catch(error){
                            console.log("data not send")
                     }
            
        }
        useEffect(()=>{
            profileData();
        },[])
        return(
            <>
               <div className="new">
               {/* Sidebar and Navbar import here to display  */}
                    <Sidebar/>
                    <div className="newContaner">
                        <Navbar/>
                           <div className="profileDiv">
                              <div className="profileSubDiv">
                                <h1 className="welcome">Profile Page</h1>
                                    <div className="detail">
                                          <div className="edit"><MdModeEditOutline/></div>  
                                    </div>
                                    {/* <Preloding/> */}
                                   { 
                                        profile.map((userData)=>{
                                            const {city,company,email,firstname,lastname,id,pincode,password}=userData;
                                            return(
                                                <>
                                                    <div className="mainField">
                                                        <div className="datField">
                                                             User ID <b className="listData em"> {id}</b>
                                                        </div>
                                                        <div className="datField">
                                                        Name <b className="listData"> {`${firstname} ${lastname}`}</b>
                                                        </div>
                                                        <div className="datField">
                                                            Primary <br/>email<b className="listData em"> {email}<br/></b>
                                                            <form onSubmit={addEmai(id,password)}>
                                                                <input type='emaile' placeholder="Add Email" name="newEmail" id='newEmail'
                                                                value={emails.newEmail} onChange={handleInputs} className="addEmail"/>
                                                                <button className="add" type="submit" ><GrAdd className="plus"/></button>
                                                            </form>
                                                        </div>
                                                        <div className="datField">
                                                            Company Name  <b className="listData">{company}</b>
                                                        </div>
                                                        <div className="datField">
                                                            City <b className="listData">{city}</b>
                                                        </div>
                                                        <div className="datField">
                                                            Pincode <b className="listData">{pincode}</b>
                                                        </div>
                                                        
                                                    </div>
                                                </>
                                            )
                                           })
                                    }
                              </div>  
                           </div>
                    </div>
                </div>
            </>
        );
    };
    export default List;