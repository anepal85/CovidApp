import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import StatsTable from './components/StatsTable';
import Charts from './components/Charts';

function App() {
  const [country, setCountry] = useState('Germany'); // Default country
  const [stats, setStats] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);

  // Fetch latest stats and historical data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch latest stats
        const statsResponse = await axios.get(`http://localhost:5000/api/covid/stats`);
        const countryData = statsResponse.data.find((c) => c.country === country);
        setStats(countryData);

        // Fetch historical data
        const historicalResponse = await axios.get(`http://localhost:5000/api/covid/historical/${country}`);
        setHistoricalData(historicalResponse.data.timeline);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [country]);

  const handleSearch = (searchCountry) => {
    setCountry(searchCountry);
  };

  return (
    <div className="App">
      <h1>COVID-19 Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {stats && <StatsTable data={stats} />}
      {historicalData && <Charts historicalData={historicalData} />}
    </div>
  );
}

export default App;