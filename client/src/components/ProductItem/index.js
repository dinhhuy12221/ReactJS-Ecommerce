import React, { useContext } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import "./index.css";
import LoadingAnimation from "../LoadingAnimation";

export default function ProductItem() {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <div className="item productItem">
      <LoadingAnimation time={1200}>
        <div className="imgWrapper">
          <Link to={"/product/1"}>
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg"
            />
          </Link>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <AiOutlineFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty />
            </Button>
          </div>
        </div>
  
        <span className="badge bg-primary">-28%</span>
  
        <div className="info">
          <Link to={"/product/1"} style={{ color: "#333" }}>
            <h4>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h4>
          </Link>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={3}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger">$14.00</span>
          </div>
        </div>
      </LoadingAnimation>
    </div>
  );
}
