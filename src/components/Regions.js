import React, { useState } from 'react';
import Select from 'react-select';

const Regions = ({ onChange }) => {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const options = [
        { value: 'US', label: 'United States' },
        { value: 'BR', label: 'Brazil' },
        // Add more options as needed
    ];

    const handleChange = (selectedOption) => {
        setSelectedRegion(selectedOption);
        onChange('REGIONS', selectedOption);
    };

    return (
        <div>
            <Select
                value={selectedRegion}
                onChange={handleChange}
                options={options}
                isSearchable
                placeholder="Select Country"
            />
        </div>
    );
};

export default Regions;
