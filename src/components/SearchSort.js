import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Input, Row, Col } from "antd";
import './SearchSort.css';

const { Search } = Input;

/* Dropdown'a gönderilecek değerler */
const items = [
  {
    key: "1",
    label: "Yeniye Göre Sırala",
  },
  {
    key: "2",
    label: "Eskiye Göre Sırala",
  },
  {
    key: "3",
    label: "Puana Göre Sırala",
  },
  {
    key: "4",
    label: "Rastgele Sırala",
  },
];


function SearchSort({onChangeHandler}) {
  
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
            <button id="sort-text" onClick={(e) => e.preventDefault()}>
              <Space>
                Sırala
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
}
export default SearchSort;
