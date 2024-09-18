import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import ChartBox from "../components/ChartBox";
import LineChartPercentage from "../components/LineChartPercentage";
import BarChart from "../components/BarChart";

export default function Production() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Define the data outside of the return statement
    const data_one = [
        {
            id: '2023',
            data: [
                { x: 'January', y: 30 },
                { x: 'February', y: 38 },
                { x: 'March', y: 62 },
                { x: 'April', y: 96 },
                { x: 'May', y: 110 },
                { x: 'June', y: 120 },
                { x: 'July', y: 110 },
                { x: 'August', y: 103 }
            ]
        }
    ];
    const bar_data =[

            { "range": "1kw to 3kw", "systemsReported": 43 },
            { "range": "3kw to 6kw", "systemsReported": 1205 },
            { "range": "6kw to 9kw", "systemsReported": 1809 },
            { "range": "9kw to 12kw", "systemsReported": 173 },
            { "range": "12kw to 15kw", "systemsReported": 17 },
            { "range": "15kw to 18kw", "systemsReported": 5 },
            { "range": "18kw or more", "systemsReported": 37 }


    ];






    return (
        <>
            <div className="flex mt-9">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Main Content */}
                <main className="flex-1 lg:pr-16 px-4">
                    <div>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Data Insights
                        </h2>
                    </div>

                    <ChartBox
                        title="Percentage of Maximum Yield Achieved"
                        description="This shows the percentage of energy generated relative to the system's maximum capacity. For example, a 5KW system can theoretically produce 5KW per hour, multiplied by the hours in a day of sunlight, and the number of days in a month."
                        chart={<LineChartPercentage data={data_one} />}
                    />

                    <ChartBox
                        title="Average Size of System "
                        description="This shows the average size of systems reported."
                        chart={<BarChart data={bar_data} />}
                    />

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
