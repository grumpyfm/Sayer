import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DetailPage from "./DetailPage";

import { addNewComment } from "../../redux/actions";

const mapStateToProps = state => {
  return {
    data: state.listItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addNewComment
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
