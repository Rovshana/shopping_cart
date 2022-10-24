import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Cart, Nav, NavbarBag, Quantity, Title } from '../styleComponents/Navbar.styled'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export function Navbar(props) {
    const navigate = useNavigate()
const cart = useSelector(state=>state.cart)
console.log(cart)
    return (
        <Nav>
            <Title onClick={()=>navigate('/')}>Online Shopping</Title>
            <NavbarBag>
                <Cart>
<ShoppingCartOutlinedIcon onClick={()=>navigate('/cart')}/>
</Cart>
<Quantity>
<span>{cart.cartTotalQuantity}</span>
</Quantity>
            </NavbarBag>
            
        </Nav>
    )
}
