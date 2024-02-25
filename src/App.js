import Home from './pages/Home';
import Navbar from './components/Navibar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './pages/Create';
import ProductDetails from './pages/ProductDetalis';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/products/:id' element={<ProductDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
