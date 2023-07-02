import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import SearchSort from "./SearchSort";
import { useState } from "react";

const { Meta } = Card;

function CardComp({datas}) {
  const [searchText, setSearchText] = useState("");
  const [movieCards, setMovieCards] = useState(datas);


  // Filmleri-dizileri rastgele sıralar
  const shuffleMovies = () => {
    const shuffledMovies = [...datas].sort(() => Math.random() - 0.5);
    setMovieCards(shuffledMovies);
  };


  // Filmleri-dizileri son çıkandan ilk çıkana göre sıralama yapar
  const sortByDate = () => {
    const sortedMovies = [...datas].sort(
      (b, a) => a.releaseYear - b.releaseYear
    );
    setMovieCards(sortedMovies);
  };

  // Filmleri-dizileri ilk çıkandan son çıkana göre sıralama yapar
  const sortByDateAsc = () => {
    const sortedMovies = [...datas].sort(
      (a, b) => a.releaseYear - b.releaseYear
    );
    setMovieCards(sortedMovies);
  };

  // filter fonksiyonu ile arama yapılır
  // arama yapılması için en az üç harf girilmeli
  const filteredMovies = movieCards.filter((movie) => {
    return searchText.toLowerCase().length < 3
      ? movie
      : movie.title.toLowerCase().includes(searchText);
  });

  // filmlerin-dizilerin card'larını oluşturan array
  // map fonksiyonu ile filter'dan geçen veriler için card oluşturulup movieCards değişkenine atanır.
  const renderedMovies = filteredMovies.map((movie, index) => (
    <Link to="/">
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


export default CardComp;