import React from "react";
import { Col, Flex, Row, Spin } from "antd";
const Spinner = () => (
  <Row
    justify="center"
    className=" absolute flex items-center justify-center h-full w-full"
  >
    <Col>
      <Flex gap="large" vertical>
        <Flex gap="large">
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </Flex>
      </Flex>
    </Col>
  </Row>
);
export default Spinner;
