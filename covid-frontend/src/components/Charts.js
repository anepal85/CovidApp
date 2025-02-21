import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = ({ historicalData }) => {
  if (!historicalData) return <p>No historical data available.</p>;

  // Transform data for Recharts
  const chartData = Object.keys(historicalData.cases).map((date) => ({
    date,
    cases: historicalData.cases[date],
    deaths: historicalData.deaths[date],
    recovered: historicalData.recovered[date],
  }));

  return (
    <LineChart width={800} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cases" stroke="#8884d8" />
      <Line type="monotone" dataKey="deaths" stroke="#ff0000" />
      <Line type="monotone" dataKey="recovered" stroke="#00ff00" />
    </LineChart>
  );
};

export default Charts;