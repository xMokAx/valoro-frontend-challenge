import axios from "axios";
import {
  FETCH_RESERVATIONS_START,
  FETCH_RESERVATIONS_SUCCESS,
  FETCH_RESERVATIONS_FAILURE,
  SET_RESERVATIONS_TEXT_FILTER
} from "../action-types";

const fetchReservationsStart = () => ({
  type: FETCH_RESERVATIONS_START
});

const fetchReservationsSuccess = reservations => ({
  type: FETCH_RESERVATIONS_SUCCESS,
  reservations
});

const fetchReservationsFailure = error => ({
  type: FETCH_RESERVATIONS_FAILURE,
  error
});

export const fetchReservations = () => async dispatch => {
  dispatch(fetchReservationsStart());
  try {
    const res = await axios.get(
      "https://5df6df20c1b62e0014e20947.mockapi.io/reservations"
    );
    dispatch(fetchReservationsSuccess(res.data));
  } catch (error) {
    dispatch(
      fetchReservationsFailure(
        "Can't get reservations, Please check your connection."
      )
    );
  }
};

export const setTextFilter = textFilter => ({
  type: SET_RESERVATIONS_TEXT_FILTER,
  textFilter
});
