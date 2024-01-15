import React from 'react';
import MeetingBlock from '../components/MeetingBlock'; // Adjust the import path as needed

// Sample data for team members
const teamMembers = [
    { name: 'John Doe', role: 'Strategy Advisor', contact: 'john@example.com' },
    { name: 'Jane Smith', role: 'SAT Counselor', contact: 'jane@example.com' },
    // Add more team members here
];

// Sample data for meetings
const meetings = [
    { sessionName: 'Weekly Sync', batchCode: 'WEEK-01', time: '9:00 AM', status: 'Ongoing' },
    { sessionName: 'Project Planning', batchCode: 'PROJ-02', time: '2:00 PM', status: 'Scheduled' },
    // Add more meetings here
];

const MeetingsPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Team</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Role</th>
                            <th className="py-3 px-6 text-left">Contact</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {teamMembers.map((member, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{member.name}</td>
                                <td className="py-3 px-6 text-left">{member.role}</td>
                                <td className="py-3 px-6 text-left">{member.contact}</td>
                                <td className="py-3 px-6 text-center">
                                    <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1">
                                        Schedule Meeting
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold my-4">Meetings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meetings.map((meeting, index) => (
                    <MeetingBlock key={index} meeting={meeting} />
                ))}
            </div>
        </div>
    );
}

export default MeetingsPage;
