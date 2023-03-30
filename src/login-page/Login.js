import styles from "./Login.module.css"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Login(props){

    const [userName, setUserName] = useState("")
    const [password, setPassword ] = useState("")

    const Navigate = useNavigate()

const usernameHandler = (event) =>{
  const value = event.target.value
  setUserName(value)
}

const passwordHandler = (event) => {
const pass = event.target.value

setPassword(pass)
}
const submitHandler = (e) => {
    e.preventDefault()

    if(userName == "admin" && password == "admin"){
        props.onLogin(true)
        Navigate("/dashboard") 
    }
}



    return (
        <div className={styles.Login}>
            <div className={styles.welcome}>
            <h3>Welcome to deshboard, Login</h3>
            </div>
           <form type="submit" onSubmit={submitHandler}>
           <p>Username</p>
            <input type="text" onChange={usernameHandler} className={styles.inputbar}/>
            <p>Password</p>
            <input type="password" onChange={passwordHandler} className={styles.inputbar}/>
            <div>
            <span><button>LOGIN</button></span>
            <button className={styles.btn}>FORGOT YOUR PASSWORD?</button>
            </div>
           </form>
           
            
        </div>
    )
}

export default Login;