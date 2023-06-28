import dataSet from "./sample.json"

export let dataMovies = [];
export let dataSeries = [];

const FetchData = () => {

  const data = dataSet.entries;

  // Veri setimizdeki verileri film ve dizi olarak sınıflandırmak
  Object.keys(data).forEach(function(key, index) {
    if(data[key].programType === "movie" && !dataMovies.includes(data[key])){
      dataMovies.push(data[key]);
    }
    else if(data[key].programType === "series" && !dataSeries.includes(data[key])){
      dataSeries.push(data[key]);
    }
    
  });



  return (
    <>
      
    </>
  );
}

export default FetchData;