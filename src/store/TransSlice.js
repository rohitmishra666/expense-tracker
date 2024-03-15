import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = 
    JSON.parse(localStorage.getItem("trans")) || [{
        id: 1,
        amount: 0,
        title: "WELCOME",
        type: "true",
    }];

const TransSlice = createSlice({
    name: "trans",
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            const trans = {
                id: nanoid(),
                title: action.payload.title,
                amount: action.payload.amount,
                type: action.payload.type,
            };
            state.push(trans);
            localStorage.setItem("trans", JSON.stringify(state))
        },

        removeTransaction: (state, action) => {
            const temp = state.filter((trans) => action.payload.id !== trans.id);
            localStorage.setItem("trans", JSON.stringify(temp));
            return temp;
        },

        updateTransaction: (state, action) => {
            state.map((trans) =>
                trans.id === action.payload.id ? {
                    ...trans,
                    title: action.payload.title,
                    amount: action.payload.amount,
                    type: action.payload.type
                } : trans
            );
            localStorage.setItem("trans", JSON.stringify(state));
            return state;
        },
    }
});

export const { addTransaction, removeTransaction, updateTransaction } = TransSlice.actions;
export default TransSlice.reducer;
