import { useState } from "react";
import { Row, Col, Space, Layout } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from "../../libs/data";
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState({});
  const handleSelect = (e) => {
    setSelected({
      ...selected,
      [e]: !checked,
    });
    setChecked(!checked);
  };
  // console.log(selected);
  return (
    <>
      <div style={{ backgroundColor: "aliceblue" }}>
        <Row justify="center">
          <Col lg={{ span: 15 }}>
            <Row gutter={[16, 16]} className="bg-white p-12  rounded-lg">
              {data.map((item, index) => {
                console.log();
                return (
                  <Col xs={24} sm={12} md={8} xl={6} lg={6} key={index}>
                    <div key={index + 500}>
                      <input
                        type="checkbox"
                        className="absolute top-5 left-5 h-5 w-8 z-20 cursor-pointer"
                        checked={selected[item.id]}
                        key={item.id + "asdasd"}
                        onClick={() => handleSelect(item.id)}
                      />
                      <img
                        onClick={() => handleSelect(item.id)}
                        className="rounded-md border-2 hover:brightness-75 transition-brightness duration-300 bg-white cursor-pointer"
                        src={item.src}
                        alt={item.alt}
                        key={item.id}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Gallery;
