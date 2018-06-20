import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = '/data/stars.json';

export const getStarList = (stars) => {
  return {
    type: actionTypes.GET_STAR_LIST,
    stars
  }
};

export const fetchStars = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(getStarList(response.data))
      })
      .catch(error => {
        console.log(error);
        throw (error);
      });
  }
};