import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

    key: "",
    contact: {
        name: "",
        surname: "",
        telephone: ""
    }
};

const contactSlice = createSlice({
    name: "contactList",
    initialState,
    reducers: {
        addContact: (state, action) => {
            const userData = action.payload;
            axios.post("https://contact-list-app-7ff85-default-rtdb.firebaseio.com/contact-list.json", userData, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).catch(error => {
                console.log(error);
            });
        },
        deleteContact: (state, action) => {
            const deleteKey = action.payload;
            axios.delete(`https://contact-list-app-7ff85-default-rtdb.firebaseio.com/contact-list/${deleteKey}.json`)
                .catch(error => {
                    console.log(error);
                });
        },
        setExistingContactKey: (state, action) => {
            state.key = action.payload;
        }
    }
});

export const contactListActions = contactSlice.actions;
export default contactSlice;
