import { Row, Col, Card } from "antd";
import { dataMovies } from "../FetchData";
import { Link } from "react-router-dom";
import SearchSort from "../components/SearchSort";
import { useState } from "react";

const { Meta } = Card;

export function Movies() {
  const [searchText, setSearchText] = useState("");
  const [movieCards, setMovieCards] = useState(dataMovies);


  // Filmleri rastgele sıralar
  const shuffleMovies = () => {
    const shuffledMovies = [...dataMovies].sort(() => Math.random() - 0.5);
    setMovieCards(shuffledMovies);
  };


  // Filmleri son çıkandan ilk çıkana göre sıralama yapar
  const sortByDate = () => {
    const sortedMovies = [...dataMovies].sort(
      (b, a) => a.releaseYear - b.releaseYear
    );
    setMovieCards(sortedMovies);
  };

  // Filmleri ilk çıkandan son çıkana göre sıralama yapar
  const sortByDateAsc = () => {
    const sortedMovies = [...dataMovies].sort(
      (a, b) => a.releaseYear - b.releaseYear
    );
    setMovieCards(sortedMovies);
  };

  // filter fonksiyonu ile arama yapılır
  const filteredMovies = movieCards.filter((movie) => {
    return searchText.toLowerCase() === ""
      ? movie
      : movie.title.toLowerCase().includes(searchText);
  });

  // filmlerin card'larını oluşturan array
  // map fonksiyonu ile filter'dan geçen veriler için card oluşturulup movieCards değişkenine atanır.
  const renderedMovies = filteredMovies.map((movie, index) => (
    <Link to="/Movies">
      <Col span={6}>
        <Card
          id="Card"
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={movie.images["Poster Art"].url} />}
        >
          <Meta title={movie.title} />
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
      />
      <Row gutter={[8, 8]}>{renderedMovies}</Row>
    </>
  );
}
