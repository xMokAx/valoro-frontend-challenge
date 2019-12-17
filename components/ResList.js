import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { getFilteredReservations } from "../redux/reducers/reservations";
import FlexContainer from "../styled/Flex";
import Loader from "../styled/Loader";
import ResListItem from "./ResListItem";
import Icon from "../styled/Icon";
import Text from "../styled/Text";

const Container = styled(FlexContainer)`
  justify-content: flex-start;
  align-items: stretch;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
  height: calc(100vh - 250px);
`;

const ResList = ({ reservations, isLoading, error }) => {
  return (
    <Container
      column
      border
      css={`
        ${error && "justify-content: center;"}
      `}
    >
      {error ? (
        <FlexContainer p="16px;">
          <Icon icon="error" color="red" />
          <Text color="red" m="0 0 0 8px;">
            {error}
          </Text>
        </FlexContainer>
      ) : isLoading ? (
        <Loader />
      ) : (
        reservations.map(reservation => (
          <ResListItem key={reservation.id} reservation={reservation}>
            {reservation.guestName}
          </ResListItem>
        ))
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  reservations: getFilteredReservations(state),
  isLoading: state.reservations.isLoading,
  error: state.reservations.error
});

export default connect(mapStateToProps)(ResList);
