import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from './reducers/filterReducer'
import notificationsReducer from "./reducers/notificationsReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationsReducer
  }
})

store.subscribe(() => console.log(store.getState()))

export default store