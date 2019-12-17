import styled from "styled-components/macro";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: ${props => props.flex && props.flex};

  height: ${props => props.h};

  min-height: ${props => props.h};

  padding: ${props => props.p};

  margin: ${props => props.m};

  flex-direction: ${props => (props.column ? "column" : "row")};

  border-bottom: ${props =>
    props.border && `1px solid ${props.theme.colors.grey}`};
`;
