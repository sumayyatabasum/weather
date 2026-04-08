# 🌦️ Climate — Personal Weather Tracker

A simple and responsive weather web application that provides real-time weather updates for any city using the OpenWeatherMap API.

---

## 🚀 Overview

This project allows users to:
- Enter a city name  
- Fetch real-time weather data  
- View temperature, weather conditions, wind speed, and current date  

---

## ✨ Features

- 🔍 Search weather by city name  
- 🌡️ Temperature displayed in Celsius  
- 🌤️ Weather condition description  
- 💨 Wind speed information  
- 📅 Real-time date & time using Moment.js  
- 🎨 Smooth animations using Animate.css  
- ⚡ Fast API calls using Fetch  

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript (ES6)  
- jQuery  
- Moment.js  
- OpenWeatherMap API  

---

## 📂 Project Structure

```bash
weather/
│── index.html      # Main structure
│── style.css       # Styling
│── script.js       # Logic and API handling
```

---

## ⚙️ How It Works

1. On page load, default weather data for **Gujarat** is displayed  
2. User enters a city name  
3. API request is sent to OpenWeatherMap  
4. Weather data is fetched and displayed dynamically  

---

## 🔑 API Integration

API used:
https://api.openweathermap.org/data/2.5/weather

Example request:
```bash
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

---

## ▶️ How to Run

1. Clone the repository:
```bash
git clone https://github.com/sumayyatabasum/weather.git
```

2. Open the folder

3. Run the app:
- Open `index.html` in your browser  

---

## ⚠️ Important Note

Your API key is directly included in `script.js`.  
For better security:
- Use environment variables  
- Or move API handling to backend  

---

## 📈 Future Improvements

- 📍 Detect user location automatically  
- 🌙 Dark mode support  
- 📊 5-day weather forecast  
- ❌ Better error handling UI  
- ⚛️ Convert to React  

---

## 👩‍💻 Author

**Sumayya Tabasum**  
GitHub: https://github.com/sumayyatabasum  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
