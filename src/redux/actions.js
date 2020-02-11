export const GET_DATA = "GET_DATA";
export const CREATE_ITEM = "CREATE_ITEM";
export const REMOVE__ITEM = "REMOVE__ITEM";
export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
export const SAVE_DATA = "SAVE_DATA";

/**
 * Save list data.
 * @param {Array} itemsList - list of all items.
 */
export const saveData = () => {
  return { type: SAVE_DATA, itemsList };
};

/**
 * Get list data.
 */
export const getData = () => {
  return { type: GET_DATA };
};

/**
 * Create new list item.
 * @param {string} title - New item title.
 */
export const createItem = title => {
  return { type: CREATE_ITEM, title };
};

/**
 * Remove new list item.
 * @param {string} key - Item id.
 */
export const removeItem = key => {
  return { type: REMOVE__ITEM, key };
};

/**
 * Add comment to item.
 * @param {string} commentBody
 * @param {string} parent_id
 */
export const addNewComment = (commentBody, parent_id) => {
  return { type: ADD_NEW_COMMENT, commentBody, parent_id };
};
