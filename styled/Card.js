import styled from "styled-components/macro";

export default styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  & > * {
    margin-bottom: 1rem;
  }
`;
