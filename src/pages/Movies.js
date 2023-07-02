import { dataMovies } from "../FetchData";
import CardComp from "../components/CardComp";

export function Movies() {
  
  return (
    <>
      <CardComp datas={dataMovies}/>
    </>
  );
}
