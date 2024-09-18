import React from 'react';
import { ResponsiveLine } from '@nivo/line';

// Custom Tooltip Component
const CustomTooltip = ({ point }) => {
    const { data } = point;
    // Example calculation assuming 'data.y' is the percentage value
    const averageMaxYield = data.y; // Directly using 'data.y' if it's the desired value

    return (
        <div style={{ background: 'white', padding: '5px', border: '1px solid #ddd' }}>
            <strong>Month:</strong> {data.xFormatted}<br />
            <strong>Average Max Yield:</strong> {isNaN(averageMaxYield) ? 'N/A' : `${averageMaxYield.toFixed(2)}%`}
        </div>
    );
};


// Main LineChart Component
const LineChartPercentage = ({ data }) => {
    return (
        <div style={{ height: '500px', width: '100%' }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 0,
                    max: 140, // Set max to 100 for percentage values
                    stacked: false,
                    reverse: false
                }}
                yFormat=" >-.0%" // Format for percentage
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendOffset: 36,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Average Max Yield',
                    legendOffset: -40,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                enableArea={true}
                curve="natural"
                areaOpacity={0.5}
                tooltip={CustomTooltip}
            />
        </div>
    );
};

export default LineChartPercentage;
