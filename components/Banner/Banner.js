import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon1 from '/public/images/icon/globe.webp';
import Icon2 from '/public/images/icon/icon-3.webp';
import Icon3 from '/public/images/icon/icon-2.webp';
import VideoPlayer from "./Video";

const Banner = () => {
    return (
        <section className="banner" style={{ backgroundImage: `url(${'/images/bg/cloud-bg.webp'})` }} >
            <div className="container">
                <div className="banner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 md-mb-60">
                            <h1>Accelerate Your Career in Oracle SCM in Just 3 Months</h1>
                            <p className="banner-para">Industry-recognized Oracle Fusion SCM course designed for IT professionals, ERP users, and supply chain experts</p>
                            <div className="icon-box">
                                <div className="d-flex align-items-center mb-30" style={{ gap: `20px` }}>
                                    <div className="icon">
                                        <Image src={Icon1} alt="" title="" width={80} height={80}></Image>
                                    </div>
                                    <div className="icon-box-content">
                                        <p>Globally Recognized Credly Certification</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-30" style={{ gap: `20px` }}>
                                    <div className="icon">
                                        <Image src={Icon2} alt="" title="" width={80} height={80}></Image>
                                    </div>
                                    <div className="icon-box-content">
                                        <p>Access to Oracle Instance worth ₹30 Lakh</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-30" style={{ gap: `20px` }}>
                                    <div className="icon">
                                        <Image src={Icon3} alt="" title="" width={80} height={80}></Image>
                                    </div>
                                    <div className="icon-box-content">
                                        <p>1-1 Dedicated Placement Manager</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="#" className="banner-btn">Book a Free Demo</Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="video-content">
                            <VideoPlayer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;