import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './MyPages/signup';
import SignIn from './MyPages/signin';
import Navbar from './MyPages/Navbar';
import Footer from './MyPages/Footer';
import ForgotPassword from './MyPages/ForgotPassword';
import Dashboard from './MyPages/Dashboard';
import Aboutus from './MyPages/Aboutus';
import Contact from './MyPages/Contact';
import Services from './MyPages/Services';
import WorkoutDietPlans from './MyPages/WorkoutDietPlans';
import Blog from './MyPages/Blog';
import Events from './MyPages/Events';
import Gallery from './MyPages/Gallery';
import GymMembershipPlans from './MyPages/GymMembershipPlans';
import  FAQs from './MyPages/FAQs';
import  Classes from './MyPages/Classes';
import  SuccessStories from './MyPages/SuccessStories';
import  Challenges from './MyPages/Challenges';
import Schedule from './MyPages/Schedule';
import Booking from './MyPages/Booking';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/workout-diet-plans" element={<WorkoutDietPlans />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/GymMembershipPlans" element={<GymMembershipPlans />} /> 
          <Route path="/FAQs" element={<FAQs />} /> 
          <Route path="/Classes" element={<Classes />} /> 
          <Route path="/SuccessStories" element={<SuccessStories />} /> 
          <Route path="/Challenges" element={<Challenges />} /> 
          <Route path="/Schedule" element={<Schedule />} /> 
          <Route path="/Booking" element={<Booking />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
 