export default function Navbar() {
    return (
        <div className="flex items-center justify-between h-20 px-4 shadow-md">
            <span className="text-lg">Hi, User!</span>

            <div className="relative">
                <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 p-2 rounded-full">
                    <div>👤</div>
                    <div>▼</div>
                </button>

                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden">
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Your Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Sign Out
                    </a>
                </div>
            </div>
        </div>
    );
}
