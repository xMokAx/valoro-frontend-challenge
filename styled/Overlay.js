import styled from "styled-components/macro";
import { rgba } from "polished";

export default styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 48;
  background: ${rgba("#000", 0.5)};

  display: ${props => !props.isMenuActive && "none"};
`;
