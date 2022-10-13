import React, { useState,useEffect} from "react";
import {  MdOutlineFileUpload} from "react-icons/md";
import './new.css';
import {  doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import {auth, db, storage} from "../../firebase";
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


    const New=({inputes})=>{
        const [file, setFiles]=useState("");
        const [data, setData]=useState({});
        // thia line of code help to uplode the file on the on the firebase storeg data base;
        useEffect(()=>{
          const uplodeFile=()=>{
            //      this line of code help to change the file name based on the time 
            const name=new Date().getTime()+file.name;
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
              //      this help to display the error on the console 
              (error) => {
                console.log(error);
              }, 
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
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
            const res= await createUserWithEmailAndPassword(auth, data.email,data.password)
            await setDoc(doc(db,"cities",res.user.uid),{
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
                                    <label>{input.label}</label>
                                    <input type={input.type}
                                     id={input.id}
                                     placeholder={input.placeholder}
                                     onChange={handleInput}
                                    className="inpNew"
                                    required
                                    />
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