import styled from "styled-components/macro";
import { lighten, darken, rgba } from "polished";

export default styled.button`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  vertical-align: top;
  user-select: none;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;

  background-color: ${props =>
    props.color ? props.theme.colors[props.color] : "transparent"};
  color: ${props => props.theme.colors.text};

  padding: ${props =>
    props.large ? "1rem 1rem" : props.small ? "0.25rem" : "0.5rem"};

  border: 1px solid
    ${props =>
      props.color || props.disabled ? "transparent" : props.theme.colors.text};
  border-radius: ${props => props.circle && "50%"};

  width: ${props => props.block && "100%"};

  &:hover,
  &:active {
    color: ${props => props.theme.colors.text};
    background: ${props =>
      props.color
        ? lighten(0.1, props.theme.colors[props.color])
        : darken(0.1, props.theme.colors.bg)};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.text, 0.5)};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.muted};
    color: ${props => props.theme.colors.textSec};
  }
`;
