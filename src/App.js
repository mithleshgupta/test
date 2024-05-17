import React, { useState } from 'react';
import LeftMenu from './components/LeftMenu';
import ProjectInformation from './components/ProjectInformation';
import Regions from './components/Regions';
import Specifications from './components/Specifications';
import Devices from './components/Devices';
import FilterOptions from './components/FilterOptions';
import SubmitSection from './components/SubmitSection';
import "../src/index.css"
const App = () => {
  const [selectedSection, setSelectedSection] = useState('PROJECT_INFORMATION');
  const [formData, setFormData] = useState({});

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleFormDataChange = (section, data) => {
    setFormData((prevData) => ({ ...prevData, [section]: data }));
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="app">
      <div className="left-section">
        <LeftMenu onSelect={handleSectionChange} />
      </div>
      <div className="right-section">
        {selectedSection === 'PROJECT_INFORMATION' && (
          <ProjectInformation onChange={handleFormDataChange} />
        )}
        {selectedSection === 'REGIONS' && (
          <Regions onChange={handleFormDataChange} />
        )}
        {selectedSection === 'SPECIFICATIONS' && (
          <Specifications onChange={handleFormDataChange} />
        )}
      </div>
      <div className="right-sidebar">
        <Devices onChange={handleFormDataChange} />
        <FilterOptions onChange={handleFormDataChange} />
      </div>
      <SubmitSection onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
