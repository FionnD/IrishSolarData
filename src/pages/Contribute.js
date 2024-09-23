import { useState } from 'react';
import Sidebar from '../components/SideBar';

export default function Contribute() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="flex mt-9">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Main Content */}
                <main className="lg:pr-96">
                    <div>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Contribute
                        </h2>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-xl mb-3">Solar production data ☀️ </p>
                            <p>
                                To contribute the amount of energy your system has produced this month, please complete the form below.
                            </p>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd-R-6BFl80pFZG0HO5kIpjwXm2PskZDzj598z-ElwDSgyDDg/closedform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center justify-center px-4 py-2 text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Open Form
                            </a>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-xl mb-3">Installation details 🔨️ </p>
                            <p>
                                To share how you built your solar system, you can join this board's thread below.
                            </p>
                            <a
                                href="https://www.boards.ie/discussion/2058225023/solar-performance-spreadsheet-analysis-and-data-sharing/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center justify-center px-4 py-2 text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Join Thread
                            </a>
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
