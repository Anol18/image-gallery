import { useEffect, useState } from "react";
import imageUploadIcon from "../../assets/upload-image.svg"; //upload button's icon
import { Row, Col } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { selectedItem } from "../../features/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { newStateOfImages } from "../../features/imageSlice";
const Gallery = () => {
  const dispatch = useDispatch(); //react redux dispatch
  const images = useSelector((state) => state.ImageData.images); //initially load images form redux store
  const [selected, setSelected] = useState({}); // useState to store checked image's information

  const [hoveredImageId, setHoveredImageId] = useState(null); //useState to store hovered image's id

  // mouse enter to checkbox show function
  const handleMouseEnter = (id) => {
    setHoveredImageId(id);
  };

  // mouse leave to checkbox hide function
  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  // after click on checkbox this function store image's id with checked value
  const handleSelect = (id, e) => {
    const newItemSelected = {
      ...selected,
      [id]: e.target.checked,
    };
    setSelected(newItemSelected);
    dispatch(selectedItem(newItemSelected)); //dispatch delected is information to store data in redux to show the slected infor to header
  };

  // drag function to get track of changes images positions
  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // No valid destination, do nothing
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    if (startIndex !== endIndex) {
      // Swap the images in the 'images' array
      const updatedImages = [...images];
      const [movedImage] = updatedImages.splice(startIndex, 1);
      updatedImages.splice(endIndex, 0, movedImage);
      console.log(updatedImages);
      dispatch(newStateOfImages(updatedImages));
    }
  };

  return (
    <>
      {/* antd Row */}
      <Row
        justify="center"
        style={{ backgroundColor: "aliceblue", height: "100vh" }}
      >
        {/* antd column to make a container */}
        <Col lg={{ span: 15 }}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId="image-gallery"
              direction="horizontal"
              type="list"
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 container bg-white p-10 rounded-b-md"
                >
                  {/* mapping images */}
                  {images?.map((item, index) => {
                    return (
                      // dragable area init
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className={
                              index === 0
                                ? "col-span-2 row-span-2 relative"
                                : "relative"
                            }
                            key={index}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {(hoveredImageId === item.id ||
                              selected[item.id]) === true && (
                              <input
                                type="checkbox"
                                className={`absolute h-5 w-5 cursor-pointer top-4 left-4 z-10`}
                                checked={selected[item.id]}
                                key={item.id + "key"}
                                onChange={(e) => handleSelect(item.id, e)}
                              />
                            )}
                            {/* image tab to visible images */}
                            <img
                              className={`rounded-md border-2 bg-white cursor-pointer ${
                                selected[item.id] === true
                                  ? "opacity-50"
                                  : "hover:brightness-75 transition-all duration-300"
                              }`}
                              src={item.src}
                              alt={item.alt}
                              key={item.id}
                            />

                            {provided.placeholder}
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {/* Upload button */}
                  <div className="flex items-center justify-center w-[300px] ml-5 lg:w-dull md:w-full md:ml-0">
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
                        <p className="text-xs text-black font-bold">
                          Add Images
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Col>
      </Row>
    </>
  );
};

export default Gallery;
