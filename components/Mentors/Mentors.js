import React from "react";

const Mentor = () => {
  return (
    <section className="mentor-section">
      <div className="container">
        <div className="heading">
          <div className="head-content">
            <h2>Learn from Industry Experts</h2>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-4 md-mb-30">
            <div className="num-box mb-40">
              <h5>18+</h5>
              <p>Years of Experience</p>
            </div>
            <div className="num-box mb-40">
              <h5>500+</h5>
              <p>Students Trained</p>
            </div>
            <div className="num-box">
              <h5>95%</h5>
              <p>Placement Rate</p>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="mentor-content">
              <h3>Expert Trainers with Real-World Experience</h3>
              <p>
                Our experienced trainers bring 18+ years of hands-on experience
                in Oracle Fusion SCM implementations across various industries.
                They have successfully led multiple enterprise-level projects
                and possess deep expertise in:
              </p>
              <ul>
                  <li><span>→</span> Oracle Cloud implementations and migrations</li>
                  <li><span>→</span> Supply chain optimization strategies</li>
                  <li><span>→</span> Enterprise resource planning best practices</li>
                  <li><span>→</span> Industry-specific SCM solutions</li>
                  <li><span>→</span> Change management and user adoption</li>
              </ul>
              <p>
                Learn from professionals who have worked with Fortune 500
                companies and understand the real-world challenges you'll face
                in your career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
