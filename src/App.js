import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './compoents/Login';
import Signup from './compoents/Signup';
import Topbar from './compoents/Topbar';
import Header from './compoents/Header';
import Delete from './compoents/Delete';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/home" element={<Topbar/>} />
      <Route path="/header/:id" element={<Header/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/delete/:id" element={<Delete/>} />
      
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
