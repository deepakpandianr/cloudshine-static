"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import avatar from "@/public/images/icon/avatar.webp";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <div className="testimonial-slider-wrapper">
    <Swiper
      modules={[Navigation, Pagination]} // add navigation & pagination
      spaceBetween={30} // gap between slides
      slidesPerView={1} // default for mobile
      breakpoints={{
        768: {
          // screens >= 768px
          slidesPerView: 2,
        },
      }}
      navigation // enable next/prev arrows
      pagination={{ clickable: true }} // enable dots
    >
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="rating">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
          </div>
          <div className="testimonial-para">
            <p>
              <em>
                Instructor has provided in depth training for all the SCM
                module. Best part was explanation of the process flow and impact
                of every setup. The instance was really great there was hardly
                any downtime and the performance of the Instance was good.
              </em>
            </p>
          </div>
          <div className="author">
            <Image
              src={avatar}
              alt=""
              title=""
              width={75}
              height={75}
            ></Image>
            <h6>Kunal chand</h6>
            <p>SCM Consultant</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="rating">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
          </div>
          <div className="testimonial-para">
            <p>
              <em>
                CloudShine's Oracle Fusion ERP SCM training was an enriching
                experience with the right mix of theory and hands-on practice.
                It built a solid foundation for my SCM functional consulting
                journey. Highly recommended!
              </em>
            </p>
          </div>
          <div className="author">
            <Image
              src={avatar}
              alt=""
              title=""
              width={75}
              height={75}
            ></Image>
            <h6>Kunal chand</h6>
            <p>SCM Consultant</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <div className="rating">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
          </div>
          <div className="testimonial-para">
            <p>
              <em>
                Instructor has provided in depth training for all the SCM
                module. Best part was explanation of the process flow and impact
                of every setup. The instance was really great there was hardly
                any downtime and the performance of the Instance was good.
              </em>
            </p>
          </div>
          <div className="author">
            <Image
              src={avatar}
              alt=""
              title=""
              width={75}
              height={75}
            ></Image>
            <h6>Kunal chand</h6>
            <p>SCM Consultant</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
