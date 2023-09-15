import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as ProductActionCreator from '../store/action-creator/product'


export const useProductActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ProductActionCreator, dispatch)
}