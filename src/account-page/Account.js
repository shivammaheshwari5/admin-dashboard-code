import { useEffect, useState } from "react";
import styles from "./Account.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
function Account(){

const [accountType, setAccountType] = useState("")
const [accountName, setAccountName] = useState("")
const [accountEmail, setAccountEmail] = useState("")
const [password, setPassword] = useState("")
const [phone, setPhone] = useState("")
const [pic, SetPic] = useState("")

const accData = JSON.parse(localStorage.getItem("data"));
const accountData = accData.accountsPage

useEffect(() =>{
if(accountType == 'Admin'){
    setAccountName(accountData.Admin.name)
    setAccountEmail(accountData.Admin.email)
    setPassword(accountData.Admin.password)
    setPhone(accountData.Admin.phone)
    SetPic(accountData.Admin.profilePic)
}
else if(accountType == 'Editor'){
    setAccountName(accountData.Editor.name)
    setAccountEmail(accountData.Editor.email)
    setPassword(accountData.Editor.password)
    setPhone(accountData.Editor.phone)
    SetPic(accountData.Editor.profilePic)
}
else if(accountType == 'Merchant'){
    setAccountName(accountData.Merchant.name)
    setAccountEmail(accountData.Merchant.email)
    setPassword(accountData.Merchant.password)
    setPhone(accountData.Merchant.phone)
    SetPic(accountData.Merchant.profilePic)
}
else{
    setAccountName(accountData.Customer.name)
    setAccountEmail(accountData.Customer.email)
    setPassword(accountData.Customer.password)
    setPhone(accountData.Customer.phone)
    SetPic(accountData.Customer.profilePic)
}
})
const selectHandler = ((e) => {
setAccountType(e.target.value)
})

    return (
        <div className={styles.container}>
       <div className={styles.Account}>
       <h5>List of Accounts</h5>
       <p>Accounts</p>
       <select value={accountType} className={styles.select} onChange={selectHandler}>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Merchant">Merchant</option>
        <option value="Customer">Customer</option>
       </select>
       </div>
       <div className={styles.formMainDiv}>
        <div className={styles.accountImg}>
            <h2>Change Avatar</h2>
            <div className={styles.imageDiv} >
           <img src={pic} className={styles.imgDiv} alt="avatar"/>
           
           <div className={styles.deletePic}>
           <RiDeleteBin6Line/>
           </div>
           </div>
            <button className={styles.loadbtn}>UPLOAD NEW PHOTO</button>
        </div>
        <div className={styles.accounForm}>
            <div className={styles.formdiv}>
                <h2>Account Settings</h2>
                <form className={styles.form}>
                    <div className={styles.formContent}>
                        <label htmlFor="name">Account Name</label>
                        <input value={accountName} onChange={(e) => setAccountName(e.target.value)} type="text" name="name"/>
                    </div>
                    <div className={styles.formContent}>
                    <label htmlFor="Email">Account Email</label>
                        <input value={accountEmail} onChange={(e) => setAccountEmail(e.target.value)} type="email" name="Email"/>
                    </div >
                    <div className={styles.formContent}>
                    <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"/>
                    </div>
                    <div className={styles.formContent}>
                    <label htmlFor="password2">Re-enter Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password2"/>
                    </div>
                    <div className={styles.formContent}>
                    <label htmlFor="phone">Phone</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" name="phone"/>
                    </div>
                    <div>
                        <button type="submit" className={styles.btn1}>Update Your Profile</button>
                    </div>
                    <div>
                        <button type="submit"  className={styles.btn2}>Delete Your Account</button>
                    </div>
                </form>
            </div>
        </div>
       </div>
        </div>
    )
}

export default Account;