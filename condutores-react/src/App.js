import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Condutores from './views/Condutores';
import Navbar from './components/Navbar';
import AddCondutor from './views/AddCondutor';

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
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

