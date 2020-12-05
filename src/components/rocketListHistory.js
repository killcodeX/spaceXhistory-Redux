import React, { useState } from "react";
import data from "../data.json";
import { Collapse, Button } from "react-bootstrap";

export default function RocketList() {
  const [open, setOpen] = useState(false);
  const [selectElement, setSelectElement] = useState(null);

  const handleClick = (id) => {
    setSelectElement(id);
  };

  console.log(data);
  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="mt-3 mb-3">SpaceX Rocket History</h2>
        <div className="row">
          {data ? (
            data.map((d, i) => {
              return (
                <div className="col-sm-3 mb-5" key={i}>
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-up">
                        <h5>{d.title}</h5>
                        <p className="card-text">
                          <strong>Launch Date : </strong>
                          {new Date(d.event_date_utc).toLocaleDateString()}
                        </p>
                        <p className="card-text">
                          <strong>Flight Number : </strong>
                          {d.flight_number || "No Data"}
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => handleClick(i)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                      >
                        {open ? "Hide Details" : "View Details"}
                      </Button>
                      <Collapse in={selectElement == i ? !open : open}>
                        <div className="mt-4">
                          <p className="text-muted mt-4">{d.details}</p>
                        </div>
                      </Collapse>
                      <hr />
                      <div className="social-media">
                        <a href={d.links.reddit}>
                          <i class="fab fa-reddit"></i>
                        </a>
                        <a href={d.links.article}>
                          <i class="far fa-newspaper"></i>
                        </a>
                        <a href={d.links.wikipedia}>
                          <i class="fab fa-wikipedia-w"></i>
                        </a>
                      </div>
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
