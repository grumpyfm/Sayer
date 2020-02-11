import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HomePage from "./HomePage";

import { getData, removeItem } from "../../redux/actions";
import { getMiddleware } from "../../redux/middlewares";

const mapStateToProps = state => {
  return {
    listItems: state.listItems,
    loadingItems: state.loadingItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getData,
        removeItem,
        getMiddleware
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
