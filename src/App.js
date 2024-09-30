import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import CodeState from './Context/CodeState'

function App() {
  return (
    <CodeState>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<> <Navbar /> <Home /> </>} />
        </Routes>
      </BrowserRouter>
    </CodeState>
  );
}

export default App;