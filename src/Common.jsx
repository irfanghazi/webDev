import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/logo1.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header">
        <div className="container-fluid ">
          <div className="rows">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-6 pt-5 ">
                  <h2>
                    {props.name}
                    <strong className="brand_name"> First Step</strong>
                  </h2>
                  <div className="my-3">
                    <h4>We are a team of talented web developer</h4>
                  </div>
                  <div className="my-3 ">
                    <NavLink
                      className="btn btn-primary button_1"
                      to={props.visit}
                      role="button"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-6  ">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated rounded float-end mt-3 "
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
