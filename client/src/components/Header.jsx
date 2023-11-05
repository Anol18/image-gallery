import { Col, Row } from "antd";
import { CheckSquareFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteImage } from "../features/imageSlice";

const Header = () => {
  const item = useSelector((state) => state.headerData.item);
  const dispatch = useDispatch();
  const countSelectedItems = () => {
    let count = 0;
    Object.values(item).map((i) => {
      if (i === true) {
        count++;
      }
    });
    return count;
  };
  const handleDelete = () => {
    // console.log(item);
    dispatch(deleteImage(item));
  };
  return (
    <>
      <Row
        justify="center"
        style={{ backgroundColor: "aliceblue" }}
        className="mt-10"
      >
        <Col
          className="bg-white  rounded-t-md"
          lg={{ span: 15 }}
          xs={{ span: 20 }}
        >
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
