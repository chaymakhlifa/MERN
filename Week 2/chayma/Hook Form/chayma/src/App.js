import React, { useState } from  'react';
import App from './components/UserForm';
import './App.css';
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmP, setConfirmP] = useState(""); 
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            username: username, 
            email: email, 
            password: password 
        };
        console.log("Welcome", newUser);
    };
    
    return(
      <div className='App'>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) }/>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="text" onChange={ (e) => setConfirmP(e.target.value) } />
            </div>

            <input type="submit" value="Your Form Data" />
          
        </form>
        <h1>first name :{username}</h1>
        <h1>last name :{lastname}</h1>
        <h1>email :{email}</h1>
        <h1>password :{password}</h1>
        <h1>confirm passwword :{confirmP}</h1>
      </div>
        
    );
    
};
    
export default UserForm;

