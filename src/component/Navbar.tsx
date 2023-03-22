import { Button, Container, Nav, Navbar as NavComp } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <NavComp sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            <Button 
                style={{width: '3rem', height: '3rem', position: 'relative'}} variant='outline-primary'
                className='rounded-circle'
                >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                <div className='rounded-circle bg-danger d-flex justify-content-center align-item-center' 
                style={{ 
                    color: 'white', 
                    width: '1.5rem', 
                    height: '1.5rem', 
                    position: 'absolute', 
                    bottom: 0, 
                    right: 0,
                    transform: 'translate(25%, 25%)'
                    }}
                >3</div>
            </Button>
        </Container>
    </NavComp>
  )
}
