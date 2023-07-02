import { dataSeries } from "../FetchData";
import CardComp from "../components/CardComp";

export function Series() {
  

  return (
    <>
      <CardComp datas={dataSeries}/>
    </>
  );
}
