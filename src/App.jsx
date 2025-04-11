import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from '../components/layout';
import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Products from '../pages/products';
import Courses from '/pages/courses';
import Cart from '../pages/cart';
import Checkout from '../pages/checkout';
import Login from '../pages/login';
import Signup from '../pages/signup';


function App() {

  const isAuthenticated = false;

  return (
      <Router>
        <div>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/product/:id" element={<Products />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Login />}
            />
          </Routes>
        </div>
      </Router>

  );
}

export default App
