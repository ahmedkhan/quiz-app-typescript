import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-color: #EFEEEB;
        margin: 0;
        padding: 0 20px;
        display flex;
        justify-content: center
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #40434A;
  }
  .score {
    color: #40434A;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family:'Lora', serif;
    color : #202329;
    font-weight: 400;
    background-size: 100%;
    
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .next {
    cursor: pointer;
    background-color: #EFEEEB;
    color : #202329;
    border: 2px solid #202329;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
    cursor: pointer;
    background-color: transparent; 
    border: 2px solid 
    border: 1px solid;
    border-radius: 20px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start:hover {
	background-color: #009A9C;
	-webkit-box-shadow: 5px 5px 15px 3px rgb(0, 154, 156);
	-moz-box-shadow: 5px 5px 15px 3px rgb(0, 154, 156);
	box-shadow: 5px 5px 15px 3px rgb(0, 154, 156);
  }
`; 