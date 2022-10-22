import styled from "styled-components";


export const HomeContainer = styled.div`
padding: 2rem 4rem;

`
export const Title = styled.h2`
font-size: 20px;
font-weight: 400;
text-align: center;

`
export const Products = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 2rem;

`

export const Product = styled.div`
width: 250px;
max-width: 100%;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 1rem auto;
padding: 1rem;
border-radius: 10px;
box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 2px 2px 5px rgba(94, 104, 121, 0.3)

`

export const Details = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
export const Price = styled.span`
font-size: 20px;
font-weight: 700;


`
export const Button = styled.button`
width: 100%;
height: 40px;
margin-top: 2rem;
border: none;
outline: none;
font-weight: 400;
cursor: pointer;
background-color: #4b70e2;
color: white;

`