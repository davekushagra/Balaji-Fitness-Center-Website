import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Add space before the footer */}
      <div style={{ height: '50px' }} />
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted" style={{ marginTop: '50px' }}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>BALAJI FITNESS CENTRE
                </h6>
                <p>Welcome to BALAJI FITNESS CENTRE, where we strive to provide the best fitness solutions.</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                
                <h6 className="text-uppercase fw-bold mb-4">Useful Links 1</h6>
                <p>
                  <Link to="/Blog" className="text-reset">
                    Blog
                  </Link>
                </p>
                <p>
                
                </p>
                <p>
                <Link to="/Events" className="text-reset">
                    Events
                  </Link>
                </p>
                <p>
                <Link to="/Gallery" className="text-reset">
                    Gallery
                  </Link>
                </p>
                <p>
                <Link to="/GymMembershipPlans" className="text-reset">
                    Membership Plans
                  </Link>
                </p>
                <p>
                <Link to="/Dashboard" className="text-reset">
                    Dashboard
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                
                <h6 className="text-uppercase fw-bold mb-4">Useful Links 2</h6>
                <p>
                  <Link to="/FAQs" className="text-reset">
                    FAQs
                  </Link>
                </p>
                <p>
                  <Link to="/Classes" className="text-reset">
                    Classes
                  </Link>
                </p>
                <p>
                  <Link to="/SuccessStories" className="text-reset">
                    Success Stories                  
                  </Link>
                </p>
                <p>
                  <Link to="/Challenges" className="text-reset">
                    Challenges                  
                  </Link>
                </p>
                <p>
                  <Link to="/ForgotPassword" className="text-reset">
                  Forgot Password     
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                
                <h6 className="text-uppercase fw-bold mb-4">Useful Links 3</h6>
                <p>
                  <Link to="/Schedule" className="text-reset">
                    Schedule
                  </Link>
                </p>
                <p>
                  <Link to="/Booking" className="text-reset">
                  Booking
                  </Link>
                </p>
                <p>
                  <Link to="/signup" className="text-reset">
                  signup
                  </Link>
                </p>
                <p>
                  <Link to="/signin" className="text-reset">
                  Signin
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Anand
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i> info@balajifitness.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +91 9876543210
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +91 9876543211
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <a className="text-reset fw-bold" href="/">
            www.balajifitness.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
