import React from "react";
import { connect } from "react-redux";
import InputGroup from "../styled/InputGroup";
import Input from "../styled/Input";
import Icon from "../styled/Icon";
import { setTextFilter } from "../redux/actions/reservations";

const ResFilter = ({ textFilter, setTextFilter }) => {
  return (
    <InputGroup hasIconLeft hasIconRight>
      <Input
        aria-label="Search guests"
        placeholder="Search guests"
        value={textFilter}
        onChange={e => {
          setTextFilter(e.target.value);
        }}
      />
      <Icon isRight icon="search" />
      <Icon isLeft icon="filter_list" />
    </InputGroup>
  );
};

const mapStateToProps = state => ({
  textFilter: state.reservations.textFilter
});

const mapDispatchToProps = {
  setTextFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(ResFilter);
