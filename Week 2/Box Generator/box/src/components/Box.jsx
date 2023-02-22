import React,{ useState } from "react";


const Box = ()=>{
const [msg, setMsg] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();
console.log(msg)
};

    return (
        <div>
            <h1>Color</h1>
            <form  onSubmit={ handleSubmit }>
            <input className="sun"  onChange={ (e) => setMsg(e.target.value)} value={ msg }/>

            <button className="btn" >Add</button>
            </form>
            {msg}
            <div className="box">
                <div style={{backgroundColor: "red", height: "50px" ,width: "80px"}}>
                </div>
                
            </div>
        </div>
        
    )
}



export default Box;