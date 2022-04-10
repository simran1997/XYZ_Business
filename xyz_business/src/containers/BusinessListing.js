import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBusiness } from "../redux/actions/businessActions";
import BusinessComponent from "./BusinessComponent";

const BusinessPage = () => {
  const products = useSelector((state) => state.allBusiness.business);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://smoothcommerce.tech/api.json")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setBusiness(response.data));
  };

  useEffect(() => {
    fetchProducts();
  });

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <BusinessComponent />
    </div>
  );
};

export default BusinessPage;
