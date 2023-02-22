import React,{ useState } from 'react';
import App from "./components/App";
const App = (props) => {
    const [ inStock, setInStock ] = useState(5);

    return (
        <div>
            <h2>{ props. title}</h2>
            <p>Descipition: { props. desc }</p>
            <p>Cost: $</p>
            <p>In Stock: { inStock}</p>
            <button onClick={ (event)=>setInStock(inStock -1)}>buy{props.title}</button>
        </div>
    )
}
export default putting;