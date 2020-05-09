import React from 'react';

import {  Button, Modal, Form, Col } from 'react-bootstrap';

export function ModalRegister(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create Company
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={ event => props.createregister(event) }>
                    <Modal.Body>
                        <div id="erro">
                            <p id="msgErro"></p>
                        </div>
                            <Form.Row>
                                <Col>
                                    <Form.Label className="mb-2">Name</Form.Label>
                                    <Form.Control name="nameCompany" onChange={ event => props.handleModalRegister(event) } placeholder="Name Company" />
                                </Col>

                                <Col>
                                    <Form.Label className="mb-2">E-mail</Form.Label>
                                    <Form.Control name="emailCompany" type="email" placeholder="E-mail Company" onChange={ event => props.handleModalRegister(event) }/>
                                </Col>
                            </Form.Row>

                            <Form.Row className="mt-3">
                                <Col>
                                    <Form.Label className="mb-2">City</Form.Label>
                                    <Form.Control name="cityCompany" placeholder="City Company" onChange={ event => props.handleModalRegister(event) }/>
                                </Col>
                            </Form.Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
                        <Button type="submit">Register</Button>
                    </Modal.Footer>
                </Form> 
            </Modal>
        </>
    )
}

export function ModalRemove(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Company
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Label className="mb-2">ID Company</Form.Label>
                            <Form.Control placeholder="Number ID Company" type="text" name="numberID" onChange={ event => props.setRemoveInputValue(event.target.value) }/>
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
                <Button variant="danger" onClick={ event => props.RemoveData(event) }>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}

export function ModalUpdate(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Company
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Col className="mb-3">
                            <Form.Label className="mb-2">ID Company</Form.Label>
                            <Form.Control placeholder="Number ID Company" type="text" name="IdCompany" onChange={ event => props.handleModalUpdate(event) }/>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col>
                            <Form.Label className="mb-2" >Name</Form.Label>
                            <Form.Control placeholder="Name Company" name="name" onChange={ event => props.handleModalUpdate(event) }/>
                        </Col>
                        

                        <Col>
                            <Form.Label className="mb-2">E-mail</Form.Label>
                            <Form.Control placeholder="E-mail Company" type="email" name="email" onChange={ event => props.handleModalUpdate(event) }/>
                        </Col>
                    </Form.Row>

                    <Form.Row className="mt-3">
                        <Col>
                            <Form.Label className="mb-2">City</Form.Label>
                            <Form.Control placeholder="City Company" name="city" onChange={ event => props.handleModalUpdate(event) } />                            
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
                <Button variant="info" onClick={event => props.UpdateData(event)}>Update</Button>
            </Modal.Footer>
        </Modal>
    )
}