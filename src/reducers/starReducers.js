
export const starReducer = (state = [], action) => {
      switch (action.type) {
            case 'GET_STAR_LIST':
                  return action.stars;
            default:
                  return state;
      }
};