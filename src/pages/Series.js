import { dataSeries } from "../FetchData"
import { Row, Col, Card } from "antd";

const { Meta } = Card;


export function Series(){
  // resimlerin url'lerini bulunduran array
  const serieImages = dataSeries.map((movie) => movie.images["Poster Art"].url);

  // dizilerin title'lerini bulunduran array
  const serieTitles = dataSeries.map((movie) => movie.title);

  // dizilerin card'larını oluşturan array
  const serieCards = dataSeries.map((movie, index) => (
    <Col span={6}>
      <Card
        id="Card"
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={serieImages[index]} />}
      >
        <Meta title={serieTitles[index]} />
      </Card>
    </Col>
  ));


    return(
        <>
        <Row gutter={[8, 8]}>
          {serieCards}
        </Row>
      </>
    )
}