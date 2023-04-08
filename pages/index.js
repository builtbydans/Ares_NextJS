import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

export const StyledButton = styled(Button)`
  font-size: 1.5em;
  background-color: red;
`;

const Home = () => {
  return (
    <>
      <Button>Bootstrap</Button>
      <StyledButton>Styled Component</StyledButton>
      Home
    </>
  )
}

export default Home
