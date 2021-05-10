import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/logo1.jpg";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div className="card ">
          <img src={props.imgsrc} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>

            <NavLink to="#" className="btn btn-primary">
              Click Here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
