import React from 'react';

const Settings = () => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Settings</h5>
        <p className="card-text">Manage your account settings.</p>
        <button type="submit" className="btn btn-warning btn-lg">Update account</button><br/><br/>
        <button type="submit" className="btn btn-warning btn-lg">Delete account</button><br/><br/>
        <button type="submit" className="btn btn-warning btn-lg">Add account</button><br/><br/>
      </div>
    </div>
  );
};

export default Settings;
