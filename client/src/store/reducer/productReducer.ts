import { ProductAction, ProductActionTypes, ProductState } from "../../types/product"

const initialState: ProductState = {
    product: [
        { id: 1, size: 'L',  name: 'Black Cap', price: 228, salePrice: 228,description: 'fsafsaas' },
        { id: 2, size: 'L', name: 'Black Cap', price: 444, description: 'fsafsaas' },
        { id: 3, size: 'L', name: 'Black Cap', price: 555, description: 'fsafsaas' },
        { id: 4, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 5, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 6, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 7, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 8, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 9, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 10, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 11, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 12, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 13, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 14, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 15, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 16, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 17, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
        { id: 18, size: 'L', name: 'Black Cap', price: 666, description: 'fsafsaas' },
    ],
    newProduct: [],
    loading: false,
    error: null
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT:
            return {
                product: [],
                loading: true,
                error: null
            }
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                product: action.payload,
                loading: false,
                error: null
            }
        case ProductActionTypes.FETCH_PRODUCT_ERROR:
            return {
                product: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}