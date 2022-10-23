import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productApi } from '../Api/Product'
import { addToCart } from '../store/slices/cartSlice'
import { Button, Details, HomeContainer, Price, Product, Products, Title } from '../styleComponents/Home.styled'

 function Home(props) {
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
   useEffect(() => {
    getData()
   }, [])
    const getData = ()=>{
        productApi.then(res=>{
            setData(res.data.bags)
            console.log(res)
        })
    }
    const handleAddToCart = (product)=>{
dispatch(addToCart(product))
navigate('/cart')
    }

    return (
        <HomeContainer className='container'>
       <Title>New Arrivals</Title>
       <Products>
       {
        data?.map((product, index)=>(
            <Product key={index}>
                <h2>{product.brand}</h2>
                <img src={product.image}  alt={product.brand} style={{width: "90%", marginTop: '1rem', marginRight: "auto", marginLeft: "auto"}}/>
                <Details>
                    <span>{product.des}</span>
                    <Price>{product.price}$</Price>

                </Details>
                <Button onClick={()=>handleAddToCart(product)}>Add to cart</Button>

            </Product>
           

            
        ))
       }
       </Products>
      
            
        </HomeContainer>
    )
}
export default Home