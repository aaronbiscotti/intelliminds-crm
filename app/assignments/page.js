"use client";
import React, { useEffect, useState } from 'react';
const Card = ({ title, course, subject, date, time, questions, percentage }) => (
    <div className="bg-white text-black shadow-md rounded-lg p-4 m-2" style={{ width: '300px', height: '300px' }}>
        <div className="flex flex-col justify-between h-full">
            <div>
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-sm">{course}</p>
                <p className="text-sm">{subject}</p>
                <p className="text-sm">{date}</p>
                <p className="text-sm">{time}</p>
                <p className="text-sm">Questions: {questions}</p>
                <div className="mt-2">
                    <span className="text-gray-700">Passing Percentage: </span>
                    <span className="font-semibold">{percentage}%</span>
                </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start focus:outline-none focus:shadow-outline">
                View Details
            </button>
        </div>
    </div>
);

export default function AssignmentsPage() {
    const [activeTab, setActiveTab] = useState('scheduled');
    useEffect(() => {
        console.log(activeTab); // This will log whenever activeTab changes
    }, [activeTab]);

    const assignmentsData = {
        scheduled: [
            // Temporary data for scheduled assignments
            { title: 'Articulate structure of C++ and Java in Semester 1', course: 'B.Tech Specialization in Health Informatics', subject: 'Network Engineering', date: '31-01-2023', time: '12:30 AM - 01:40 PM', questions: 50, percentage: 70 },
            { title: 'Introduction to Data Structures', course: 'B.Tech Computer Science', subject: 'Data Management', date: '05-02-2023', time: '09:00 AM - 10:30 AM', questions: 30, percentage: 75 },
            { title: 'Fundamentals of Algorithms', course: 'B.Tech Information Technology', subject: 'Algorithm Design', date: '10-02-2023', time: '11:00 AM - 12:30 PM', questions: 45, percentage: 60 },
        ],
        history: [
            // Temporary data for history assignments
            {
                title: 'Machine Learning Basics', course: 'B.Tech AI Specialization', subject: 'Artificial Intelligence', date: '15-01-2023', time: '02:00 PM - 03:40 PM', questions: 35, percentage:
                    80,
            },
            { title: 'Advanced Database Systems', course: 'M.Tech Specialization in Data Storage', subject: 'Data Engineering', date: '22-01-2023', time: '01:00 PM - 02:40 PM', questions: 40, percentage: 85 },
            { title: 'Network Security Fundamentals', course: 'B.Tech Cyber Security', subject: 'Secure Communications', date: '28-01-2023', time: '03:30 PM - 05:00 PM', questions: 30, percentage: 65 },
        ],
    };

    return (
        <div className="container mx-auto px-4 py-4 bg-white">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Assignments</h1>
                <button className="bg-blue-700 hover:bg-blue-900 text-white py-1 px-4 rounded">
                    + Add Assignment
                </button>
            </div>
            <div className="flex justify-between items-center text-black">
                <div className='flex justify-start'>
                    <div className="flex border-b mr-4">
                        <button
                            onClick={() => { console.log('Scheduled clicked'); setActiveTab('scheduled'); }}
                            className={`px-2 py-1 ${activeTab === 'scheduled' ? 'border-b-2 border-blue-500' : 'border-transparent'}`}
                        >
                            Scheduled Assignments
                        </button>
                    </div>
                    <div className="flex border-b">
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`px-2 py-1 ${activeTab === 'history' ? 'border-b-2 border-blue-500' : 'border-transparent'}`}
                        >
                            History
                        </button>
                    </div>
                </div>
                <input
                    className="border rounded-lg px-3 py-1 mb-4"
                    type="search"
                    placeholder="Search..."
                // Implement the search logic here
                />
            </div>
            <hr className="" />
            <div className="flex flex-wrap m-2">
                {activeTab === 'scheduled' && assignmentsData.scheduled.map((assignment, index) => (
                    <Card key={index} {...assignment} />
                ))}
                {activeTab === 'history' && <div>History content goes here</div>}
            </div>
        </div>
    );
}              