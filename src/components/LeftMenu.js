import React from 'react';

const LeftMenu = ({ onSelect }) => {
    return (
        <div className="left-menu">
            <button onClick={() => onSelect('PROJECT_INFORMATION')}>Project Information</button>
            <button onClick={() => onSelect('REGIONS')}>Regions</button>
            <button onClick={() => onSelect('SPECIFICATIONS')}>Specifications</button>
        </div>
    );
};

export default LeftMenu;
