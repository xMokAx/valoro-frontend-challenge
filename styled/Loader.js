import React from "react";
import styled, { keyframes } from "styled-components/macro";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 48px;
  height: 48px;

  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 6px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    border-color: ${props => props.theme.colors.primary} transparent transparent
      transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

const Loader = props => (
  <Container {...props} aria-label="Loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </Container>
);

export default Loader;
