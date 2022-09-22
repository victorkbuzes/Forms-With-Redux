import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        password: null,
    },
    reducers: {
        setUser: (state, action) => {
            console.log("action: " , action);
            state.email = action.payload ?.email;
            state.width = action.payload?.width;

        }
    },
})

export const { setUser } = userSlice.actions;
export const selectUser = (state) => state?.user;
export default userSlice.reducer;