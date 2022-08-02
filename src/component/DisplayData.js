
import { Fragment } from "react";
import "./category.module.css";
import classes from "./category.module.css";

const DisplayData = ({ data }) => {
  return (
    <Fragment>
      <div className={classes["the-card"]}>
        <div className="row">
          {data.map((d) => (
            <div className="col-xl-4 col-sm-12 col-12 mb-1" key={d.id}>
              <div className="card item">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      {/* image */}

                      <p>{d.name}</p>
                      <i className="fas fa-pencil-alt text-info fa-3x">
                        {d.location}
                      </i>
                    </div>

                    <div className="text-end">
                      <h4 className={classes.price}>GHC{d.price}</h4>
                      <p className={classes.brand}>
                        {d.brand.substring(0, 13)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DisplayData;
