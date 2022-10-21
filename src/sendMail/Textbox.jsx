import React from "react";
import { HiOutlineReply } from 'react-icons/hi'
const Textbox=()=>{
    return(
        <>
            <div className="border">
                 <div className="public"><HiOutlineReply/> Public Reply <span className="to">TO <span className="sendToEm">Adarsh Mishra</span></span></div>
                    <textarea id="inputfe" name="inputfe"
                        placeholder="Write query ..." style={{height:'120px',width:'82.5%'}} required autoComplete="off"/>
                    <button className="cc">CC</button>
                    <div className="bottbtn">
                    <h2>This Email Be</h2>
                    <button className="sendbtn">Send</button>
                </div>
            </div>
        </>
    )
}
export default Textbox;