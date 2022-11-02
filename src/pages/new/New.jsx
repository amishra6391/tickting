import React, { useState,useEffect} from "react";
import {  MdOutlineFileUpload} from "react-icons/md";
import './new.css';
import {  doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import {auth, db, storage} from "../../firebase";
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

    const New=({inputes})=>{
        const [file, setFiles]=useState("");
        const [data, setData]=useState({});
        document.title=`Registration`
        // thia line of code help to uplode the file on the on the firebase storeg data base;
        useEffect(()=>{
          const uplodeFile=()=>{
            //      this line of code help to change the file name based on the time 
            const name=new Date().getTime()+file.name;
            console.log(name)
          }
          const storageRef = ref(storage, 'images/rivers.jpg');
          const uploadTask = uploadBytesResumable(storageRef, file);
          // this line of code help to display the uploded image % in the where ever you want
            uploadTask.on('state_changed', 
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    console.log('Upload is running');
                    break;
                    default:
                    break;
                }
              }, 

              //this help to display the error on the console

              (error) => {
                console.log(error);
              }, 
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{

                // this line of code the provide the uid of authentication and cloude feauld;

                  setData((prev)=>({...prev,img:downloadURL}));
                });
              }
            );

          file && uplodeFile();
        },[file]);
        console.log(data)
        const handleInput=(e)=>{
          const id = e.target.id;
          const value =e.target.value;
          setData({...data, [id]:value});
        }; 
        console.log(data)
        const handleAdd= async(e)=>{
          e.preventDefault()
          try{
            // this line of code send the data in Authentication database and take there uid into the res varible 
            const res= await createUserWithEmailAndPassword(auth, data.email,data.password)
            // res res.user.uid stored send same uid to the registration data feaulde
            await setDoc(doc(db,"Registration",res.user.uid),{
              ...data,
              sendDataTime:serverTimestamp(),

            });
            swal("Account Created", "Successfully", "success");
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
                                    <TextField
                                    label={input.label}
                                     id={input.id}
                                     type={input.type}
                                     onChange={handleInput}
                                    className="inpNew"   
                                    autoComplete="off"
                                    />
                                </div>
                                 ))}
                                <button className="btnNew"
                                type="submit">Submit</button>
                                <p className="plogin">already have an account login<Link to="/Login" className="gotolink"> Sign in</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </>
        );
    };
    export default New;