
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null, // User object
    },
    reducers: { // Functions to manipulate the state of the object
        login: (state, action) => { // Login action
            state.user = action.payload;
        },
        logout: (state) => { // Logout action
            state.user = null;
        }
    },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user; // Pull from the userSlice whenever needed

export default userSlice.reducer;

// To eliminate the problem of "PROP DRILLING", when prop is passed into various nested components
// Redux is library like a data layer around React used to manage the flow of data amoung various components
// User object is pushed into the data layer, other JS components can pull the user from the data point
// We don't want to store the user in a massive data layer, so we slice it up the data layer
// UserSlice is used to store the information of the user
// We can have different Slices of state for different purposes like user, theme (light more, dark mode) etc.,
// Reducer: Dispatch the action to change the user
