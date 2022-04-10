import React from "react";
import { useLocation } from "react-router-dom";

const BusinessDetails = () => {
  const location = useLocation();

  console.log("hoursss", location.state.hours);
  const hours = location.state.hours.map((hour) => {
    return (
      <p>
        {hour.day}: {hour.open}-{hour.close}
      </p>
    );
  });

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img
                className="ui fluid image"
                src={location.state.image}
                alt="dd"
              />
            </div>
            <div className="column rp">
              <p>
                <b>Business Name:</b> {location.state.company_name}
              </p>
              <p>
                <b>Adress:</b>{" "}
                {`${location.state.address}, ${location.state.city}, ${location.state.province}, ${location.state.postal_code}`}
              </p>
              <p>
                <b>Website:</b> {location.state.website}
              </p>

              <div>
                <p>
                  <b>Hours:</b>
                </p>
                {hours}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
