import React from 'react';
import CollegeBlock from '../components/CollegeBlock'; // Adjust the import path as needed

// Sample data for colleges
const colleges = {
    reach: [
        { name: 'Harvard University', /* other college details */ },
        { name: 'Harvard University', /* other college details */ },
        { name: 'Harvard University', /* other college details */ },
        { name: 'Harvard University', /* other college details */ },
        { name: 'Harvard University', /* other college details */ },
        // ... other reach colleges
    ],
    target: [
        { name: 'University of California, Berkeley', /* other college details */ },
        // ... other target colleges
    ],
    safety: [
        { name: 'State University', /* other college details */ },
        // ... other safety colleges
    ],
};

const ProfilePage = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">John Doe's Profile</h1>
                <p>High School: Springfield High</p>
                <p>Grade Level: 12th Grade</p>
                <a href="link-to-transcript" className="text-blue-500">View Transcript</a>
                <a href="link-to-extracurriculars" className="text-blue-500 ml-4">Extracurriculars</a>
                <a href="link-to-questionnaire" className="text-blue-500 ml-4">Questionnaire</a>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4">College List</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 space-y-5">
                        <h3 className="text-lg font-bold">Reach</h3>
                        {colleges.reach.map((college, index) => (
                            <CollegeBlock key={index} college={college} />
                        ))}
                    </div>
                    <div className="col-span-1 space-y-5">
                        <h3 className="text-lg font-bold">Target</h3>
                        {colleges.target.map((college, index) => (
                            <CollegeBlock key={index} college={college} />
                        ))}
                    </div>
                    <div className="col-span-1 space-y-5">
                        <h3 className="text-lg font-bold">Safety</h3>
                        {colleges.safety.map((college, index) => (
                            <CollegeBlock key={index} college={college} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
