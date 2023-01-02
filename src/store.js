import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice.js';

//useState와 비슷
//해당 컴포넌트에서만 사용하는 state는 굳이 redux 안써도됨.

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12],
});

let cartProduct = createSlice({
    name: 'cartProduct',
    initialState:
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
        {id : 3, name : 'Grey Yordan', count : 3}
    ] ,
    reducers:{
        increase(state){
            console.log(state.count)
        },
    }
    
});

export let { changeName, changeAge } = user.actions;
export let { increase } = cartProduct.actions;

export default configureStore({
    reducer:{
        user : user.reducer,
        stock : stock.reducer,
        cartProduct: cartProduct.reducer,
    }
});