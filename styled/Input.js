import styled from "styled-components/macro";
import { rgba } from "polished";

export default styled.input.attrs({
  // autoComplete: "off",
  autoCorrect: "off",
  autoCapitalize: "none",
  spellCheck: false
})`
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
  height: 2.5rem;
  overflow: hidden;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border: none;

  color: ${props => props.theme.colors.text};

  background-color: ${props => props.theme.colors.light};

  transition: all 0.15s ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => rgba(props.theme.colors.text, 0.5)};
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSec};
  }
`;
