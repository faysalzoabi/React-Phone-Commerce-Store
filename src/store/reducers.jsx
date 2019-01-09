import { ADD_DATA, DETAIL_DATA, ADD_CART, OPEN_MODAL, CLOSE_MODAL, ADD_TOTAL, CLEAR_CART, DELETE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM} from './actions';
import { stat } from 'fs';

const initState = {
    products:[],
    product:{},
    cart:[],
    openModal:false,
    modalProduct:{},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0

}


const reducer = (state=initState, action) =>{
    switch(action.type){
        case ADD_DATA:
            let newproducts = []
            action.payload.forEach(item => {
                const singleitem = {...item}
                newproducts = [...newproducts, singleitem]
            })
            console.log('in reducer', newproducts);
            return {
                ...state,
                products:newproducts
            }
        case DETAIL_DATA:
            const detailData = state.products.find(element => element.id === parseInt(action.payload))
            console.log('in reducerrr', detailData);
            return{
                ...state,
                product:detailData
            }
        case ADD_CART:
            let tempProducts = [...state.products]
            // let tempProducts = JSON.parse(JSON.stringify(state.products))
            let newproduct = tempProducts.find( element => element.id === action.payload)
            let index = tempProducts.indexOf(newproduct)
            let cartProduct = tempProducts[index];
            console.log('index',index);
            cartProduct.inCart = true;
            cartProduct.count = 1
            cartProduct.total = cartProduct.price
            console.log('temp',cartProduct);
            console.log('newarray',tempProducts);
            return {
                ...state,
                products:tempProducts,
                cart:[...state.cart, cartProduct]
            }

        case ADD_TOTAL:
            let subTotal = 0
            let cartitems = [...state.cart]
            cartitems.map(item => subTotal += item.total);
            const tempTax = subTotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = subTotal + tax;
            return{
                ...state,
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total

            }

        case OPEN_MODAL:
            const item = !state.openModal
            let modalitem = state.products.find( element => element.id === action.payload)
            return{
                ...state,
                openModal:item, 
                modalProduct:modalitem
            }

        case CLOSE_MODAL:
            return{
                ...state,
                openModal:action.payload, 
            }

        case CLEAR_CART:
            return{
                ...state,
                cart:[],
                cartSubTotal: 0,
                cartTax: 0,
                cartTotal: 0
            }

        case DELETE_ITEM:
            let tempProds = [...state.products]
            let tempCart = [...state.cart]
            tempCart = tempCart.filter(item => item.id !== action.payload)
            const indexof = tempProds.indexOf(tempProds.find(element => element.id === action.payload))
            let removeProduct = tempProds[indexof]
            removeProduct.inCart = false;
            removeProduct.count = 0 ;
            removeProduct.total = 0;
            return{
                ...state,
                cart:tempCart,
                products:tempProds
            }

        case INCREMENT_ITEM:
            let cart = [...state.cart]
            let selectedProduct = cart.find(item => item.id === action.payload)
            let prodIndex = cart.indexOf(selectedProduct)
            const product = cart[prodIndex];
            product.count = product.count + 1;
            product.total = product.count * product.price
            
            return{
                ...state,
                cart:[...cart]
            }

        case DECREMENT_ITEM:
            let carttemp = [...state.cart]
            let selectProduct = carttemp.find(item => item.id === action.payload)
            let prodInd = carttemp.indexOf(selectProduct)
            const myprod = carttemp[prodInd];
            myprod.count = myprod.count - 1;
            
            if(myprod.count === 0){
                let tempProds = [...state.products]
                carttemp = carttemp.filter(item => item.id !== action.payload)
                const indexof = tempProds.indexOf(tempProds.find(element => element.id === action.payload))
                let removeProduct = tempProds[indexof]
                removeProduct.inCart = false;
                removeProduct.count = 0 ;
                removeProduct.total = 0;
                return{
                    ...state,
                    cart:[...carttemp],
                    products:tempProds
                }

            } else{
                myprod.total = myprod.count * myprod.price
            }
            
            return{
                ...state,
                cart:[...carttemp]
            }

        default:
            return state
    }
    
}

export default reducer;