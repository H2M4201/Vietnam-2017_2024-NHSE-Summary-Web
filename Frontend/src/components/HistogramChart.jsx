import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, 
} from 'recharts';

const HistogramChart = ({ data, xAxisLabel, yAxisLabel, barColor = "#8884d8", title }) => (
  <div className="chart-container">
    <h3 
      className="chart-title" 
      style={{
        marginTop: '10px',   // Adjust top margin as needed
        marginBottom: '10px', // Adjust bottom margin as needed
        paddingBottom: '0px', // Optional: Add padding at the bottom
        textAlign: 'center', // Center the title
      }}
    >
      {title}
    </h3>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        {/* Define the gradient */}
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" label={{ value: xAxisLabel, position: "insideBottomRight", offset: 0 }} />
        <YAxis label={{ value: yAxisLabel, angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="url(#colorUv)" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default HistogramChart;
