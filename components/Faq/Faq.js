import React from "react";

const Faq = () => {
  return (
    <section className="faq-section" id="faqs">
      <div className="container">
        <div className="heading">
          <div className="head-content">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="accordion" id="faqAccordion">
          {/* FAQ 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What are the prerequisites for this course?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The total duration of our Oracle SCM course is 3 months. Weekend
                batches are also available with 4-hour sessions on Saturdays and
                Sundays.
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How do I get access to Oracle instances?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                No prior Oracle experience is required. Our course is designed
                for both beginners and professionals looking to upskill in SCM
                Cloud.
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What certification will I receive?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The training is conducted online through live interactive
                sessions with our certified instructors.
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                What placement support do you provide?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes! After completing the course, you’ll receive a completion
                certificate recognized by Cloudshine and can appear for Oracle
                certification exams.
              </div>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
               Can I attend classes if I miss a session?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                After completing the course, you can apply for roles like Oracle
                SCM Consultant, Functional Analyst, or Implementation Specialist
                in top IT companies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
