import { Row, Col, Card } from "antd";
import { dataMovies } from "../FetchData";
import { Link } from "react-router-dom";
import SearchSort from "../components/SearchSort";

const { Meta } = Card;

export function Movies() {
  // resimlerin url'lerini bulunduran array
  const movieImages = dataMovies.map((movie) => movie.images["Poster Art"].url);

  // filmlerin title'lerini bulunduran array
  const movieTitles = dataMovies.map((movie) => movie.title);

  // filmlerin card'larını oluşturan array
  const movieCards = dataMovies.map((movie, index) => (
    <Link to="/Movies">
    <Col span={6}>
      {" "}
      <Card
        id="Card"
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={movieImages[index]} />}
      >
        <Meta title={movieTitles[index]} />
      </Card>
    </Col>
    </Link>
  ));

  return (
    <>
      <SearchSort/>
      <Row gutter={[8, 8]}>
        {movieCards}
      </Row>
    </>
  );
}
