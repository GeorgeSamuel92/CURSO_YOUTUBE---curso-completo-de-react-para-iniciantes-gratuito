import Home from './pages/Home';
import Navbar from './components/Navibar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './pages/Create';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
