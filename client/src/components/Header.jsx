import { Col, Row } from "antd";
import { CheckSquareFilled } from "@ant-design/icons"; //selected icon
import { useDispatch, useSelector } from "react-redux";
import { deleteImage } from "../features/imageSlice"; //import reduces from redux slice
import { selectedItem } from "../features/headerSlice"; //import reduces from redux slice

const Header = () => {
  const item = useSelector((state) => state.headerData.item); //image items data from redux store
  const dispatch = useDispatch(); //dispatch function from react-redux

  // count function of selected items
  const countSelectedItems = () => {
    let count = 0;
    Object.values(item).map((i) => {
      if (i === true) {
        count++;
      }
    });
    return count;
  };

  // delete function, send data to redux store
  const handleDelete = () => {
    dispatch(deleteImage(item)); //send selected data's info
    dispatch(selectedItem(0)); //reset selected state after deletion
  };
  return (
    <>
      {/* header row */}
      <Row
        justify="center"
        style={{ backgroundColor: "aliceblue" }}
        className="mt-10"
      >
        <Col
          className="bg-white rounded-t-md"
          lg={{ span: 15 }}
          xs={{ span: 24 }}
        >
          {/* inner row */}
          <Row className="flex justify-between items-center h-20 px-10">
            <Col>
              <span className="text-xl font-bold text-gray-800">
                {countSelectedItems() > 0 && (
                  <CheckSquareFilled className=" text-blue-700" />
                )}
                {countSelectedItems() === 0
                  ? "Gallery"
                  : countSelectedItems() === 1
                  ? " " + countSelectedItems() + " " + "File Selected"
                  : " " + countSelectedItems() + " " + "Files Selected"}
              </span>
            </Col>
            <Col>
              {/* delete button */}
              <button
                className="hover:underline  font-bold text-red-700"
                onClick={handleDelete}
              >
                {countSelectedItems() === 0
                  ? ""
                  : countSelectedItems() === 1
                  ? "Delete File"
                  : "Delete Files"}
              </button>
            </Col>
          </Row>
          <hr />
        </Col>
      </Row>
    </>
  );
};

export default Header;
