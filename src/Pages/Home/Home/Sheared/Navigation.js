import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';


const Navigation = () => {
    const { user,logOut } = useAuth()
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
                    sticky="top">
                    <Container>
                        <Navbar.Brand to="/home">Carzoo</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="">
                            <NavLink className="text-decoration-none mx-3 text-light d-block" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none mx-3 text-light d-block" to="/explore">Explore </NavLink>
                            {
                                user?.email ? <NavLink className="text-decoration-none mx-3 text-light d-block" to="/dashboard">Dashboard </NavLink>
                                    :
                                    <NavLink className="text-decoration-none mx-3 text-light d-block" to="/login">Log in </NavLink>
                            }
                            {
                                user.email && <button onClick={logOut} type="button" class="d-block m-2 btn btn-warning btn-sm ">Log Out</button>
                            }
                           { user?.email && <span
                               className='mx-3'
                                style={{ color: 'yellow' }}
                            >  Hello  {user.displayName}</span>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Navigation;