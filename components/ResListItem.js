import React from "react";
import styled from "styled-components/macro";
import FlexContainer from "../styled/Flex";
import Icon from "../styled/Icon";
import Text from "../styled/Text";

const getDate = date => date.slice(0, 10).replace("T", " ");

const getStatusColor = status => {
  switch (status) {
    case "status 1":
      return "red";
    case "status 2":
      return "orange";
    case "status 3":
      return "muted";
    default:
      return "green";
  }
};

const Tag = styled.div`
  border: 1px solid ${props => props.theme.colors.muted};
  padding: 0 8px;
  border-radius: 15px;
`;

const ListColumn = styled(FlexContainer)`
  align-items: flex-start;
  justify-content: space-between;
`;

const ResListItem = ({ reservation }) => {
  const {
    status,
    guestName,
    property,
    arrivalDate,
    createdAt,
    paidAmount,
    currency
  } = reservation;
  return (
    <FlexContainer
      border
      css={`
        padding: 16px;
        @media screen and (max-width: 600px) {
          padding: 8px;
        }
      `}
    >
      <ListColumn
        column
        css="width: 30px;justify-content: flex-start;"
        h="100%;"
      >
        <Icon
          icon="lens"
          size="16px"
          small
          css="padding: 8px 4px 4px;"
          color={getStatusColor(status)}
          aria-hidden={false}
          aria-label={status}
        />
        <Icon
          icon="reply"
          size="20px"
          aria-hidden={false}
          aria-label="replied"
        />
      </ListColumn>

      <ListColumn column flex="1">
        <Text as="h3" m="0" heading>
          {guestName}
        </Text>
        <Text as="strong" color="textSec">
          {property}
        </Text>
        <Text as="span" color="muted">
          {getDate(arrivalDate)}, 2
          <Icon size="16px" icon="nights_stay" />
          3<Icon size="16px" icon="person" />
        </Text>
      </ListColumn>

      <ListColumn column h="100%" css="align-items: flex-end;">
        <Text as="span">{getDate(createdAt)}</Text>
        <Tag>
          <Text color="muted" as="span">
            {Math.floor(Number(paidAmount))} {currency}
          </Text>
        </Tag>
      </ListColumn>
    </FlexContainer>
  );
};

export default ResListItem;
