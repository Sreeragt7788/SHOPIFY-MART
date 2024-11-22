import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx'
import EnquirForm from './Components/EnquiryForm.jsx';
import Success from './Components/Success.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode basename="/app">
    {/* <RouterProvider router={router} /> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product-enquiry" element={<EnquirForm />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
