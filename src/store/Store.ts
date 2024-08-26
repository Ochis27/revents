import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { testSlice } from "../features/scratch/testSlice";
import { eventSlice } from "../features/events/eventSlice";
import { modalSlice } from "../app/common/modals/modalSlice";
import { authSlice } from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    events: eventSlice.reducer,
    modals: modalSlice.reducer,
    auth: authSlice.reducer,
  },
});

//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
//Infer type: {posts: PostsState, comments: CommentsState, users: UserState}
export type AppDispatch = typeof store.dispatch;

//User throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
