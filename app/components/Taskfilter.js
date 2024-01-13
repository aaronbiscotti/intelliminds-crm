export default function TaskFilter({ activeFilter, setActiveFilter }) {
    const statuses = ['all', 'notStarted', 'ongoing', 'completed'];

    return (
        <div className="flex space-x-2 mb-4">
            {statuses.map((status) => (
                <button
                    key={status}
                    onClick={() => setActiveFilter(status)}
                    className={`px-3 py-1 rounded ${activeFilter === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                    {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1).replace(/([A-Z])/g, ' $1')}
                </button>
            ))}
        </div>
    );
}
