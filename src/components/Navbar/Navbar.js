import React, { useState } from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

import images from '../../constants/images';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <StyledNav className='navbar drop-shadow'>
        <div className="navbar-logo">
            <img src={images.logo} alt="navbar logo" />
            <h3>Covid Tracker</h3>
        </div>
        <ul className="navbar-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><a href="https://github.com/kiranhart/covid-tracker" target="_blank" rel="noreferrer" >Code</a></li>
        </ul>
        <div className="navbar-mobile">
            <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />

            {toggleMenu && <div className="navbar-mobile-overlay">
                <IoMdClose fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)} />

                <ul className="navbar-mobile-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a href="https://github.com/kiranhart/covid-tracker" target="_blank" rel="noreferrer" >Code</a></li>
                </ul>
            </div>}

        </div>
    </StyledNav>;
};

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    .navbar-logo {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        h3 {
            margin-left: 1.3rem;
        }
    }

    .navbar-logo img {
        width: 50px;
    }

    .navbar-links {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
    }

    .navbar-links li {
        margin: 0 1rem;
        cursor: pointer;
    }

    .navbar-mobile {
        display: none;
    }

    .navbar-mobile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        transition: 0.5s ease;
        flex-direction: column;
        z-index: 5;
    }

    .overlay-close {
        font-size: 27px;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;    
    }

    .navbar-mobile-links{
        text-align: center;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;

        li {
            cursor: pointer;
            font-size: 1.25rem;
        }
    }

    @media screen and (max-width: 1150px) {
        .navbar-links {
            display: none;
        }
        
        .navbar-mobile {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            align-items: center;
            list-style: none;
        }
    }

    @media screen and (max-width: 650px) {
        padding: 1rem;

        .navbar-logo img {
            width: 40px;
        }
    }
`;

export default Navbar;
