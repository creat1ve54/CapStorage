import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer/reducer";



export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector