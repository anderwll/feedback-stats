import { createSlice } from "@reduxjs/toolkit";
import { Student } from "../../typeStore";

const initialState: Student[] = [
  {
    id: 1,
    name: "Anderson Wilmsen",
    age: 24,
    course: "FullStack Web Developer",
    imgUrl: "https://avatars.githubusercontent.com/u/102523593?v=4",
    linkLinkedin: "https://www.linkedin.com/in/anderson-wilmsen-675a48218/",
    linkGithub: "https://github.com/anderwll",
    qualities: [
      { item: "Proativo", nota: 10 },
      { item: "Organizado", nota: 9 },
      { item: "Ágil", nota: 10 },
    ],
  },
  {
    id: 2,
    name: "Anderson Exner",
    age: 34,
    course: "FullStack Web Developer",
    imgUrl: "https://avatars.githubusercontent.com/u/109244769?v=4",
    linkLinkedin: "https://www.linkedin.com/in/anderson-exner-00466a174/",
    linkGithub: "https://github.com/AndersonExner",
    qualities: [
      { item: "Esforçado", nota: 10 },
      { item: "Resiliente", nota: 10 },
      { item: "Provativo", nota: 8 },
    ],
  },
  {
    id: 3,
    name: "Douglas Souza",
    age: 33,
    course: "FullStack Web Developer",
    imgUrl: "https://avatars.githubusercontent.com/u/106688496?v=4",
    linkLinkedin: "https://www.linkedin.com/in/douglas-souza-src-4b4a95265/",
    linkGithub: "https://github.com/douglassouza-src",
    qualities: [
      { item: "Criativo", nota: 10 },
      { item: "Responsável", nota: 9 },
      { item: "Paciente", nota: 10 },
    ],
  },
  {
    id: 4,
    name: "José Pedro",
    age: 25,
    course: "FullStack Web Developer",
    imgUrl: "https://avatars.githubusercontent.com/u/85909559?v=4",
    linkLinkedin:
      "https://www.linkedin.com/in/jos%C3%A9-pedro-baungratz-879a47181/",
    linkGithub: "https://github.com/josepedrobaun",
    qualities: [
      { item: "Comunicativo", nota: 10 },
      { item: "Comprometido", nota: 9 },
      { item: "Esforçado", nota: 10 },
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
