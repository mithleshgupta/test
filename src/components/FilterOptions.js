import React, { useState } from 'react';

const FilterOptions = ({ onChange }) => {
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const updatedOptions = checked
      ? [...options, value]
      : options.filter(option => option !== value);

    setOptions(updatedOptions);
    onChange('FILTER_OPTIONS', updatedOptions);
  };

  return (
    <div>
      <label>
        <input type="checkbox" value="Gatesurvey" onChange={handleChange} /> Gatesurvey
      </label>
      <label>
        <input type="checkbox" value="Fraud_detection" onChange={handleChange} /> Fraud Detection
      </label>
    </div>
  );
};

export default FilterOptions;
