export interface IMovies {
  id: string;
  name: string;
  description: string;
  duration: number;
  release: string;
  imgUrl: string;
}

export interface ICreateMovie {
  name: string;
  description: string;
  duration: number;
  release: string;
}
