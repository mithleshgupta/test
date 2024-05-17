import React from 'react';

const SubmitSection = ({ onSubmit }) => {
    return (
        <div>
            <button onClick={onSubmit} style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
            <button style={{ backgroundColor: 'red', color: 'white' }}>Cancel</button>
        </div>
    );
};

export default SubmitSection;
