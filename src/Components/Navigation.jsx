import React, {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    const [key, setKey] = useState("link-1")
    
    useEffect(() => {
      // Set the active tab based on the current location
      if (location.pathname.includes("product-enquiry")) {
        setKey("link-2");
      } else if(location.pathname.includes("home")) {
        setKey("link-1");
      } else {
        setKey("");
      }
    }, [location]);

  return (
    <Nav variant="tabs" activeKey={key} onSelect={(eventKey) => setKey(eventKey)}>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/EnquireMart/#/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="/EnquireMart/#/product-enquiry">Product Enquiry</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation