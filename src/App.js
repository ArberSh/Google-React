import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import './App.css';
import Home from './pages/Home'
import Search from './pages/Search'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
