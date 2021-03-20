import BOUTIQUE_DATA from "./boutique.data";
const INITIAL_STATE = {
  products: BOUTIQUE_DATA,
};

const boutiqueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default boutiqueReducer;
