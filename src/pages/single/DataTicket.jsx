import './dataticket.css'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows} from '../../dataSourcs';
export default function DataTicket() {
    const actionColumn =[{  field: 'action',headerName: 'Groupe', width: 90,renderCell:()=>{
        return(
            <div className='cellAation'>
                support
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
        // checkboxSelection
      />
    </div>
  );
}