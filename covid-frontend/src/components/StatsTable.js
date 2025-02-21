import React from 'react';

const StatsTable = ({ data }) => {
  if (!data || !data.countryInfo) return <p>No data available for this country.</p>;

  return (
    <div>
      <h2>{data.country}</h2>
      <table>
        <thead>
          <tr>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.cases.toLocaleString()}</td>
            <td>{data.deaths.toLocaleString()}</td>
            <td>{data.recovered.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;