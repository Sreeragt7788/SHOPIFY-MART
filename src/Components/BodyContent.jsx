import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import Home from './Home'
import EnquirForm from './EnquirForm';

const BodyContent = () => {
    const [dataFromChild, setDataFromChild] = useState(false);
    function handleDataFromChild(data) {
        setDataFromChild(data);
      }
  return (
    <section className="m-4">
        {
            dataFromChild === false? <Home sendDataToParent={handleDataFromChild}/> : <EnquirForm/>
        }
        
      </section>
  )
}

export default BodyContent