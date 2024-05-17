import React, { useState } from 'react';

const ProjectInformation = ({ onChange }) => {
    const [formData, setFormData] = useState({
        projectName: '',
        workOrderNumber: '',
        projectType: '',
        category: '',
        client: '',
        clientContact: '',
        salesPerson: '',
        projectManager: '',
        projectDescription: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        onChange('PROJECT_INFORMATION', { ...formData, [name]: value });
    };

    return (
        <div>
            <input name="projectName" value={formData.projectName} onChange={handleChange} placeholder="Project Name" />
            <input name="workOrderNumber" value={formData.workOrderNumber} onChange={handleChange} placeholder="Work Order Number" />
            <input name="projectType" value={formData.projectType} onChange={handleChange} placeholder="Project Type" />
            <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
            <input name="client" value={formData.client} onChange={handleChange} placeholder="Client" />
            <input name="clientContact" value={formData.clientContact} onChange={handleChange} placeholder="Client Contact" />
            <input name="salesPerson" value={formData.salesPerson} onChange={handleChange} placeholder="Sales Person" />
            <input name="projectManager" value={formData.projectManager} onChange={handleChange} placeholder="Project Manager" />
            <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Project Description" />
        </div>
    );
};

export default ProjectInformation;
