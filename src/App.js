import Home from './pages/Home';
import Navbar from './components/Navibar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
