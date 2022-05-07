import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 52px 16px;
  background-color: beige;

  @media screen and (min-width: 500px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export default Container;