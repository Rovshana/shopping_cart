import React, { useState, useEffect } from 'react'
import { productApi } from '../Api/Product'
import { Button, Details, HomeContainer, Price, Product, Products, Title } from '../styleComponents/Home.styled'

 function Home(props) {
    const [data, setData] = useState([])
   useEffect(() => {
    getData()
   }, [])
    const getData = ()=>{
        productApi.then(res=>{
            setData(res.data.bags)
            console.log(res)
        })
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
                <Button>Add to cart</Button>

            </Product>
           

            
        ))
       }
       </Products>
      
            
        </HomeContainer>
    )
}
export default Home