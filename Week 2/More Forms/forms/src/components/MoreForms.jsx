import React, { useState } from  'react';

// import '../App.css';

const UserForm= (props) => {
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
                <input type="text" placeholder="search" onChange={ (e) => setUsername(e.target.value) }/><br></br>
                <p>First Name must be at least 2 characters</p>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" placeholder="search" onChange={ (e) => setLastname(e.target.value) } /><br></br>
                <p>last Name must be at least 2 characters</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" placeholder="search" onChange={ (e) => setEmail(e.target.value) } /><br></br>
                <p>Email must be at least 2 characters</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" placeholder="search" onChange={ (e) => setPassword(e.target.value) } /><br></br>
                <p>Password must match</p>
            </div>
            <div>
                <p>Password must be at least 8 chracters</p>
                <label>Confirm Password: </label> 
                <input type="text" placeholder="search" onChange={ (e) => setConfirmP(e.target.value) } /><br></br>
                
            </div>

        </form>
      </div>
        
    );
    
};
    
export default UserForm;

