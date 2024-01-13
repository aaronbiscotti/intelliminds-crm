"use client"
import { useState } from "react";
import MeetingBlock from "./components/MeetingBlock";
import TaskItem from "./components/TaskItem";
import TaskFilter from "./components/Taskfilter";
import CollegeBlock from "./components/CollegeBlock";
export default function Page() {
  const [activeFilter, setActiveFilter] = useState('all');

  const meetings = [
    {
      title: "Upcoming Meetings",
      sessionName: "Strategy + Essay Revision Session",
      batchCode: "Batch 3CO - JVY",
      time: "12:40 PM, 03 Jan 2023",
      status: "Ongoing"
    },
  ];

  const tasks = [
    {
      title: "Brainstorm common app topics",
      assignedTime: "12:40 PM, 03 Jan 2023",
      dueTime: "03:40 PM, 03 Jan 2023",
      status: "Not Started"
    },
  ];

  const colleges = [
    {
      name: "Harvard University",
      essays: 3,
      students: 2560,
      avgSAT: 1400,
      avgACT: 35,
      applicationDue: "January 12 (ED)",
      batchEnd: "02 Jan 2027"
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'notStarted' && task.status === 'Not Started') return true;
    if (activeFilter === 'ongoing' && task.status === 'Ongoing') return true;
    if (activeFilter === 'completed' && task.status === 'Completed') return true;
    return false;
  });


  return (
    <div className="container mx-auto px-6 py-8 max-w-full">
      <div className="text-black grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Upcoming Meetings</h2>
            <a href="/meetings" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View All</a>
          </div>
          {meetings.map((meeting, index) => (
            <MeetingBlock key={index} meeting={meeting} />
          ))}
        </div>
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">My Tasks</h2>
            <a href="/tasks" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View All</a>
          </div>
          <TaskFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          {filteredTasks.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </div>
        <div className="col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">My Colleges</h2>
            <a href="/meetings" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Add Colleges</a>
          </div>
          <div className="col-span-1">
            {colleges.map((college, index) => (
              <CollegeBlock key={index} college={college} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}