import React from "react";
import styled from "styled-components";

function Section({title, description, backgroundImg, leftBtnTxt, rightBtnTxt}){
    return(
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnTxt}                    
                </LeftButton>
                {rightBtnTxt &&
                <RightButton>
                    {rightBtnTxt}
                </RightButton>}
            </ButtonGroup>
            <DownArrow src='./images/down-arrow.svg'></DownArrow>
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: orange;
    background-image: ${props => `url("./images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: space-between; 
    
`;
const ItemText = styled.div`
    padding-top: 20px;
    // display: flex;
    `;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
    `

const LeftButton = styled.div`
    background-color: rgb(23, 26, 32, 08);
    color: white;
    margin-top:2px;
    margin-left: 5px;
    width: 30vw;
    height: 30px;
    border-radius:15px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    `

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacisty: 0.8;
    `;

const DownArrow = styled.img`
    width: 60px;
    align-self: center;
    overflow-x: hiden;
    animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
export default Section;