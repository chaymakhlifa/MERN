import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header firstName={ "Bill" } lastName={ "Justice" } />
      </header>
    </div>
  );
}

export default App;
