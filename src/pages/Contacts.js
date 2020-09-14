import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import DeleteContact from "../components/DeleteContact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md="6">
          <ListGroup>
            {contacts.map((contact) => (
              <ListGroup.Item key={contact.id} className="d-flex">
                <div className="mr-auto">
                  {contact.email}
                  <br />
                  <small>{contact.phone}</small>
                </div>
                <DeleteContact contactId={contact.id} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
