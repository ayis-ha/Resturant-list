import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className='bg-dark'>
      <Container>
        <Navbar.Brand style={{color:'#fff',fontWeight:'700'}}><i class="fa-solid fa-mug-hot me-2"></i> De-Cafes</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header