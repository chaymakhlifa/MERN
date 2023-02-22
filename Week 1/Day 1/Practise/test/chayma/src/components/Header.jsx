import React from 'react';
    
const Header = (props) => {
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    return (
        <div>
            <h1>
                My name is {props.firstName} {props.lastName}
            </h1>
        </div>
    );
}
export default Header;