"use client";
import React, { useEffect, useState } from 'react';

const Card = ({ title, course, subject, date, time, questions, percentage }) => (
  <div className="bg-white text-black border rounded-lg p-4 mr-4 mt-4" style={{ width: '300px', height: '300px' }}>
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-1">Course: {course}</p>
        <p className="text-sm text-gray-500 mb-1">Subject: {subject}</p>
        <div className="flex items-center text-sm mb-1">
        <svg className="w-4 h-4 fill-current text-gray-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7 10h3v3H7zM17 3h-1v2h-4V3h-4v2H7c-1.1 0-1.99.9-1.99 2L5 21c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H7V10h10v11z"/>
          </svg>
          {date}
          <svg className="w-4 h-4 fill-current text-gray-500 ml-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
          {time}
        </div>
        <p className="text-sm text-gray-500">Questions: {questions}</p>
        <div>
          <span className="text-gray-700 block mb-1">Passing Percentage: {percentage}%</span>
          <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-300 mb-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
      </div>
      <button className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        View Details
      </button>
    </div>
  </div>
);




export default function AssignmentsPage() {
    const [activeTab, setActiveTab] = useState('scheduled');
    useEffect(() => {
    }, [activeTab]);

    const [assignments, setAssignments] = useState({
      scheduled: [
          { title: 'Articulate structure of C++ and Java in Semester 1', course: 'B.Tech Specialization in Health Informatics', subject: 'Network Engineering', date: '31-01-2023', time: '12:30 AM - 01:40 PM', questions: 50, percentage: 70 },
          { title: 'Introduction to Data Structures', course: 'B.Tech Computer Science', subject: 'Data Management', date: '05-02-2023', time: '09:00 AM - 10:30 AM', questions: 30, percentage: 75 },
          { title: 'Fundamentals of Algorithms', course: 'B.Tech Information Technology', subject: 'Algorithm Design', date: '10-02-2023', time: '11:00 AM - 12:30 PM', questions: 45, percentage: 60 },
      ],
      history: [
          { title: 'Machine Learning Basics', course: 'B.Tech AI Specialization', subject: 'Artificial Intelligence', date: '15-01-2023', time: '02:00 PM - 03:40 PM', questions: 35, percentage: 80 },
          { title: 'Advanced Database Systems', course: 'M.Tech Specialization in Data Storage', subject: 'Data Engineering', date: '22-01-2023', time: '01:00 PM - 02:40 PM', questions: 40, percentage: 85 },
          { title: 'Network Security Fundamentals', course: 'B.Tech Cyber Security', subject: 'Secure Communications', date: '28-01-2023', time: '03:30 PM - 05:00 PM', questions: 30, percentage: 65 },
      ],
  });

  const addAssignment = () => {
      const newAssignment = {
          title: 'New Assignment', // Modify with actual data
          course: 'New Course',
          subject: 'New Subject',
          date: 'New Date',
          time: 'New Time',
          questions: 0,
          percentage: 0,
      };

      setAssignments(prevAssignments => ({
          ...prevAssignments,
          [activeTab]: [...prevAssignments[activeTab], newAssignment],
      }));
  };
    return (
      <div className="container mx-auto px-6 py-4 bg-white">
          <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-bold">Assignments</h1>
              <button className="bg-blue-700 text-xs hover:bg-blue-900 text-white py-2 px-6 rounded" onClick={addAssignment}>
                  + Add Assignment
              </button>
          </div>
          <div className="flex justify-between items-center text-black">
              <div className='flex justify-start'>
                  <div className="flex border-b mr-6">
                      <button
                          onClick={() => setActiveTab('scheduled')}
                          className={`px-1 py-2 ${activeTab === 'scheduled' ? 'border-b-2 border-blue-700' : 'border-transparent'}`}
                      >
                          Scheduled Assignments
                      </button>
                  </div>
                  <div className="flex border-b">
                      <button
                          onClick={() => setActiveTab('history')}
                          className={`px-1 py-2 ${activeTab === 'history' ? 'border-b-2 border-blue-700' : 'border-transparent'}`}
                      >
                          History
                      </button>
                  </div>
              </div>
              <div class="flex items-center rounded bg-gray-200 ">
              <svg className="h-4 w-4 fill-current text-gray-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 2C5.589 2 2 5.589 2 10s3.589 8 8 8c1.838 0 3.545-.627 4.906-1.68l3.387 3.387a1 1 0 102 0l-3.387-3.387A7.947 7.947 0 0020 10c0-4.411-3.589-8-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
              </svg>
            <input
              class="bg-gray-200 outline-none text-gray-500 text-xs pl-2 pr-28 py-1 my-1 rounded w-full"
              type="search"
              placeholder="Search..."
            />
          </div>
          </div>
          <hr />
          <div className="flex flex-wrap">
              {activeTab === 'scheduled' && assignments.scheduled.map((assignment, index) => (
                  <Card key={index} {...assignment} />
              ))}
              {activeTab === 'history' && assignments.history.map((assignment, index) => (
                  <Card key={index} {...assignment} />
              ))}
          </div>
      </div>
  );
}              