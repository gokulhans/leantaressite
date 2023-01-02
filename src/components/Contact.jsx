import React from 'react'
function Contact() {
    return (
        <> 
<section id="contact" className="contact">
            <div className="container">

                <center>
                    <h1 className="font-black text-4xl"><span className="text-red-500">GET IN
                        </span><span><b> TOUCH WITH
                                US</b></span>
                    </h1>
                </center>
                <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bg-red-500 text-white bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>Le ANTARES DEVELOPERS .Pvt.Ltd <br></br>
                                    3rd FLOOR, HILITE BUSINESS PARK</p>
                            </div>

                            <div className="email">
                                <i className="bg-red-500 text-white bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className="bg-red-500 text-white bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name"
                                        placeholder="Your Name" required/>
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Your Email" required/>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject"
                                    placeholder="Subject" required/>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                    required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
        </>
    )
}

export default Contact