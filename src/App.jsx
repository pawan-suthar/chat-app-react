import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/Home";
import { UserProvider } from "../context/authcontext";

const App = () => {
  return(
    <>
  <UserProvider>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      
    </Routes>
    </UserProvider>
    
    </>
  );
};

export default App;

