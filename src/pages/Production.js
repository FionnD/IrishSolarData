import React, { useMemo, useState } from 'react';
import Sidebar from '../components/SideBar';
import ChartBox from "../components/ChartBox";
import LineChart from "../components/LineChart";
import data from '../data/Production/DetailedProduction.json';
import MultiYearProduction from "../data/Production/MultiYearProduction.json";
import production_this_year from "../data/Production/ProductionThisYear.json";
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';

export default function Production() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const columns = useMemo(
        () => [
            { accessorKey: 'User', header: 'User', size: 2 },
            { accessorKey: 'SystemSize', header: 'System Size', size: 2 },
            { accessorKey: 'County', header: 'County', size: 2,},
            { accessorKey: 'Orientation', header: 'Orientation', size: 2 },
            { accessorKey: 'January', header: 'Jan', size: 2 },
            { accessorKey: 'February', header: 'Feb', size: 2 },
            { accessorKey: 'March', header: 'Mar', size: 2 },
            { accessorKey: 'April', header: 'Apr', size: 2 },
            { accessorKey: 'May', header: 'May', size: 2 },
            { accessorKey: 'June', header: 'Jun', size: 2 },
            { accessorKey: 'July', header: 'Jul', size: 2 },
            { accessorKey: 'August', header: 'Aug', size: 2 },
            { accessorKey: 'September', header: 'Sep', size: 2 },
            { accessorKey: 'October', header: 'Oct', size: 2 },
            { accessorKey: 'November', header: 'Nov', size: 2 },
            { accessorKey: 'December', header: 'Dec', size: 2 },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data,
        initialState: { density: 'xs' },
    });

    return (
        <>
            <div className="flex flex-col lg:flex-row mt-9">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Main Content */}
                <main className="flex-1 lg:pr-16 px-4">
                    <div>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Annual Production
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <ChartBox
                            title="Total Solar Production in 2024"
                            description="This figure represents the total megawatts produced each month by members of both the Facebook group and the Boards.ie community."
                            chart={<LineChart data={production_this_year} />}
                        />

                        <ChartBox
                            title="Historical Solar Production by Year"
                            description="This represents the total megawatts produced by the Boards.ie community over the previous years."
                            chart={<LineChart data={MultiYearProduction} />}
                        />
                    </div>

                    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow mt-7">
                        <div className="px-4 py-5 sm:px-6">
                            <h1 className="text-xl font-semibold mb-4">Detailed User Production</h1>
                            <div className="mt-2 text-sm">
                                <p>This table shows detailed production, month by month, from users on boards.ie.</p>
                            </div>
                        </div>
                        <div className="px-4 py-5 sm:px-6 max-w-screen-lg mx-auto">
                            <div > {/* Adjust the minimum width for a compact view */}
                                <MantineReactTable table={table} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <style jsx global>{`
              body {
                background-color: #f3f4f6;
              }
            `}</style>
        </>
    );
}
