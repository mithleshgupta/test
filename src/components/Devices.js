import React, { useState } from 'react';

const Devices = ({ onChange }) => {
    const [devices, setDevices] = useState([]);

    const handleChange = (e) => {
        const { value, checked } = e.target;
        const updatedDevices = checked
            ? [...devices, value]
            : devices.filter(device => device !== value);

        setDevices(updatedDevices);
        onChange('DEVICES', updatedDevices);
    };

    return (
        <div>
            <label>
                <input type="checkbox" value="Mobile" onChange={handleChange} /> Mobile
            </label>
            <label>
                <input type="checkbox" value="Tablet" onChange={handleChange} /> Tablet
            </label>
            <label>
                <input type="checkbox" value="Desktop" onChange={handleChange} /> Desktop
            </label>
        </div>
    );
};

export default Devices;
