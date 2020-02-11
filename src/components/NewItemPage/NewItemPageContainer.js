import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NewItemPage from "./NewItemPage";

import { createItem } from "../../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ createItem }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(NewItemPage);
