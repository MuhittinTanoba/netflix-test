import { Row, Col, Card } from "antd";
import { dataMovies } from "../FetchData";
import { Link } from "react-router-dom";
import SearchSort from "../components/SearchSort";
import {useState} from 'react';

const { Meta } = Card;

export function Movies() {
  const [searchText, setSearchText] = useState('');
  console.log(searchText);


  // filmlerin card'larını oluşturan array
  // filter fonksiyonu ile arama yapılır
  // map fonksiyonu ile filter'dan geçen veriler için card oluşturulup movieCards değişkenine atanır.
  const movieCards = dataMovies
    .filter((movie) => {
      return searchText.toLowerCase() === ""
      ? movie
      : movie.title.toLowerCase().includes(searchText);
    })
    .map((movie, index) => (
      <Link to="/Movies">
        <Col span={6}>
          {" "}
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
      <SearchSort  onChangeHandler={(e) => setSearchText(e.target.value)}/>
      <Row gutter={[8, 8]}>{movieCards}</Row>
    </>
  );
}
