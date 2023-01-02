import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim' , age : 20 },
    reducers : {
        changeName(state){
            return 'john kim' + state
        },
        changeAge(state, action){
            state.age += action.payload;
        }
    }
});

export default user;