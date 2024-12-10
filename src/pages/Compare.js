import { useState } from 'react';
import Sidebar from '../components/SideBar';
import orientationData from '../data/orientationData.json'; // Adjust the path

export default function Compare() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const orientations = Object.keys(orientationData.orientations); // Keys from JSON

    const [solarArraySize, setSolarArraySize] = useState('');
    const [orientation, setOrientation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [results, setResults] = useState(null);

    const handleSubmit = () => {
        const size = parseFloat(solarArraySize);
        if (isNaN(size) || size <= 0.01) {
            setErrorMessage('Solar Array Size must be a float greater than 0.01.');
            setResults(null);
            return;
        }

        const orientationReturns = orientationData.orientations[orientation];
        if (!orientationReturns) {
            setErrorMessage('Invalid orientation selected.');
            setResults(null);
            return;
        }

        const monthlyResults = {};
        for (const [month, avgReturn] of Object.entries(orientationReturns)) {
            monthlyResults[month] = (avgReturn * size).toFixed(2);
        }

        setResults(monthlyResults);
        setErrorMessage('');
    };

    return (
        <>
            <div className="flex mt-9">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Main Content */}
                <main className="flex-1">
                    <div className="mb-7">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight">
                            Irish Citizens' Solar Data
                        </h2>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7 mr-10">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="mb-3">
                                This page lets you compare your solar system’s output with the data we’ve collected. Find out whether your system is performing above or below average or predict what outputs you might achieve.
                            </p>
                            <p>
                                This data reflects solar production over the past 12 months. While some years yield better results than others, take these predictions with a grain of salt.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7 mr-10">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Enter Your Solar Information</h3>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}>
                                <div className="mb-4">
                                    <label htmlFor="solarArraySize" className="block text-sm font-medium text-gray-700">
                                        Size of Solar Array (kWp)
                                    </label>
                                    <input
                                        type="number"
                                        id="solarArraySize"
                                        value={solarArraySize}
                                        onChange={(e) => setSolarArraySize(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="e.g., 4.5"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="orientation" className="block text-sm font-medium text-gray-700">
                                        Orientation
                                    </label>
                                    <select
                                        id="orientation"
                                        value={orientation}
                                        onChange={(e) => setOrientation(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    >
                                        <option value="" disabled>Select Orientation</option>
                                        {orientations.map((opt) => (
                                            <option key={opt} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errorMessage && (
                                    <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                                )}
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </form>
                            {results && (
                                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                                    <h4 className="font-bold">Monthly Returns:</h4>
                                    <ul className="list-disc ml-5">
                                        {Object.entries(results).map(([month, value]) => (
                                            <li key={month}>
                                                {month}: {value} kWh
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
            <style jsx global>{`
                body {
                    background-color: #f3f4f6; /* Or any other shade of grey you prefer */
                }
            `}</style>
        </>
    );
}