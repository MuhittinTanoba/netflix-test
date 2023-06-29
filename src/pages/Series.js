import { dataSeries } from "../FetchData"
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import SearchSort from "../components/SearchSort";
import {useState} from 'react';

const { Meta } = Card;


export function Series(){
  const [searchText, setSearchText] = useState('');
  console.log(searchText);


  // dizilerin card'larını oluşturan array
  // filter fonksiyonu ile arama yapılır
  const serieCards = dataSeries
  .filter((serie) => {
    return searchText.toLowerCase() === ""
    ? serie
    : serie.title.toLowerCase().includes(searchText);
  })
  .map((serie) => (
    <Link to="/Series">
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


    return(
        <>
        {/* SearchSort componentinin onChangeHandler'i ile input'a yazılan değerleri searchtext isimli değişkene atar */}
        <SearchSort onChangeHandler={(e) => setSearchText(e.target.value)}/>
        <Row gutter={[8, 8]}>
          {serieCards}
        </Row>
      </>
    )
}