import styled from "styled-components/macro";

const Container = styled.span.attrs(props => ({
  "aria-hidden": props["aria-label"] ? false : true
}))`
  align-items: center;
  display: inline-flex;
  justify-content: center;

  left: ${props => props.isLeft && "0"};

  right: ${props => props.isRight && "0"};
`;

export default ({ icon, size, color, ...props }) => (
  <Container {...props}>
    <i
      className="material-icons"
      color={color}
      css={`
        font-size: ${size && size};
        color: ${props => props.color && props.theme.colors[props.color]};
      `}
    >
      {icon}
    </i>
  </Container>
);
