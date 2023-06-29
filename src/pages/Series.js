import { dataSeries } from "../FetchData";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import SearchSort from "../components/SearchSort";
import { useState } from "react";

const { Meta } = Card;

export function Series() {
  const [searchText, setSearchText] = useState("");
  const [serieCards, setSerieCards] = useState(dataSeries);

  // Dizileri rastgele sıralar
  const shuffleMovies = () => {
    const shuffledMovies = [...dataSeries].sort(() => Math.random() - 0.5);
    setSerieCards(shuffledMovies);
  };

  // Dizileri son çıkandan ilk çıkana göre sıralama yapar
  const sortByDate = () => {
    const sortedSeries = [...dataSeries].sort(
      (b, a) => a.releaseYear - b.releaseYear
    );
    setSerieCards(sortedSeries);
  };

  // Dizileri ilk çıkandan son çıkana göre sıralama yapar
  const sortByDateAsc = () => {
    const sortedSeries = [...dataSeries].sort(
      (a, b) => a.releaseYear - b.releaseYear
    );
    setSerieCards(sortedSeries);
  };

  // filter fonksiyonu ile arama yapılır
  const filteredSeries = serieCards.filter((serie) => {
    return searchText.toLowerCase() === ""
      ? serie
      : serie.title.toLowerCase().includes(searchText);
  });

  // Dizilerin card'larını oluşturan array
  // map fonksiyonu ile filter'dan geçen veriler için card oluşturulup movieCards değişkenine atanır.
  const renderedSeries = filteredSeries.map((serie) => (
    <Link to="/Movies">
      <Col span={6}>
        <Card
          id="Card"
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={serie.images["Poster Art"].url} />}
        >
          <Meta title={serie.title} />
        </Card>
      </Col>
    </Link>
  ));

  return (
    <>
      {/* SearchSort componentinin onChangeHandler'i ile input'a yazılan değerleri searchtext isimli değişkene atar */}
      <SearchSort
        onChangeHandler={(e) => setSearchText(e.target.value)}
        sortByDate={sortByDate}
        shuffleMovies={shuffleMovies}
        sortByDateAsc={sortByDateAsc}
      />{" "}
      <Row gutter={[8, 8]}>{renderedSeries}</Row>
    </>
  );
}
