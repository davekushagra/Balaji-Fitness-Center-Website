import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';
import Notifications from './Notifications';
import Support from './Support';
import Reports from './Reports';

const Dashboard = () => {
  const userName = 'Kushagra Dave'; 
  const userEmail = 'davekushagra@gmail.com'; 

  return (
    <div className="container py-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to="/dashboard/profile" className="list-group-item list-group-item-action">
              Profile
            </Link>
            <Link to="/dashboard/settings" className="list-group-item list-group-item-action">
              Settings
            </Link>
            <Link to="/dashboard/notifications" className="list-group-item list-group-item-action">
              Notifications
            </Link>
            <Link to="/dashboard/support" className="list-group-item list-group-item-action">
              Support
            </Link>
            <Link to="/dashboard/reports" className="list-group-item list-group-item-action">
              Reports
            </Link>
            <Link to="/" className="list-group-item list-group-item-action list-group-item-danger">
              Logout
            </Link>
          </div>
        </div>

       
        <div className="col-md-9">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h1 className="card-title">Hi, {userName}!</h1>
              <p className="card-text">{userEmail}</p>
            </div>
          </div>
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="support" element={<Support />} />
            <Route path="reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
