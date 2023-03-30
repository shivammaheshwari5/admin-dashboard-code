import './App.css'
import Header from "./header/Header";
import Login from "./login-page/Login";
import Footer from "./footer/Footer";
import Account from "./account-page/Account";
import Dashboard from "./dashboard/Dashboard";
import Products from "./products/Products";
import AddProducts from "./products/AddProducts";
import AddCategory from './products/AddCategory';
// import PopChart2 from './chart/PopChart2';
import {Routes, Route, Navigate} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';


function App(){

const [isLogin, setIsLogin]  = useState(false);
const [orders, setOrders] = useState([])

useEffect(() => {
  axios
    .get(`https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json`)
    .then((Response) => {
      console.log(Response);
      localStorage.setItem("data", JSON.stringify(Response.data))
      setOrders(Response.data.dasbhoardPage.orders);
    });
}, []);

  return (
    <div>
      <Header onLogout={() => setIsLogin(false)} login={isLogin}/>
      {/* <PopChart2/> */}
    <Routes>
    <Route path="/Addcategory" element={isLogin ? <AddCategory/> : <Navigate to="/React-Final-Project"/> }></Route>
      <Route path="/Addproducts" element={isLogin ? <AddProducts/> : <Navigate to="/React-Final-Project"/> }></Route>
      <Route path="/Accounts" element={ isLogin ? <Account/> : <Navigate to="/React-Final-Project"/> }></Route>
      <Route path="/React-Final-Project" element={<Login onLogin={(loginStatus) =>  setIsLogin(loginStatus)}/>}> </Route>
      <Route path="/dashboard" element={isLogin ? <Dashboard/> : <Navigate to="/React-Final-Project"/>}></Route>
      <Route path="/products" element={isLogin ? <Products/> : <Navigate to="/React-Final-Project"/>}></Route>
    </Routes> 
     <Footer/>
    </div>
  )
}

export default App;
