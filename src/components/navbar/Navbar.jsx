import React from 'react';
import {
    NavContainer,
    RightSideNav,
    LeftSideNav,
    NavMenuContainer,
    Menu,
    MenuItem,
    LeftSideWrapper,
    ButtonsContainer,
    NumberContainer,
    BasketIconButton,
    GoToUserAccountsBtn
} from './Navbar.elements';
import {Row,Col} from 'react-bootstrap';
import {navbarItems} from './navbarItems';
import {CiShoppingBasket} from 'react-icons/ci';





const Navbar = () => {
    return (
        <NavContainer fluid className="">
            <Row className=''>
                {/* includes Logo and Menu Items */}
                <RightSideNav xs={8} className="">
                    <Row className=''>
                        {/* logo Container */}
                        <Col  
                            xs={3} 
                            className=""
                        >
                            
                        </Col>
                        {/* Navbar Items Container */}
                        <Col 
                            xs={9} 
                            className=""
                        >
                            <NavMenuContainer className=''>
                                <Menu className='d-flex align-items-center h-100'>
                                    {navbarItems && navbarItems.map((item) => (
                                        <MenuItem key={item.id}>{item.title}</MenuItem>
                                    ))}
                                </Menu>
                            </NavMenuContainer>
                        </Col>
                    </Row>
                </RightSideNav>
                {/* includes Navbar Buttons */}
                <LeftSideNav xs={4} className="">
                    <LeftSideWrapper className='d-flex justify-content-center align-items-center h-100'>
                        <NumberContainer className='d-flex me-2'>
                            <p className='text-center mb-0 px-2 py-2'>0216328596</p>
                            <p className='text-center mb-0 px-2 py-2'>شماره تماس</p>
                        </NumberContainer>
                        <ButtonsContainer className='d-flex ms-2'>
                            <BasketIconButton className="rounded px-3 py-2 me-1">
                                <CiShoppingBasket />
                            </BasketIconButton>   
                            <GoToUserAccountsBtn 
                                type="button"
                                className="px-3 py-2 ms-1"
                            >
                                حساب کاربری
                            </GoToUserAccountsBtn>
                        </ButtonsContainer>


                    </LeftSideWrapper>
                </LeftSideNav>     
            </Row>
        </NavContainer>

    )
}

export default Navbar;