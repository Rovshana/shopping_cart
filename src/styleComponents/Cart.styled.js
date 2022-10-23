import styled from 'styled-components'

export const CartContainer = styled.div`
padding: 2rem 4rem;


`
export  const Title = styled.h3`
font-weight: 400;
font-size: 20px;
text-align: center;

`
export const Titles = styled.div`
margin: 2rem 0 1rem 0;
display: grid;
align-items: center;
grid-template-columns: 3fr 1fr 1fr 1fr;
column-gap: 0.5rem;
`
export const ProductTitle = styled.h2`
text-transform: uppercase;
font-size: 14px;
font-weight: 400;
padding-left: 0.5rem;

`
export const Quantity = styled.h2`
text-transform: uppercase;
font-size: 14px;
font-weight: 400;
`

export const Price = styled.h2`
text-transform: uppercase;
font-size: 14px;
font-weight: 400;

`
export const Total = styled.h2`
text-transform: uppercase;
font-size: 14px;
font-weight: 400;
padding-right: 0.5rem;
justify-self: right;
`

export const CartItems = styled.div`
display: grid;
align-items: center;
grid-template-columns: 3fr 1fr 1fr 1fr;
column-gap: 0.5rem;


`
export const CartItem = styled.div`

padding: 1rem 0;

`
export const CartProduct = styled.div`
display: flex;
border-top: 1px solid red;

`
export const Image = styled.img`
width: 100px;
margin: 1rem;
max-width: 100%;

`
export const ItemBrand = styled.h2`
font-weight: 400;


`
export const Remove = styled.button`
border: none;
outline: none;
margin-top: 0.7rem;
cursor: pointer;
background: none;
color: gray;
`

export const ItemInfo = styled.p`

`

export const ItemPrice = styled.div`
`

export const ItemQuantity = styled.div`

`

export const ItemTotal = styled.div`

`
export const CartSummary = styled.div`


`