import {storeProducts} from '../data';

export const ADD_DATA = 'addData'
export const DETAIL_DATA = 'detaildata'
export const ADD_CART = 'addcart'
export const OPEN_MODAL = 'openModal'
export const CLOSE_MODAL = 'openModal'
export const ADD_TOTAL = 'addTotal'
export const CLEAR_CART = 'clearCart'
export const DELETE_ITEM = 'deleteItem'
export const INCREMENT_ITEM = 'incrementItem'
export const DECREMENT_ITEM = 'decrementItem'


export const addData = () => {
    console.log('inactionadd', storeProducts);
    return{
        type:ADD_DATA,
        payload:storeProducts
    }
}


export const fetchDetailProduct = (id) => {
    return {
        type:DETAIL_DATA,
        payload:id
    }
}

export const addToCart = (id) => {
    return{
        type:ADD_CART,
        payload:id
    }
}

export const addTotal = () => {
    return{
        type:ADD_TOTAL
    }
}

export const openModal = (id) => {
    return{
        type:OPEN_MODAL,
        payload:id
    }
}

export const closeModal = () => {
    return{
        type:CLOSE_MODAL,
        payload:false
    }
}

export const clearItems =() =>{
    return{
        type:CLEAR_CART
    }
}

export const deleteItem = (id) => {
    return{
        type:DELETE_ITEM,
        payload:id
    }
}

export const incrementItem = (id) => {
    return{
        type:INCREMENT_ITEM,
        payload:id
    }
}

export const decrementItem = (id) => {
    return{
        type:DECREMENT_ITEM,
        payload:id
    }
}