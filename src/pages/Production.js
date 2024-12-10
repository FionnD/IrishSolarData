import React, { useMemo, useState } from 'react';
import Sidebar from '../components/SideBar';
import ChartBox from "../components/ChartBox";
import LineChart from "../components/LineChart";
import MultiYearProduction from "../data/Production/MultiYearProduction.json";
import production_this_year from "../data/Production/ProductionThisYear.json";

export default function Production() {
    const [sidebarOpen, setSidebarOpen] = useState(false);



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