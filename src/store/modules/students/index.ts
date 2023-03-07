import { createSlice } from "@reduxjs/toolkit";
import { Student } from "../../typeStore";

const initialState: Student[] = [
  {
    id: 1,
    name: "Anderson Wilmsen",
    age: 24,
    course: "FullStack Web Developer",
    imgUrl: "https://avatars.githubusercontent.com/u/102523593?v=4",
    qualities: [
      { item: "Comunicativo", nota: 8 },
      { item: "Criativo", nota: 7 },
      { item: "Responsável", nota: 10 },
      { item: "Proativo", nota: 9 },
    ],
  },
  {
    id: 2,
    name: "Anderson Exner",
    age: 34,
    course: "FullStack Web Developer",
    imgUrl: "https://avatars.githubusercontent.com/u/109244769?v=4",
    qualities: [
      { item: "Comunicativo", nota: 8 },
      { item: "Criativo", nota: 10 },
      { item: "Resiliente", nota: 8 },
      { item: "Responsável", nota: 5 },
      { item: "Provativo", nota: 7 },
    ],
  },
  {
    id: 3,
    name: "Douglas Souza",
    age: 33,
    course: "FullStack Web Developer",
    imgUrl: "https://avatars.githubusercontent.com/u/106688496?v=4",
    qualities: [
      { item: "Comunicativo", nota: 10 },
      { item: "Criativo", nota: 10 },
      { item: "Resiliente", nota: 7 },
    ],
  },
  {
    id: 4,
    name: "José Pedro",
    age: 25,
    course: "FullStack Web Developer",
    imgUrl: "https://avatars.githubusercontent.com/u/85909559?v=4",
    qualities: [
      { item: "Comunicativo", nota: 9 },
      { item: "Criativo", nota: 7 },
      { item: "Resiliente", nota: 3 },
      { item: "Responsável", nota: 6 },
    ],
  },
];

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = studentsSlice.actions;
export default studentsSlice.reducer;
