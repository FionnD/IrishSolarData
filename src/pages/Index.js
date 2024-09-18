import { useState } from 'react';
import Sidebar from '../components/SideBar';

export default function Index() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-xl mb-3">Welcome! 👋</p>
                            <p className="mb-3">
                                This website provides data from individuals in Ireland who have publicly shared their solar power information. It's designed to help you understand and plan your own solar projects.
                            </p>
                            <p>
                                Data is reported from users on{' '}
                                <a
                                    href="https://boards.ie/renewable-energies-community"
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    boards.ie Renewables Energies Community
                                </a>{' '}
                                and the{' '}
                                <a
                                    href="https://www.facebook.com/groups/irishsolarowners"
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Irish Solar Owners Facebook Group
                                </a>.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7">
                        <div className="px-4 py-5 sm:p-6">
                            <p>
                                So far, <b>1228</b> individuals have shared their data, producing a total of <b>2608 MegaWatts</b>, which is enough to power <b>Galway city for two weeks</b>.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7">
                        <div className="px-4 py-5 sm:p-6">
                            <p>
                                This is an open source website, hosted on Vecel. You can reach out at xxx@gmail.com
                            </p>
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
