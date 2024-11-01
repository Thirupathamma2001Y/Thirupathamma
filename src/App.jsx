import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Cart from './Cart';
import PurchaseHistory from './PurchaseHistory';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';
import GoogleLoginComponent from './GoogleLoginComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId='1030046222017-tf81i1csvp76ek0p3mirr8c5j4alhov4.apps.googleusercontent.com'>
      <BrowserRouter>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/veg">Veg Items</Link>
          <Link to="/nonveg">Non-Veg Items</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/purchasehistory">Purchase History</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
        </nav>
        <GoogleLoginComponent />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/veg' element={<Veg />} />
          <Route path='/nonveg' element={<NonVeg />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchasehistory' element={<PurchaseHistory />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/' element={<Home />} /> {/* Default route */}
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;

