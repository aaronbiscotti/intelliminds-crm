export default function MeetingBlock({ meeting }) {
    return (
        <div className="rounded-lg shadow-md bg-pink-100 p-4">
            <div className="rounded-md mb-4">
                <h3 className="text-pink-700 font-bold text-md">{meeting.sessionName}</h3>
                <p className="text-gray-600">{meeting.batchCode}</p>
                <p className="text-gray-600">{meeting.time}</p>
                <p className={`text-sm ${meeting.status === 'Ongoing' ? 'text-green-500' : 'text-yellow-500'}`}>Status: {meeting.status}</p>
            </div>
            <button className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-700">
                Join Now
            </button>
        </div>
    );
}
