import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 className="id">MY TODO</h1>
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
