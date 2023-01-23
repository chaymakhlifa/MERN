import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <h1>First React page rendering...</h1>
    <script>
    const App = React.createElement("h1", {}, "Our First React page has rendered");
    ReactDOM.render(App, document.getElementById("root"));
    </script>


    </div>
  );
}

export default App;
