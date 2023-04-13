import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  font-size: 1.5em;
  background-color: red;
`;

const TopSelling = ({blurb}) => {
  return (
    <>
      <p>{blurb}</p>
      <p>...and I have been hardcorded into the component itself</p>

      <Button>Bootstrap</Button>
      <StyledButton>Styled Component</StyledButton>
    </>
  )
}

export default TopSelling;
