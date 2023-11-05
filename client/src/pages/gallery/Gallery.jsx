import { useState } from "react";
import imageUploadIcon from "../../assets/upload-image.svg";
import { Row, Col, Upload } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { selectedItem } from "../../features/headerSlice";
import { useDispatch, useSelector } from "react-redux";
const Gallery = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.ImageData.images);
  const [selected, setSelected] = useState({});

  const [hoveredImageId, setHoveredImageId] = useState([]);

  const handleMouseEnter = (id) => {
    setHoveredImageId(selected);
  };

  const handleMouseLeave = () => {
    // setHoveredImageId(null);
  };

  const handleSelect = (id, e) => {
    const newItemSelected = {
      ...selected,
      [id]: e.target.checked,
    };
    setSelected(newItemSelected);
    dispatch(selectedItem(newItemSelected));
  };
  console.log(selected);
  return (
    <>
      <Row
        justify="center"
        style={{ backgroundColor: "aliceblue", height: "100vh" }}
      >
        <Col lg={{ span: 15 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 container bg-white p-10 rounded-b-md">
            {images.map((item, index) => {
              return (
                <div
                  className={
                    index === 0 ? "col-span-2 row-span-2 relative" : "relative"
                  }
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  // onMouseLeave={handleMouseLeave}
                >
                  {/* <input
                    type="checkbox"
                    className="absolute h-5 w-5 cursor-pointer top-4 left-4 z-10 "
                    key={item.id + "key"}
                    onChange={(e) => handleSelect(item.id, e)}
                  /> */}
                  {hoveredImageId === item.id && (
                    <input
                      type="checkbox"
                      className="absolute h-5 w-5 cursor-pointer top-4 left-4 z-10 "
                      key={item.id + "key"}
                      onChange={(e) => handleSelect(item.id, e)}
                    />
                  )}

                  <img
                    className={
                      "rounded-md border-2 hover:brightness-75 transition-brightness duration-300 bg-white cursor-pointer  "
                    }
                    src={item.src}
                    alt={item.alt}
                    key={item.id}
                  />
                </div>
              );
            })}

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:brightness-75 transition-brightness duration-300 bg-white"
              >
                <object
                  data={imageUploadIcon}
                  width="30"
                  className="pt-12"
                ></object>
                <div className="flex flex-col items-center justify-center pt-5 pb-12">
                  <p className="text-xs text-black font-bold">Add Images</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Gallery;
