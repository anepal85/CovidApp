import unittest
import requests

class FlaskAppTests(unittest.TestCase):
    BASE_URL = "http://localhost:5000"

    def test_app_running(self):
        response = requests.get(f"{self.BASE_URL}/")
        self.assertEqual(response.status_code, 404)  # Root endpoint doesn't exist

    def test_covid_stats_endpoint(self):
        response = requests.get(f"{self.BASE_URL}/api/covid/stats")
        self.assertEqual(response.status_code, 200)

    def test_historical_data_endpoint(self):
        response = requests.get(f"{self.BASE_URL}/api/covid/historical/Germany")
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()