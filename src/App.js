import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import List from "./pages/list/List.jsx";
import Ticket from "./pages/single/Ticket.jsx";
import New from "./pages/new/New.jsx";
import {userInputs, productInputs} from "./formSource.jsx";
import SendEmail from "./sendMail/SendEmail.jsx";
import CreateTicket from "./pages/single/CreateTicket.jsx";
function App() {
  //  this line of code help to Restrict to user login first then you can go other page
    const currentUser= false;
    const RequireAuth=({children})=>{
      return currentUser ? children:<Navigate to='/Login'/>;
    }
  /////////////////////////////////////////////////////////////////////////////
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login/>}/>
          <Route path="new" element={<New inputes={userInputs} titles="Add New User"/>}/>
            <Route index element={<Home/>}/>  
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Ticket/>}/>
              <Route path="SendEmail" element={<SendEmail/>}/>
              <Route path="CreateTicket" element={<CreateTicket/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              {/* <Route path=":productsId" element={<Singel/>}/> */}
              <Route path=":new" element={<New inputes={productInputs} titles="Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
