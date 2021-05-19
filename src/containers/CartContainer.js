import {connect} from "react-redux";
import Cart from "../components/Cart";

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)

export default CartContainer