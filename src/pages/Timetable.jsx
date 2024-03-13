import React, { useState } from 'react';
import "./Timetable.css";

const Timetable = () => {
    const [degree, setDegree] = useState('');
    const [field, setField] = useState('');
    const [semester, setSemester] = useState('');
    const [timetableData, setTimetableData] = useState(null);

    const dummyTimetable = {
        Monday: {
            '9:00 AM': 'Maths',
            '10:00 AM': 'Physics',
            // Add more slots as needed
        },
        Tuesday: {
            '9:00 AM': 'English',
            '10:00 AM': 'Chemistry',
            // Add more slots as needed
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform search or fetch data based on form inputs
        // For this example, we'll just use the dummy timetable data
        setTimetableData(dummyTimetable);
    };

    return (
        <div className='timetable-container'>
            <h2>Timetable</h2>
            <form onSubmit={handleSubmit} className='timetable-form '>
                <div className='input1'>
                    <label htmlFor="degree">Degree:</label>
                    <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
                        <option value="">Select Degree</option>
                        {/* Add options for degrees */}
                    </select>
                </div>
                <div className='input2'>
                    <label htmlFor="field">Field:</label>
                    <select id="field" value={field} onChange={(e) => setField(e.target.value)}>
                        <option value="">Select Field</option>
                        {/* Add options for fields */}
                    </select>
                </div>
                <div className='input3'>
                    <label htmlFor="semester">Semester:</label>
                    <select id="semester" value={semester} onChange={(e) => setSemester(e.target.value)}>
                        <option value="">Select Semester</option>
                        {/* Add options for semesters */}
                    </select>
                </div>
                <button type="submit">Search</button>
            </form>
            {timetableData && (
                <div className='timetable'>
                    <h3>Your Timetable</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                {/* Add more day headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Render timetable data */}
                            {Object.keys(timetableData).map(time => (
                                <tr key={time}>
                                    <td>{time}</td>
                                    {Object.keys(timetableData[time]).map(day => (
                                        <td key={day}>{timetableData[time][day]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Timetable;
