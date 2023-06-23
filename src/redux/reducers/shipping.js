import { createSlice } from "@reduxjs/toolkit"
const shipping = createSlice({
    name: "shipping",
    initialState: [],
    reducers: {
        handleShipping : (state,action)=>{
            return  state=action.payload
        }
    }
})

export default shipping.reducer
export const {handleShipping} = shipping.actions