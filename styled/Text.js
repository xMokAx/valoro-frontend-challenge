import styled from "styled-components/macro";

export default styled.p`
  color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.text};

  font-size: ${props => props.size};

  line-height: ${props => props.heading && "1"};

  margin: ${props => props.m};
`;
