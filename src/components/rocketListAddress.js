import React from "react";
import data from "../address.json";

export default function RocketList() {
  console.log(data);
  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="mt-3 mb-5">SpaceX Rocket Address</h2>
        <div className="row">
          {data ? (
            data.map((d, i) => {
              return (
                <div className="col-sm-3 mb-5" key={i}>
                  <div className="card shadow" style={{minHeight:'275px'}}>
                    <div className="card-body">
                      <h5>{d.payload_id}</h5>
                      <p className="card-text">
                        <strong>Nationality : </strong>
                        <span className="text-muted">
                          {d.nationality || "No Data"}
                        </span>
                      </p>
                      <p className="card-text">
                        <strong>Manufacturer : </strong>
                        <span className="text-muted">
                          {d.manufacturer || "No Data"}
                        </span>
                      </p>
                      <p className="card-text">
                        <strong>Type : </strong>
                        <span className="text-muted">
                          {d.payload_type || "No Data"}
                        </span>
                      </p>
                      <p className="card-text">
                        <strong>Customers : </strong>
                        {d.customers
                          ? d.customers.map((data) => {
                              return <span className="text-muted">{data + ','}</span>;
                            })
                          : "No Data"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
