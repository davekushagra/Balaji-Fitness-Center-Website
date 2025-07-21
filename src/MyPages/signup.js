import React, { useState } from 'react';

const SignUp = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here (e.g., send data to server)

    // After successful submission, update state to show congratulations message
    setSubmitted(true);
  };

  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              {!submitted ? (
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="body1.jpg" 
                        alt="Sample photo"
                        className="img-fluid h-100 w-100" // Set img-fluid and h-100 w-100 classes for full height and width
                        style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', objectFit: 'cover' }} // Added objectFit to cover the entire space
                      />
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase">Create your account</h3>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" id="fullName" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="fullName">Full Name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="email" id="email" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="email">Email Address</label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="password" id="password" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="password">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" id="contactNumber" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="contactNumber">Contact Number</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="text" id="address" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="address">Address</label>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="gender" id="femaleGender" value="female" />
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                          </div>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="gender" id="maleGender" value="male" />
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                          </div>
                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="gender" id="otherGender" value="other" />
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select className="form-select form-select-lg" id="state">
                              <option value="">Select State</option>
                              <option value="Andhra Pradesh">Andhra Pradesh</option>
                              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">Himachal Pradesh</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Rajasthan">Rajasthan</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <select className="form-select form-select-lg" id="city">
                              <option value="">Select City</option>
                              <option value="Hyderabad">Hyderabad</option>
                              <option value="Naharlagun">Naharlagun</option>
                              <option value="Guwahati">Guwahati</option>
                              <option value="Patna">Patna</option>
                              <option value="Raipur">Raipur</option>
                              <option value="Panaji">Panaji</option>
                              <option value="Ahmedabad">Ahmedabad</option>
                              <option value="Faridabad">Faridabad</option>
                              <option value="Shimla">Shimla</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Jaipur">Jaipur</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="date" id="dob" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="dob">Date of Birth</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="text" id="pincode" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="pincode">Pincode</label>
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button type="reset" className="btn btn-light btn-lg me-2">Reset all</button>
                          <button type="submit" className="btn btn-warning btn-lg" onClick={handleSubmit}>Submit form</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card card-registration my-4">
                  <div className="card-body p-md-5 text-black text-center">
                    <h3 className="mb-5 text-uppercase">Congratulations to become a member of Balaji Fitness Center!</h3>
                    <p>Your account has been successfully created.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
