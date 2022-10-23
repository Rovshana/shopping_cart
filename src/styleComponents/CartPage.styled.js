import styled from "styled-components";


export const Wrapper = styled.div`
  padding: 20px;
 
`;
 export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
 export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
 export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
 export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
 
`;
export const Info = styled.div`
  flex: 3;
`;

 export const Product = styled.div`
  display: flex;
  justify-content: space-between;
 
`;
 export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
 export const PriceDetail = styled.div`
  flex: 1;
`;
 export const Image = styled.img`
  width: 200px;
`;
 export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;



 export const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
 export const ProductAmmountConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
 export const ProductAmount = styled.p`
  font-size: 24px;
  margin: 5px;

`;
 export const ProductPrice = styled.p`
  font-size: 30px;
  font-weight: 300;
  
`;
 export const HR = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
`;
 export const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;
 export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "25px"};
`;
 export const SummaryTitle = styled.h2`
  font-weight: 200;
`;
const SummaryText = styled.span``;
const SummaryItemPrice = styled.span``;
 export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  font-weight: 600;
  width: 100%;
`;

 export const Div = styled.div`
  display: flex;
`;