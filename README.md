# Weather Dashboard 🌦️

A sleek and modern web application built to check real-time weather information for any city across the globe. This project was developed as part of a frontend engineering sprint to master asynchronous JavaScript, external API integrations, and secure architecture practices.

---

## Features

- **Live Weather Updates:** Fetches real-time temperature, weather conditions, humidity, and wind speed using the OpenWeatherMap API.
- **Interactive Search:** Search for any city dynamically using the search bar or by simply pressing the `Enter` key.
- **Error Handling:** Gracefully handles invalid city inputs with a clean, user-friendly error message.
- **Secure Architecture:** Implements a configuration pattern (`config.js`) to keep sensitive API keys out of core logic.
- **Responsive UI:** Clean and minimal design styled with custom CSS and enhanced with Poppins typography and FontAwesome icons.

---

## Tech Stack

- **HTML5:** Semantic markup and structure.
- **CSS3:** Custom styles, layout formatting, and smooth transitions.
- **JavaScript (ES6+):** Asynchronous operations (`async/await`), DOM manipulation, and event handling.
- **OpenWeatherMap API:** External weather data provider.

---

## Project Structure

```text
📦 weather-dashboard
 ┣ 📜 index.html        # Main user interface markup
 ┣ 📜 style.css         # Styling and layout rules
 ┣ 📜 script.js         # Core application logic and API fetching
 ┣ 📜 config.js         # Secure storage for API credentials (ignored in Git)
 ┗ 📜 README.md         # Project documentation