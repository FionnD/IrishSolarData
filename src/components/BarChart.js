import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = ({ data }) => {

    return (
        <div style={{ height: '500px', width: '100%' }}>
            <ResponsiveBar
                data={data}
                keys={['systemsReported']} // Single key for "number of systems reported"
                indexBy="range"  // X-axis based on the 'range' key
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }} // Color scheme
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'KiloWatt size',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Number of Systems Reported',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}

                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in range: "+e.indexValue}}
            />
        </div>
    );
};

export default BarChart;
