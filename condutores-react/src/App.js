import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Condutores from "./views/Condutores";
import Navbar from "./components/Navbar";
import AddCondutor from "./views/AddCondutor";
import UpdateCondutor from "./views/UpdateCondutor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="" Component={Home}></Route>
            <Route path="condutores" Component={Condutores}></Route>
            <Route path="addCondutor" Component={AddCondutor}></Route>
            <Route
              path="updateCondutor/:idParam"
              Component={UpdateCondutor}
            ></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
