import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addContact } from "../actions";
import shortid from "shortid";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const AddContact = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    phone: null,
    email: null,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addContact({
        id: shortid.generate(),
        ...inputs,
      })
    );
    history.push("/");
  };
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md="4">
          <Form onSubmit={handleSubmit}>
            <h4>Add Contact</h4>
            <Form.Group>
              <Form.Control
                name="email"
                value={inputs.email || ""}
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                name="phone"
                value={inputs.phone || ""}
                placeholder="Phone"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddContact;
