import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        />
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        />
        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        />
        <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        />
         <Section 
        title="Lovest cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
        />
         <Section 
        title="Solar New Roofs"
        description="Solar Roofs Costs less than a New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
        />
         <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnTxt="Order Now"
         
        />
    </Container>
  )
}
const Container = styled.div`
 height=100vh
 `

export default Home