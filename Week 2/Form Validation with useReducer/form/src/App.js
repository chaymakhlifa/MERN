import React, { useReducer } from 'react';
import formv  from './components/formv';
import './App.css';

function App() {
  const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};
  return (
    <div className="App">
      ...
return (
    ...
    {state.firstName.error !== null && (
        <p className="error">{state.firstName.error}</p>
    )}
    ...
);

    </div>
  );
}

export default App;
