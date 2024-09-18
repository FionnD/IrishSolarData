import * as React from 'react';
import { useMemo } from "react";
import { useState, useEffect } from 'react';
import Sidebar from '../components/SideBar';
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";

function Infrastructure() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Importing data from data.json
        import('../data/data.json').then(data => setData(data));
    }, []);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'capacityKwp',
                header: 'Capacity (Kwp)',
                size: 150,
            },
            {
                accessorKey: 'batteryCapacityKwhr',
                header: 'Battery Capacity (Kwhr)',
                size: 200,
            },
            {
                accessorKey: 'costBeforeGrant',
                header: 'Cost (Before Grant)',
                size: 200,
            },
            {
                accessorKey: 'grant',
                header: 'Grant',
                size: 150,
            },
            {
                accessorKey: 'costAfterGrant',
                header: 'Cost After Grant',
                size: 200,
            },
            {
                accessorKey: 'costPerKWp',
                header: 'Cost/KWp',
                size: 150,
            },
            {
                accessorKey: 'orientation',
                header: 'Orientation',
                size: 150,
            },
            {
                accessorKey: 'roofSlopeDegrees',
                header: 'Roof Slope (degrees)',
                size: 200,
            },
            {
                accessorKey: 'location',
                header: 'Location',
                size: 150,
            },
            {
                accessorKey: 'installed',
                header: 'Installed',
                size: 150,
            },
            {
                accessorKey: 'comment',
                header: 'Comment',
                size: 150,
            },
            {
                accessorKey: 'prePvBer',
                header: 'Pre-PV BER',
                size: 150,
            },
            {
                accessorKey: 'postPvBer',
                header: 'Post-PV BER',
                size: 150,
            },
            {
                accessorKey: 'inverter',
                header: 'Inverter',
                size: 150,
            },
            {
                accessorKey: 'panels',
                header: 'Panels',
                size: 150,
            },
            {
                accessorKey: 'installer',
                header: 'Installer',
                size: 150,
            },
            {
                accessorKey: 'meterInUse',
                header: 'Meter in Use',
                size: 150,
            },
            {
                accessorKey: 'providerPackage',
                header: 'Provider / Package',
                size: 200,
            },
        ],
        [],
    );





    const table = useMaterialReactTable({
        data,
        columns
    });

    return (
        <>
            <div className="flex mt-9 w-1/3 ">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="lg:pr-96">
                    <div>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Infrastructure
                        </h2>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow mt-7 w-1/3">
                        <div className="px-4 py-5 sm:p-6">
                            <p>Here you can find the self reported infrastructure/setup that people are using. </p>
                        </div>
                    </div>
                    <div className="mt-7 w-1/3">
                        <MaterialReactTable table={table} />
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

export default Infrastructure;
