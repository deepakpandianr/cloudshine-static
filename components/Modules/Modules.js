import React from "react";
import Image from "next/image";
import check from "@/public/images/icon/check.webp"

const Modules = () => {
    return (
        <section className="modules-section" id="modules">
            <div className="container">
                <div className="heading">
                    <div className="head-content">
                        <h2>Comprehensive Module Breakdown</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-40">
                        <div className="module-box-content">
                            <div className="module-no">
                                <span>01</span>
                            </div>
                            <div className="module-inner-content">
                                <h4 className="module-h4">Introduction to Oracle SCM Cloud</h4>
                                <p className="module-p">Foundation concepts, architecture overview, and platform navigation</p>
                                <ul>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>SCM Cloud fundamentais</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Platform architecture</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>User interface navigation</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-40">
                        <div className="module-box-content">
                            <div className="module-no">
                                <span>02</span>
                            </div>
                            <div className="module-inner-content">
                                <h4 className="module-h4">Product Data Hub Cloud Implementation</h4>
                                <p className="module-p">Master product information management and data governance</p>
                                <ul>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Product catalog setup</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Data quality management</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Integration strategies</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-40">
                        <div className="module-box-content">
                            <div className="module-no">
                                <span>03</span>
                            </div>
                            <div className="module-inner-content">
                                <h4 className="module-h4">Inventory Management Cloud Implementation</h4>
                                <p className="module-p">Optimize inventory processes and warehouse operations</p>
                                <ul>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>inventory optimization</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Warehouse management</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Stock level monitoring</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-40">
                        <div className="module-box-content">
                            <div className="module-no">
                                <span>04</span>
                            </div>
                            <div className="module-inner-content">
                                <h4 className="module-h4">Oracle Procurement Cloud Implementation</h4>
                                <p className="module-p">Streamline procurement processes and supplier management</p>
                                <ul>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Supplier onboarding</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Purchase order management</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Contract management</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-40">
                        <div className="module-box-content">
                            <div className="module-no">
                                <span>05</span>
                            </div>
                            <div className="module-inner-content">
                                <h4 className="module-h4">Order Management Cloud Implementation</h4>
                                <p className="module-p">End-to-end order processing and fulfillment strategies</p>
                                <ul>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Order orchestration</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Fulfillment optimization</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Customer experience</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-40">
                        <div className="module-box-content">
                            <div className="module-no">
                                <span>06</span>
                            </div>
                            <div className="module-inner-content">
                                <h4 className="module-h4">Near Real-Time Project Implementation</h4>
                                <p className="module-p">End-to-End project implementation in a real-time development environment</p>
                                <ul>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Real project-oriented assignments</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>Capstone project</span></li>
                                    <li><Image src={check} alt="" width={18} height={18}></Image> <span>60+ implementation assignments</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modules;
