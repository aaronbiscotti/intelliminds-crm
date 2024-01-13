export default function TaskItem({ task }) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <div className="mb-4">
                <p className="text-sm text-gray-600">Assigned: {task.assignedTime}</p>
                <p className="text-sm text-gray-600">Due: {task.dueTime}</p>
                <p className={`text-sm font-semibold ${task.status === 'Not Started' ? 'text-red-600' : 'text-green-600'}`}>Status: {task.status}</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 rounded px-4 py-2 border border-blue-600 hover:border-blue-800">
                View Details
            </button>
        </div>
    );
}