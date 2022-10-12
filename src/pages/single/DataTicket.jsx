import './dataticket.css'
import {RiShareForwardFill} from "react-icons/ri"
import {MdOutlineDeleteOutline} from "react-icons/md";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows} from '../../dataSourcs';
export default function DataTicket() {
    const actionColumn =[{  field: 'action',headerName: 'Action', width: 90,renderCell:()=>{
        return(
            <div className='cellAation'>
                <div className='replyTo'> <RiShareForwardFill/></div>
                <div className='delete'> <MdOutlineDeleteOutline/></div>
            </div>
        )
    }}];
  return (
    <div className='dataTicket'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
}