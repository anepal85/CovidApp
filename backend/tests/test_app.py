import unittest
import requests

class CovidAPITests(unittest.TestCase):
    # Base URL of the external COVID-19 API
    BASE_URL = "https://disease.sh/v3/covid-19"

    def test_api_reachable(self):
        """Test if the external API is reachable by hitting a valid endpoint."""
        response = requests.get(f"{self.BASE_URL}/countries")
        self.assertEqual(response.status_code, 200)

    def test_covid_stats_endpoint(self):
        """Test the /v3/covid-19/countries endpoint."""
        response = requests.get(f"{self.BASE_URL}/countries")
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json(), list)  # Ensure the response is a list of countries

    def test_historical_data_endpoint(self):
        """Test the /v3/covid-19/historical/{country} endpoint."""
        response = requests.get(f"{self.BASE_URL}/historical/Germany?lastdays=30")
        self.assertEqual(response.status_code, 200)
        self.assertIn("timeline", response.json())  # Ensure the response contains historical data

if __name__ == "__main__":
    unittest.main()