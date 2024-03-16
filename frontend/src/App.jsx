import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import PageNotFound from './pages/PageNotFound'
import ContactUs from './pages/ContactUs'
import ConsultHere from './pages/ConsultHere'
import Login from './pages/Login'
import OrderMedicine from './pages/OrderMedicine'
import UserState from './contexts/UserState'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <UserState>

          <Navbar />
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss

          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/consult-here" element={<ConsultHere />} />
            <Route path='/login' element={<Login />} />
            <Route path="/order-medicine" element={<OrderMedicine />} />

          </Routes>
        </UserState>
        <Footer />
      </Router>
    </>
  )
}

export default App
