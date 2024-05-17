import React, { useState } from 'react';

const Specifications = ({ onChange }) => {
    const [rows, setRows] = useState([{ id: Date.now(), country: '', language: '', targetGroup: '', cpi: '', loi: '', ir: '', completes: '' }]);

    const handleChange = (id, name, value) => {
        const newRows = rows.map((row) =>
            row.id === id ? { ...row, [name]: value } : row
        );
        setRows(newRows);
        onChange('SPECIFICATIONS', newRows);
    };

    const handleAddRow = () => {
        setRows([...rows, { id: Date.now(), country: '', language: '', targetGroup: '', cpi: '', loi: '', ir: '', completes: '' }]);
    };

    const handleCloneRow = (id) => {
        const rowToClone = rows.find((row) => row.id === id);
        setRows([...rows, { ...rowToClone, id: Date.now() }]);
    };

    const handleRemoveRow = (id) => {
        setRows(rows.filter((row) => row.id !== id));
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Language</th>
                        <th>Target Group</th>
                        <th>CPI ($)</th>
                        <th>LOI (min)</th>
                        <th>IR (%)</th>
                        <th>Completes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td>
                                <input
                                    name="country"
                                    value={row.country}
                                    onChange={(e) => handleChange(row.id, 'country', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    name="language"
                                    value={row.language}
                                    onChange={(e) => handleChange(row.id, 'language', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    name="targetGroup"
                                    value={row.targetGroup}
                                    onChange={(e) => handleChange(row.id, 'targetGroup', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    name="cpi"
                                    value={row.cpi}
                                    onChange={(e) => handleChange(row.id, 'cpi', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    name="loi"
                                    value={row.loi}
                                    onChange={(e) => handleChange(row.id, 'loi', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    name="ir"
                                    value={row.ir}
                                    onChange={(e) => handleChange(row.id, 'ir', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    name="completes"
                                    value={row.completes}
                                    onChange={(e) => handleChange(row.id, 'completes', e.target.value)}
                                />
                            </td>
                            <td>
                                <button onClick={() => handleCloneRow(row.id)}>Clone</button>
                                <button onClick={() => handleRemoveRow(row.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddRow}>Add Row</button>
        </div>
    );
};

export default Specifications;
