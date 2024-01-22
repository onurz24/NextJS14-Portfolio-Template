import { configureStore } from "@reduxjs/toolkit"
import IsOpen from "./BurgerSlice";

export const store = configureStore( {
    reducer : {
        IsOpen : IsOpen,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;