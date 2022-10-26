import React,{useState,useEffect} from "react";
import './dataticket.css'
import datas from '../../dataSourcs.jsx';
import {RiShareForwardFill,RiDeleteBin7Line} from "react-icons/ri"
import { Link } from "react-router-dom";
import { collection,getDocs,query } from "firebase/firestore";
import { db } from "../../firebase";
import {MdAdd} from 'react-icons/md'
  const DataTicket=()=>{
	const [details, setDetails] = useState([]);
	const  userData = async()=>{
		const q = query(collection(db, "NewTicket"));
		const querySnapshot = await getDocs(q);
		const data = querySnapshot.docs.map((doc)=>({
			...doc.data(),
			id: doc.id,
		}));
		setDetails(data);	
	};
	useEffect(()=>{
		userData();
	},[])

    return (
      <table className="table">
     <thead>
     	<tr>
		 <th><input type="checkbox"/></th>
       	 <th>Ticket ID</th>
     	 <th>Subject</th>
     	 <th>Requester</th>
     	 <th>Requested</th>
     	 <th>Type</th>
       	 <th>Action</th>
     	</tr>
     </thead>
     <tbody>
	 
		{	
			details.map((tbdata)=>{
				const {id,subject,Requester,Priority}=tbdata;
				return(
					<>
						<tr>
						<td><input type="checkbox" className="check"/></td> 
						<td data-label="S.No">#{id}</td>
						<td data-label="Subject">{subject}</td>
						<td data-label="Requester">{Requester}</td>
						<td data-label="Requested"></td>
						<td data-label="Priority">{Priority}</td>
						<td data-label="Assigneed"><button className="btnData reply"> <Link to="../SendEmail"><RiShareForwardFill/></Link></button>
						<button className="btnData del"><RiDeleteBin7Line/></button>
						</td>
					</tr>
					</>
			 )
			}) 		
		}
		<div className="newTicket">
            <button className="btnAddticket">
			<Link to='../CreateTicket'>
				<MdAdd className="addlogo" title="Add New Tickets" />
				</Link>
			</button>
        </div>
     </tbody>
   </table>

    );
  }
  export default DataTicket;