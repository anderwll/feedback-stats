export interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  imgUrl: string;
  linkLinkedin: string;
  linkGithub: string;
  qualities: Array<Qualities>;
}

export interface Qualities {
  item: string;
  nota: number;
}
