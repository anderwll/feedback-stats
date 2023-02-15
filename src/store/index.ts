import { configureStore } from "@reduxjs/toolkit";
import darkMode from "./modules/darkMode";
import students from "./modules/students";

const store = configureStore({
  reducer: {
    darkMode: darkMode,
    students: students,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
