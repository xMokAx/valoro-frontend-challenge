import {
  FETCH_RESERVATIONS_START,
  FETCH_RESERVATIONS_SUCCESS,
  FETCH_RESERVATIONS_FAILURE,
  SET_RESERVATIONS_TEXT_FILTER
} from "../action-types";

export const initialState = {
  reservations: [],
  isLoading: false,
  error: "",
  textFilter: ""
};

export const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_RESERVATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        reservations: action.reservations
      };
    case FETCH_RESERVATIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case SET_RESERVATIONS_TEXT_FILTER:
      return {
        ...state,
        textFilter: action.textFilter
      };
    default:
      return state;
  }
};

const getTextFilter = state => state.reservations.textFilter;

const getReservations = state => state.reservations.reservations;

export const getFilteredReservations = state => {
  const textFilter = getTextFilter(state);
  const reservations = getReservations(state);
  return reservations.filter(res =>
    res.guestName.toLowerCase().includes(textFilter.toLowerCase().trim())
  );
};
