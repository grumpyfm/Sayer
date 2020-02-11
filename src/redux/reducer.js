import * as actionTypes from "./actions";
import * as services from "../services";
import { initialState } from "./initiaState";

export const appReducer = (state = initialState, action) => {
  let newData;
  switch (action.type) {
    case actionTypes.GET_DATA:
      return Object.assign({}, state, {
        loadingItems: true
      });

    case actionTypes.SAVE_DATA:
      if (action.itemsList) {
        return Object.assign({}, state, {
          listItems: action.itemsList,
          loadingItems: false
        });
      } else {
        return Object.assign({}, state, {
          loadingItems: false
        });
      }

    case actionTypes.CREATE_ITEM:
      const id = services.generateId();
      let newItem = { item_id: id, title: action.title, comments: [] };
      newData = [...state.listItems];
      newData.push(newItem);
      services.createItem(newItem);
      return Object.assign({}, state, {
        listItems: newData
      });

    case actionTypes.REMOVE__ITEM:
      services.removeItem(action.key);
      newData = [...state.listItems].filter(
        item => item.item_id !== action.key
      );
      return Object.assign({}, state, {
        listItems: newData
      });

    case actionTypes.ADD_NEW_COMMENT:
      let commentObj = {
        comment_id: services.generateId(),
        body: action.commentBody
      };
      let newData = [...state.listItems].map(item => {
        if (item.item_id === action.parent_id) {
          item.comments.push(commentObj);
          services.createItem(item);
        }
        return item;
      });
      return Object.assign({}, state, {
        listItems: newData
      });

    default:
      return state;
  }
};
