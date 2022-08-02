import { useState } from 'react';
import { Container,Navbar,Nav,Modal,Button,Col,Row } from 'react-bootstrap';
import {MdPolymer} from 'react-icons/md';
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai';
import {BsPerson,BsTruck} from 'react-icons/bs';
import {BiArrowBack} from 'react-icons/bi';
import './App.css';
import PaymentMethods from './components/paymentmethods';
import DeliveryMethods from './components/deliverymethods';
import Cart from './components/cart';
import Form from './components/form';
import Login from './components/login';
function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <MdPolymer style={{fontSize:'36px'}} />
            <Navbar.Text> <span style={{fontWeight:'bold',color:'rgba(250,199,116,255)'}}>E</span>-Shop</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle className='mr-auto' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex gap-lg-5 mx-auto">
              <Nav.Link>Men</Nav.Link>
              <Nav.Link>Women</Nav.Link>
              <Nav.Link>Kids</Nav.Link>
            </Nav>
            <Nav className="dlflex gap-lg-4 mr-auto">
              <Nav.Link><AiOutlineSearch /></Nav.Link>
              <Nav.Link><AiOutlineShoppingCart /></Nav.Link>
              <Nav.Link><BsPerson /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <hr />
      <Row className='px-sm-0 px-3 mt-5 justify-content-center'>
        <Col lg={5}>
          <Row className="mb-5">
            <h6>Shipping and Payment</h6>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex gap-3">
              <Button variant='dark' className='rounded-pill button-green' onClick={() =>handleShow()}>Log In</Button>
              <Button variant='dark' className='rounded-pill button-normal'>Sign Up</Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col> Shipping Information</Col>
          </Row>
          <Form />
        </Col>
        <Col lg={6}>
          <Row className='justify-content-lg-end  justify-content-start mt-2 mb-5'>
            <Col xs={2} className='text-end'>
              <AiOutlineShoppingCart size ='2em' className='border border-success rounded-circle p-1'/>
            </Col>
            <Col xs={2}>
              <div style={{borderTop:'1px solid rgb(239,240,239)',marginTop:'14px'}}></div>
            </Col>
            <Col xs={1} className='text-start'>
              <BsTruck style={{backgroundColor:'rgba(122,208,167,255)'}} size ='2em' className='border border-success rounded-circle p-1'/>
            </Col>
          </Row>
          <Row>
            <Col sm lg={6}>
              <PaymentMethods />
              <DeliveryMethods />
            </Col>
            <Col sm lg={6}>
              <Cart />
            </Col>
          </Row>
        </Col>
        <Row className='mb-5 gap-3'>
          <Col xs={4} sm={2} style={{cursor:'pointer'}}><BiArrowBack/> Back</Col>
          <Col sm className='d-flex justify-content-md-end justify-content-center gap-3'>
            <Button variant='dark' size='sm' className='rounded-pill button-normal'>Continue Shopping</Button>
            <Button variant='dark'size='sm' className='rounded-pill button-green'>Proceed To Payment</Button>
          </Col>
        </Row>
      </Row>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex vh-75 align-items-center justify-content-center p-3">
            <div className="d-flex flex-column col-lg-5 gap-4 align-items-center shadow p-5 mb-5 bg-white rounded ">
                <Login />
                {/* <Link to="/signup" className="d-grid text-right" style={linkstyles}>Don't have an account?  Click Here to sign up</Link> */}
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Container>
    
  );
}

export default App;
