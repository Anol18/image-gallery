import { Col, Row } from "antd";
import React from "react";

const Header = (props) => {
  return (
    <>
      <Row justify="center" style={{ backgroundColor: "aliceblue" }}>
        <Col
          className="bg-white rounded-lg flex justify-between"
          lg={{ span: 16 }}
        >
          <div className="h-20 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Gallery</div>
            <div>Delete Item</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
