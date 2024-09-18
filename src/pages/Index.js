import { useState } from 'react'
import Sidebar from './components/SideBar'
import LineChart from "./components/LineChart";
import ChartInfoBox from "./components/ChartInfoBox";



export default function Index() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    // Define the data outside of the return statement
    const data_one = [
        {
            id: '2023',
            data: [
                { x: 'January', y: 4.28 },
                { x: 'February', y: 6.62 },
                { x: 'March', y: 11.21 },
                { x: 'April', y: 17.69 },
                { x: 'May', y: 23.99 },
                { x: 'June', y: 23.87 },
                { x: 'July', y: 18.81 },
                { x: 'August', y: 17.44 },
                { x: 'September', y: 14.46 },
                { x: 'October', y: 9.65 },
                { x: 'November', y: 4.90 },
                { x: 'December', y: 2.65 }
            ]
        }
    ];
    const data_two = [
        {
            id: '2023',
            data: [
                { x: 'January', y: 4.28 },
                { x: 'February', y: 6.62 },
                { x: 'March', y: 11.21 },
                { x: 'April', y: 17.69 },
                { x: 'May', y: 23.99 },
                { x: 'June', y: 23.87 },
                { x: 'July', y: 18.81 },
                { x: 'August', y: 17.44 },
                { x: 'September', y: 14.46 },
                { x: 'October', y: 9.65 },
                { x: 'November', y: 4.90 },
                { x: 'December', y: 2.65 }
            ]
        },
        {
            id: '2022',
            data: [
                { x: 'January', y: 4.46 },
                { x: 'February', y: 6.75 },
                { x: 'March', y: 16.45 },
                { x: 'April', y: 15.96 },
                { x: 'May', y: 17.50 },
                { x: 'June', y: 17.90 },
                { x: 'July', y: 17.45 },
                { x: 'August', y: 19.79 },
                { x: 'September', y: 11.59 },
                { x: 'October', y: 7.64 },
                { x: 'November', y: 5.14 },
                { x: 'December', y: 3.67 }
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
                    <header>
                        <h1 className="text-2xl font-semibold mb-4">Community Solar Data</h1>
                    </header>

                    {/* Your other content here */}
                    <div className="w-full">
                        <div>
                            <ChartInfoBox title="Average solar production in 2023" description="This is the total megawatts produced each month by all community members." />
                            <LineChart data={data_one} />
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <ChartInfoBox title="Solar Production by year" description="This is the total megawatts produced each month by all community members, compared each year." />
                            <LineChart data={data_two} />
                        </div>
                    </div>
                </main>



            </div>
        </>

    )
}
