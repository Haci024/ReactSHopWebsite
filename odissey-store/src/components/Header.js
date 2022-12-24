import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';

import { Link } from "@reach/router";
import { useCart } from "react-use-cart";
import Logo from '../images/Shopping-website-logo.png'
import Shopping from '../icons/shopping-cart.png';
import Message from '../icons/messenger.png';
import Sun from '../icons/sun.png';
import Moon from '../icons/moon.png';


const Header = () => {
    const { theme, setThemeMode } = useContext(ThemeContext); 
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(()=>{
        setThemeMode(darkMode);
        console.log(darkMode)
    },[darkMode]);

    const { 
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <Navbar collapseOnSelect expand="md"
                variant={darkMode? 'dark':'light'}
                className={darkMode? 'bg-light-black border-bottom': 'bg-light border-bottom'}
                style={{ width: '100%', position: 'fixed', zIndex: 100}}
        >
        <Container>
          <Link to="/">
            <Navbar.Brand className={darkMode? 'text-dark-primary': 'text-light-primary'}>
               <img src={Logo} style={{width:"300px",height:"100px"}}/>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             
              <Nav.Link 
                className={darkMode? 'text-dark-primary': 'text-light-primary'}
                onClick={()=>setDarkMode(!darkMode)} style={{paddingRight:"30px"}}
              >
                {darkMode? <img src={Moon} style={{width:"30px"}}/>: <img src={Sun} style={{width:"30px"}}/>}
              </Nav.Link>
              <Link
                to="/cart"
                className={`${darkMode? 'text-dark-primary': 'text-light-primary'} d-flex align-items-center`}
              >
                <img src={Shopping} style={{width:"50px"}}/>
                {!isEmpty && <span style={{ backgroundColor:'#3014ff',color:"white",textAlign:"center",borderRadius:'50%',width:'30px',height:'30px', position: 'relative', top:'-20px',right:'10px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0}}></span>
              </Link>
              <Link to="/message" className={`nav-link ${darkMode? 'text-dark-primary': 'text-light-primary'}`}>
                 <img src={Message} style={{width:"60px", paddingLeft:"20px"}}/>
              </Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;