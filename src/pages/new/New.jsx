import React, { useState,useEffect} from "react";
// import { Link } from "react-router-dom";
import {  MdOutlineFileUpload} from "react-icons/md";
import './new.css';
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import {auth, db } from "../../firebase";
import { useNavigate, Link} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

    const New=({inputes})=>{
        const [file, setFiles]=useState("");
        const [data, setData]=useState({});
        const handleInput=(e)=>{
          const id = e.target.id;
          const value =e.target.value;

          setData({...data, [id]:value});
        }; 
        console.log(data)
        const handleAdd= async(e)=>{
          e.preventDefault()
          try{
            const res= await createUserWithEmailAndPassword(auth, data.email,data.password)
            await setDoc(doc(db,"cities",res.user.uid),{
              ...data,
              sendDataTime:serverTimestamp(),
            });
            console.log(res.id);
          }catch(err){
            console.log(err);
          }
          
        };
       
        return(
            <>
              <div className="new">
                <div className="newContaner">
                    <div className="top1">
                        <h2>Registration</h2>
                    </div>
                    <div className="bottom">
                        <div className="left">
                        <img
                         src={
                            file
                            ?URL.createObjectURL(file)
                            : "http://clipart-library.com/images_k/transparent-camera-logo/transparent-camera-logo-17.png"
                            }
                        className="photo_logo"
                        alt=""
                        />
                        </div>
                        <div className="right">
                            <form className="formNew" onSubmit={handleAdd}>
                                <div className="formInput">
                                    <label htmlFor="file">Image<MdOutlineFileUpload className="iconNew"/></label>
                                    <input type="file" id="file" onChange={e=>setFiles(e.target.files[0])}
                                     style={{display:"none"}}/>
                                </div>
                                {
                                 inputes.map((input)=>(
                                    <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type}
                                     id={input.id}
                                     placeholder={input.placeholder}
                                     onChange={handleInput}
                                    className="inpNew"/>
                                </div>
                                 ))}
                                <button className="btnNew" 
                                type="submit">Submit</button>
                                <p className="plogin">already have an account ? <Link to="/Login"> Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </>
        );
    };
    export default New;