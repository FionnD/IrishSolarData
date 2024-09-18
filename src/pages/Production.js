import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import ChartBox from "../components/ChartBox";
import LineChart from "../components/LineChart";

export default function Production() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Define the data outside of the return statement
    const production_this_year = [
        {
            id: '2024',
            data: [
                { x: 'January', y: 22.28 },
                { x: 'February', y: 59.62 },
                { x: 'March', y: 186.51 },
                { x: 'April', y: 220.83 },
                { x: 'May', y: 250.83 },
                { x: 'June', y: 319.10 },
                { x: 'July', y: 287.19 },
                { x: 'August', y: 259.57 }
            ]
        }
    ];
    const data_two = [
        {
            id: '2024',
            data: [
                { x: 'January', y: 4.79 },
                { x: 'February', y: 6.63 },
                { x: 'March', y: 8.51 },
                { x: 'April', y: 11.83 },
                { x: 'May', y: 12.80 },
                { x: 'June', y: 13.10 },
                { x: 'July', y: 10.19 },
                { x: 'August', y: 8.57 }
            ]
        },
        {
            id: '2023',
            "data": [
                { x: 'January', y: 4.51 },
                { x: 'February', y: 6.90 },
                { x: 'March', y: 11.68 },
                { x: 'April', y: 18.39 },
                { x: 'May', y: 24.93 },
                { x: 'June', y: 24.79 },
                { x: 'July', y: 19.54 },
                { x: 'August', y: 18.20 },
                { x: 'September', y: 15.05 },
                { x: 'October', y: 10.30 },
                { x: 'November', y: 5.25 },
                { x: 'December', y: 2.84 }
            ]
        },
        {
            id: '2022',
            data: [
                { x: 'January', y: 4.45 },
                { x: 'February', y: 6.74 },
                { x: 'March', y: 16.45 },
                { x: 'April', y: 15.96 },
                { x: 'May', y: 17.50 },
                { x: 'June', y: 17.90 },
                { x: 'July', y: 18.27 },
                { x: 'August', y: 20.72 },
                { x: 'September', y: 12.18 },
                { x: 'October', y: 8.05 },
                { x: 'November', y: 5.40 },
                { x: 'December', y: 3.87 }
            ]
        },
        {
            id: '2021',
            data: [
                { x: 'January', y: 2.04 },
                { x: 'February', y: 3.17 },
                { x: 'March', y: 5.73 },
                { x: 'April', y: 12.01 },
                { x: 'May', y: 14.66 },
                { x: 'June', y: 14.52 },
                { x: 'July', y: 16.57 },
                { x: 'August', y: 14.67 },
                { x: 'September', y: 10.65 },
                { x: 'October', y: 9.09 },
                { x: 'November', y: 5.69 },
                { x: 'December', y: 3.47 }
            ]
        }
    ];


    return (
        <>
            <div className="flex mt-9">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Main Content */}
                <main className="lg:pr-96">
                    <div>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Annual Production
                        </h2>
                    </div>

                    <ChartBox title="Total Solar Production in 2024" description="This figure represents the total megawatts produced each month by members of both the Facebook group and the Boards.ie community." chart=<LineChart data={production_this_year} />/>

                    <ChartBox title="Historical Solar Production by Year" description="This represents the total megawatts produced by the Boards.ie community over the previous years." chart=<LineChart data={data_two} /> />



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
