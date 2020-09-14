import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../actions";
import { Modal, Button } from "react-bootstrap";

const DeleteContact = ({ contactId }) => {
  const dispatch = useDispatch();
  const [isShow, setShow] = useState(false);
  const handleShow = () => {
    setShow(!isShow);
  };
  const handleDelete = () => {
    dispatch(deleteContact(contactId));
    handleShow();
  };
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={isShow} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Delete contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            No
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteContact;
