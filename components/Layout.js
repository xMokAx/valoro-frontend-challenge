import React, { useState } from "react";
import styled from "styled-components/macro";
import ResList from "./ResList";
import MenuButton from "../styled/MenuButton";
import Text from "../styled/Text";
import Button from "../styled/Button";
import Card from "../styled/Card";
import ResFilter from "./ResFilter";
import Icon from "../styled/Icon";
import FlexContainer from "../styled/Flex";
import Overlay from "../styled/Overlay";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
`;

const Aside = styled.aside`
  position: relative;
  width: 350px;
  background-color: ${props => props.theme.colors.bgSec};
  height: 100vh;
  overflow: hidden;
  transition: all 250ms ease;
  z-index: 50;
  @media screen and (max-width: 1023px) {
    position: fixed;
    left: ${props => (props.isMenuActive ? "0" : "-350px")};
  }
  @media screen and (max-width: 600px) {
    width: 280px;
    left: ${props => (props.isMenuActive ? "0" : "-280px")};
  }
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bg};
`;

const Layout = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenuActive = () => setIsMenuActive(!isMenuActive);
  return (
    <Container>
      <MenuButton isMenuActive={isMenuActive} onClick={toggleMenuActive} />
      <Overlay isMenuActive={isMenuActive} onClick={toggleMenuActive} />
      <Aside isMenuActive={isMenuActive}>
        <FlexContainer h="100px" p="16px" border>
          <ResFilter />
        </FlexContainer>
        <ResList />
        <FlexContainer
          border
          p="0 16px"
          h="50px"
          css="justify-content: space-between;"
        >
          <Button color="bgSec">select</Button>
          <Button color="bgSec" aria-label="download">
            <Icon icon="get_app" />
          </Button>
          <Button color="bgSec" aria-label="reload">
            <Icon icon="refresh" />
          </Button>
        </FlexContainer>
        <FlexContainer h="100px" p="16px" border>
          <Button block color="primary">
            Create Booking
          </Button>
        </FlexContainer>
      </Aside>
      <Main isMenuActive={isMenuActive}>
        <Card>
          <img src="./logo.png" width="200" height="200" alt="logo" />
          <Text as="h1" color="textSec">
            Reservations
          </Text>
          <Text as="h3" color="textSec">
            Select any reservation item
          </Text>
          <Button block>Create Booking</Button>
          <Button block>Create Booking With Quote</Button>
        </Card>
      </Main>
    </Container>
  );
};

export default Layout;
