import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Input, Row, Col, Button } from "antd";
import "./SearchSort.css";

const { Search } = Input;

function SearchSort({ onChangeHandler, sortByDate, shuffleMovies, sortByDateAsc }) {

  /* Dropdown'a gönderilecek değerler */
  const items = [
    {
      key: "1",
      label: (
        <Button type="text" onClick={sortByDate}>
          Yeniye Göre Sırala
        </Button>
      ),
    },
    {
      key: "2",
      label: <Button type="text" onClick={sortByDateAsc}>Eskiye Göre Sırala</Button>,
    },
    {
      key: "3",
      label: <Button type="text">Puana Göre Sırala</Button>,
    },
    {
      key: "4",
      label: <Button type="text" onClick={shuffleMovies}>Rastgele Sırala </Button>,
    },
  ];

  return (
    <>
      <Row id="input-dropdown-row">
        <Col span={8}>
          <Search
            /* input'a yazacağımız değeri searchtext değişkenine atıyoruz */
            onChange={onChangeHandler}
            placeholder="Film / Dizi / Oyuncu ara"
            style={{ width: 250 }}
          />
        </Col>

        <Col span={8} offset={8}>
          <Dropdown
            id="dropdown"
            menu={{
              items,
            }}
          >
            <a id="sort-text" onClick={(e) => e.preventDefault()}>
              <Space>
                Sırala
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
}
export default SearchSort;
