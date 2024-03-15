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


function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/consult-here" element={<ConsultHere />} />
          <Route path='/login' element={<Login />} />
          <Route path="/order-medicine" element={<OrderMedicine />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
