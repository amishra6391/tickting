    export const userColumns=[
    {
        field: 'id', 
        headerName: 'ID', 
        width: 70 
    },
    {
        field: 'Name', 
        headerName: 'Name', 
        width: 130 
    },
    {
        field: "Email", 
        headerName: "Email Id",
        width:140
    },
    {
        field: 'Ticket', 
        headerName: 'Ticket Type', 
        width:140 
    },
        {
        field: 'Message',
        headerName: 'Message',
        width: 280,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 90,
        renderCell:(prompt)=>{
            return(                
                <>
                    <div className={`ticketStatus ${prompt.row.status}`}>{prompt.row.status}</div>
                </>
            )
        }
    },
    ]
    export const userRows=[
        { 
            id: 1, 
            Ticket: 'Not Workig', 
            Email:"mishra@gmail.com",
            Name: 'Anand Mishra', 
            Message: "this is problum feauld you can write the data here", 
            status:"rejected" 
        },
        {
             id: 2,
             Ticket: 'fail to connect',
             Email:"abc@gmail.com",
             Name: 'Amit Singh',
             Message: "this is problum feauld you can write the data here",
             status:"pending"
         },
        { 
            id: 3,
            Ticket: 'not getting data', 
            Email:"cdf@gmail.com", 
            Name: 'Ajay Shukla',
            Message: "this is problum feauld you can write the data here", 
            status:"done" 
        },
        { 
            id: 4, 
            Ticket: 'Not getting', 
            Email:"ghi@gmail.com", 
            Name: 'Rahul sharma',
            Message: "this is problum feauld you can write the data here", 
            status:"pending"
         },
        { 
            id: 5, 
            Ticket: 'buttun not wirking', 
            Email:"klk@gmail.com", 
            Name: 'Ali baba',
            Message: "this is problum feauld you can write the data here", 
            status:"pending" },
        { 
            id: 6, 
            Ticket: 'not fine', 
            Email:"mno@gmail.com", 
            Name: " AbuShalim ",
            Message: "this is problum feauld you can write the data here", 
            status:"pending" },
        { 
            id: 7, 
            Ticket: 'every thing good',
            Email:"mmc@gmail.com", 
            Name: 'Ram Singh',
            Message: "this is problum feauld you can write the data here", 
            status:"done"
         },
         { 
            id: 8, 
            Ticket: 'happy', 
            Email:"ccc@gmail.com", 
            Name: 'Utkarsh Mishra', 
            Message: "this is problum feauld you can write the data here", 
            status:"done",
         },
        { 
            id: 9, 
            Ticket: 'ver nice', 
            Email:"hola@gmail.com", 
            Name: 'Ritesh pandey',
            Message: "this is problum feauld you can write the data here", 
            status:"pending" ,
        },
        { 
            id: 10, 
            Ticket: 'ver nice', 
            Email:"misc@gmail.com", 
            Name: 'Ritesh shukla',
            Message: "this is problum feauld you can write the data here", 
            status:"pending"
        },
        { 
            id: 11, 
            Ticket: 'ver nice', 
            Email:"dis@gmail.com", 
            Name: 'Ritesh tiwari',    
            Message: "this is problum feauld you can write the data here", 
            status:"done" 
        },
    ];