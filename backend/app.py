from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Fetch data from public API
@app.route('/api/covid/stats', methods=['GET'])
def get_covid_stats():
    try:
        response = requests.get('https://disease.sh/v3/covid-19/countries')
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    

@app.route('/api/covid/historical/<country>', methods=['GET'])
def get_historical_data(country):
    try:
        response = requests.get(f'https://disease.sh/v3/covid-19/historical/{country}?lastdays=30')
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)