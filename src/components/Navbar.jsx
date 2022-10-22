import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Cart, Nav, NavbarBag, Quantity, Title } from '../styleComponents/Navbar.styled'
import { useNavigate } from 'react-router-dom';
export function Navbar(props) {
    const navigate = useNavigate()

    return (
        <Nav>
            <Title onClick={()=>navigate('/')}>Online Shopping</Title>
            <NavbarBag>
                <Cart>
<ShoppingCartOutlinedIcon onClick={()=>navigate('/cart')}/>
</Cart>
<Quantity>
<span>3</span>
</Quantity>
            </NavbarBag>
            
        </Nav>
    )
}
