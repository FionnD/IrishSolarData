import { useState, useMemo } from 'react';
import Sidebar from '../components/SideBar';



export default function About() {
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
                            About
                        </h2>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7">
                        <div className="px-4 py-5 sm:p-6">
                            <p>Welcome! 👋 This is a side </p>
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
