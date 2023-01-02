import React from 'react'
function Portfolio() {
    return (
        <>
    <section id="portfolio" className="portfolio">
        
        <div className="container">

            <center className="mb-5">
                <h1 class="font-black text-4xl"><span class="text-red-500">OUR
                    </span><span><b>WORKS</b></span>
                </h1>
            </center>

            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active mx-2">All</li>
                        <li data-filter=".filter-app" className='mx-2'>Villas</li>
                        <li data-filter=".filter-card" className='mx-2'>Apartments</li>
                        <li data-filter=".filter-web">Resorts</li>
                    </ul>
                </div>
            </div>

            <div className="row portfolio-container">

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/CAFE PROJECT AT KANNADIKAL .jpg" className="img-fluid rounded-md"
                            alt=""/>
                        <div className="portfolio-info">
                            <h4>CAFE PROJECT</h4>
                            <p>KANNADIKAL</p>
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/CAFE PROJECT AT KANNADIKAL .jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox" title="CAFE PROJECT"><i
                                        className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/PROJECT AT MALAPURAM TIRUR.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>PROJECT AT MALAPURAM TIRUR</h4>
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/PROJECT AT MALAPURAM TIRUR.jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox"
                                    title="PROJECT AT MALAPURAM TIRUR"><i className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/PROPOSED COMMERCIAL BUILDING AT PALAKAD.jpg" className="img-fluid"
                            alt=""/>
                        <div className="portfolio-info">
                            <h4>PROPOSED COMMERCIAL BUILDING AT PALAKAD</h4>
                            {/* <!-- <p>App</p> --> */}
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/PROPOSED COMMERCIAL BUILDING AT PALAKAD.jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox"
                                    title="PROPOSED COMMERCIAL BUILDING AT PALAKAD"><i className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/PROPOSED KALAKSHETRA .jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>PROPOSED KALAKSHETRA</h4>
                            {/* <!-- <p>Card</p> --> */}
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/PROPOSED KALAKSHETRA .jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox"
                                    title="PROPOSED KALAKSHETRA"><i className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/PROPOSED RESIDENCE AT TRIVANDRUM.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>PROPOSED RESIDENCE AT TRIVANDRUM</h4>
                            {/* <!-- <p>Web</p> --> */}
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/PROPOSED RESIDENCE AT TRIVANDRUM.jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox"
                                    title="PROPOSED RESIDENCE AT TRIVANDRUM"><i className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/PROPOSED RESIDENCE AT VELIMADUKUNU .jpg" className="img-fluid"
                            alt=""/>
                        <div className="portfolio-info">
                            <h4>PROPOSED RESIDENCE AT VELIMADUKUNU</h4>
                            {/* <!-- <p>App</p> --> */}
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/PROPOSED RESIDENCE AT VELIMADUKUNU .jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox"
                                    title="PROPOSED RESIDENCE AT VELIMADUKUNU"><i className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/PROPOSED RESORT PROJECT AT MUNNAR.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>PROPOSED RESORT PROJECT AT MUNNAR</h4>
                            {/* <!-- <p>Card</p> --> */}
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/PROPOSED RESORT PROJECT AT MUNNAR.jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox"
                                    title="PROPOSED RESORT PROJECT AT MUNNAR"><i className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/RENOVATION PROJECT AT CHERUVATA .jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>RENOVATION PROJECT AT CHERUVATA</h4>
                            {/* <!-- <p>Card</p> --> */}
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/RENOVATION PROJECT AT CHERUVATA .jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox"
                                    title="RENOVATION PROJECT AT CHERUVATA"><i className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/Residence at mukkam .jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Residence at mukkam</h4>
                            {/* <!-- <p>Web</p> --> */}
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/Residence at mukkam .jpg" data-gallery="portfolioGallery"
                                    className="portfolio-lightbox" title="Residence at mukkam"><i
                                        className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap rounded-lg">
                        <img src="assets/img/ProjectsLe/RESIDENCE PROJECT AT PALAKKAD.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>RESIDENCE PROJECT AT PALAKKAD</h4>
                            {/* <!-- <p>Web</p> --> */}
                            <div className="portfolio-links">
                                <a href="assets/img/ProjectsLe/RESIDENCE PROJECT AT PALAKKAD.jpg"
                                    data-gallery="portfolioGallery" className="portfolio-lightbox"
                                    title="RESIDENCE PROJECT AT PALAKKAD"><i className="bx bx-plus"></i></a>
                                {/* <!-- <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                    data-glightbox="type: external" title="Portfolio Details"><i
                                        className="bx bx-link"></i></a> --> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    
        </>
    )
}

export default Portfolio