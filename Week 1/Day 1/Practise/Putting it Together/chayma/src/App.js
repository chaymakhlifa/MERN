import React from 'react';
import logo from "./components/App"
import './App.css';

function App() {
  return (
    <div className="App">
      <product>
        title={"dehydrated Water"}
        desc={"Just add 2 cups of water for a refreshing dring"}
        cost={49.99}
        initialStock={5}
      </product>
      <product>
        title={"Toy Car"}
        desc={"Made out of leges"}
        cost={19.99}
        initialStock={5}
      </product>
      <product>
        title={"iPad"}
        desc={"Really expensive toy"}
        cost={49.99}
        initialStock={5}
      </product>
    </div>
  );
}

export default App;
