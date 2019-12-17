import styled from "styled-components/macro";
import Button from "./Button";

const height = "40px";

const Container = styled(Button)`
  position: fixed;
  left: 0;
  border-radius: 0;
  display: block;
  height: ${height};
  width: ${height};
  transition: all 250ms ease;
  z-index: 49;

  & > span {
    background-color: #fff;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition: all 250ms ease;
    width: 16px;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }

    &:nth-child(2) {
      top: calc(50% - 1px);
    }

    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }

  &:hover {
    background-color: rgba(black, 0.05);
  }

  ${props =>
    props.isMenuActive &&
    `
    & > span {
      &:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  `}
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 1023px) {
    left: ${props => props.isMenuActive && "350px"};
  }
  @media screen and (max-width: 600px) {
    left: ${props => props.isMenuActive && "280px"};
  }
`;

const MenuButton = ({ ...props }) => (
  <Container color="text" {...props}>
    <span></span>
    <span></span>
    <span></span>
  </Container>
);

export default MenuButton;
