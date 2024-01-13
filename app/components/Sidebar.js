import Link from 'next/link';

export default function Sidebar() {
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
        { name: 'Calendar', href: '/calendar', icon: '📅' },
        { name: 'My Team', href: '/myteam', icon: '👥' },
        { name: 'Notes', href: '/notes', icon: '📝' },
        { name: 'Assignments', href: '/assignments', icon: '📚' },
    ];

    return (
        <div className="h-screen w-64 bg-gray-800 text-white p-4 space-y-6">
            <div className="text-xl font-bold text-blue-500">Intelliminds</div>
            <nav>
                {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                        <div
                            className={`flex items-center p-2 my-2 transition-colors duration-200 justify-start rounded-lg text-lg cursor-pointer`}
                        // ${router.pathname === item.href
                        //     ? 'bg-blue-100 text-blue-700'
                        //     : 'text-gray-300'
                        //     }
                        >
                            <span className="text-left">
                                {item.icon}
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                {item.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </nav>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                Log out
            </button>
        </div>
    );
}
