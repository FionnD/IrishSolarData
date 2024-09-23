import React from 'react';

export default function ChartBox({ title, description, chart }) {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow mt-7">
            <div className="px-4 py-5 sm:px-6">
                <h1 className="text-xl font-semibold mb-4">{title}</h1>
                <div className="mt-2 text-sm">
                    <p>{description}</p>
                </div>
            </div>
            <div className="px-4 py-5 sm:p-6">{chart}</div>
        </div>
    );
}
