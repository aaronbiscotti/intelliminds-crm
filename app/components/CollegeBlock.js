export default function CollegeBlock({ college }) {
    return (
        <div className="rounded-md p-4 border-gray-300 border-[1px]">
            <h3 className="text-lg font-bold mb-2">{college.name}</h3>
            <ul className="text-sm text-gray-600">
                <li>{college.essays} essays</li>
                <li>{college.students} Students</li>
                <li>{college.avgSAT} Average SAT</li>
                <li>{college.avgACT} Average ACT</li>
            </ul>
            <div className="mt-4 bg-gray-300 text-gray-700 p-2 rounded text-center">
                Due {college.applicationDue}
            </div>
        </div>
    );
}