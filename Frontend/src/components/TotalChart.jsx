import React, { useState, useEffect } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const TotalParticipants = ({ province_code }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9900/get_participants/${province_code}`);
        setData(response.data.data);
        console.log("Fetched data:", response.data.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    if (province_code) {
      fetchData();
    }
  }, [province_code]);

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="expected" fill="#ff66ff" name="Ước tính"/>
          <Line yAxisId="right"  type="linear"  dataKey="actual" stroke="#29a329" name="Thực tế"
          strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
      <h3 className="chart-title">Tổng số thí sinh tham dự</h3>
    </div>
  );
};

export default TotalParticipants;