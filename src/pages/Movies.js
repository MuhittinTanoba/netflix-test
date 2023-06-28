import { Row, Col, Card } from "antd";
import { dataMovies } from "../FetchData";

const { Meta } = Card;

export function Movies() {
  // resimlerin url'lerini bulunduran array
  const movieImages = dataMovies.map((movie) => movie.images["Poster Art"].url);

  // filmlerin title'lerini bulunduran array
  const movieTitles = dataMovies.map((movie) => movie.title);

  // filmlerin card'larını oluşturan array
  const movieCards = dataMovies.map((movie, index) => (
    <Col span={6}>
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
  ));

  return (
    <>
      <Row gutter={[8, 8]}>
        {movieCards}
      </Row>
    </>
  );
}
