import * as services from "../services";

export const getMiddleware = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_DATA" });
    services.getItemList().then(res => {
      dispatch({ type: "SAVE_DATA", itemsList: res });
    });
  };
};
