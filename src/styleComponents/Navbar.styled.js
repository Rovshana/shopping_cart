import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
height: 70px;
background-color: black;
align-items: center;
color: white;
padding: 0 4rem;
`
export const Title = styled.h2`
font-size: 40px;
cursor: pointer;
border-bottom: 2px solid white;
&:hover{
    color: purple;
    border-bottom: 2px solid purple;
}

`
export const NavbarBag = styled.div`
display: flex;
align-items: center;

`
export const Cart = styled.div`
cursor: pointer;
&:hover{
    color: purple;
}
`
export  const Quantity = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 25px;
height: 25px;
border-radius: 50%;
background-color: yellow;
color: black;
font-size: 14px;
font-weight: bold;
margin-left: 5px;

`