import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Bottom, Button, Details, HR, Image, Info, PriceDetails, Product, ProductAmmountConatiner, ProductAmount, ProductDetail, ProductPrice, Summary, SummaryItem, SummaryTitle, Title, Top, TopButton, TopText, Wrapper } from '../styleComponents/CartPage.styled'
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { addToCart, decreaseQuantity, getTotal, removeFromCart } from '../store/slices/cartSlice';
 function Cart(props) {
  const dispatch = useDispatch()
   const cart = useSelector(state=>state.cart) 
   const navigate = useNavigate()
   console.log(cart)
   useEffect(() => {
    dispatch(getTotal())
   }, [cart, dispatch])

    return (
      <>
     <h2>Shopping cart</h2> 
     {cart.cartItems.length === 0 ? (
      <>
     
      </>
     ) :(
      <Wrapper>
        <Title>YOUR BAG</Title>
      <Top>
        <TopButton onClick={() => navigate("/")}>
          Continue Shopping
        </TopButton>

        
        <TopButton type="filled">Checkout Now</TopButton>
      </Top>
        <Bottom>
          <Info>
            {cart.cartItems?.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <span>
                      <b>Product:</b> {product.brand}
                    </span>
                    <span><b>Price: </b> ${product.price}</span>
                    <span>
                      <b>Quantity:  </b>
                      {product.cartQuantity}
                    </span>
                    <DeleteOutlineOutlined onClick={()=>{dispatch(removeFromCart(product))}}/>
                    
                  </Details>
                </ProductDetail>

                <PriceDetails>
                  <ProductAmmountConatiner>
              
                  <div>
                    <RemoveIcon onClick={()=>dispatch(decreaseQuantity(product))}/>
                    <span>{product.cartQuantity}</span>
                  <AddIcon onClick={()=>dispatch(addToCart(product))}/>
                  </div>
                    

          
                  </ProductAmmountConatiner>
                  
                  <ProductPrice>Total: ${product.price * product.cartQuantity}</ProductPrice>
                  
                </PriceDetails>
                <HR />
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        
        
            <SummaryItem type="total">
              <span>SubTotal </span>
              <span>${cart.cartTotalAmount}</span>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
     )}
     
     </>  
    )
  
}
export default Cart