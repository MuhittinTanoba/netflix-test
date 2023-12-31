import { Card } from "antd";
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

export function Home() {
  return (
    <>
      <Row gutter={[16, 16]}>
        {/* Film Kartı */}
        <Link to="/Movies">
          <Col span={6}>
            {" "}
            <Card
              id="Card"
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://upload.wikimedia.org/wikipedia/tr/9/98/John_Wick_TeaserPoster.jpg"
                />
              }
            >
              <Meta title="Film" />
            </Card>
          </Col>
        </Link>

        {/* Dizi Kartı */}
        <Link to="/Series">
          <Col span={6}>
            {" "}
            <Card
              id="Card"
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://upload.wikimedia.org/wikipedia/en/e/eb/Wolfcreek.png"
                />
              }
            >
              <Meta title="Dizi" />
            </Card>
          </Col>
        </Link>
      </Row>
    </>
  );
}
