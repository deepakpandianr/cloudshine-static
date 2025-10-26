import React from "react";
import Carousel from "./Carousel";

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">
        <div className="heading">
          <div className="head-content">
            <h2>What Our Students Say</h2>
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Testimonial;
