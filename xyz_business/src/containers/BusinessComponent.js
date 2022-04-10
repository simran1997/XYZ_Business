import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const BusinessComponent = () => {
  const products = useSelector((state) => state.allBusiness.business);
  const renderList = products.map((product) => {
    const {
      id,
      company_name,
      website,
      address,
      image,
      city,
      province,
      postal_code,
      hours,
    } = product;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>
          {/* <Link to={`/product/${id}`}>{company_name}</Link> */}
          <Link
            to={{
              pathname: `/product/${id}`,
              state: {
                id,
                company_name,
                website,
                address,
                image,
                city,
                province,
                postal_code,
                hours,
              },
            }}
          >
            {company_name}
          </Link>
        </td>
        <td>{website}</td>
        <td>{`${address}, ${city}, ${province}, ${postal_code}`}</td>
      </tr>
    );
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Business ID</th>
            <th>Business Name</th>
            <th>Website</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </table>
    </>
  );
};

export default BusinessComponent;
