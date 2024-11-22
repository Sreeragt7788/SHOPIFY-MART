import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const EnquirForm = () => {
    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        enquiry: ""
    })

    const [fullNameError, setFullNameError] = useState("");
    const [confirmForm, setConfirmForm] = useState(false);
    const [showSuccessMsg, setSuccessMsg] = useState(false);

    useEffect(() => {
        validate();
    }, [formValues.fullName])


    const handleInput = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    const validate = () => {
        if (formValues.fullName.length > 25) {
            setFullNameError("You have entered a long name, Enter a valid name.");
        } else {
            setFullNameError("");
        }
    }

    const handleContactDetails = (event) => {
        console.log(" form values", formValues)
        event.preventDefault();
        setConfirmForm(true)
    }


    return (
        <>
            {
                confirmForm === false &&
                <Form onSubmit={handleContactDetails} className='d-flex flex-column justify-content-start enquireForm'>
                    <h2>PRODUCT ENQUIRY FORM</h2>
                    <TextFeild
                        label="Name"
                        type="text"
                        name="fullName"
                        placeholder="Enter your name here"
                        required
                        onChange={handleInput}
                        error={fullNameError}
                    />
                    <TextFeild
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="testmail@gmail.com"
                        required
                        onChange={handleInput}
                    />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enquiry</Form.Label>
                        <Form.Control as="textarea" rows={3} name="enquiry" required placeholder="What would you like to know?" onChange={handleInput} />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Send Enquiry
                    </Button>
                </Form>
            }

            {
                confirmForm === true &&
                <Card className="confirmCard mx-2">
                    <Card.Header>Confirm Your Details</Card.Header>
                    <Card.Body className="confirmBody">
                       
                        <span><label>Name : </label> {formValues.fullName}</span><br />
                        <span><label>Email : </label> {formValues.email}</span><br />
                        <span><label>Product Enquiry : </label> {formValues.enquiry}</span><br />
                        
                    
                        <Button variant="secondary" className="confirmSubmit" href="/EnquireMart/#/success">Confirm</Button>
                    </Card.Body>
                </Card>
              
            }
        </>


    )
}

export default EnquirForm

const TextFeild = ({ label, mutedText, error, ...props }) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control {...props} />
            {
                error &&
                <div className="text-danger">{error}</div>
            }
            {
                mutedText &&
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            }
        </Form.Group>
    )

}