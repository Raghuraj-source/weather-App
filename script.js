// JavaScript code for the weather website logic
// Define a function to get the weather data from an API
function getWeatherData(city) {
    // Use fetch to send a request to the API with the city name as a parameter
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0dfff320cd29fa05f785f2f7f88f356c&units=metric")
      .then(response => response.json()) // Convert the response to JSON format
      .then(data => displayWeatherData(data)) // Call another function to display the data
      .catch(error => alert(error)); // Handle any errors
  }
  
  // Define a function to display the weather data on the webpage
  function displayWeatherData(data) {
    // Get the HTML elements where we want to show the data
    let cityName = document.getElementById("cityName");
    let temp = document.getElementById("temp");
    let desc = document.getElementById("desc");
    let icon = document.getElementById("icon");
  
    // Assign the values from the data object to the HTML elements
    cityName.textContent = data.name;
    temp.textContent = data.main.temp + "°C";
    desc.textContent = data.weather[0].description;
    icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  }
  // Conditional rendering
if (data) {
    // Access data.temp only if data is not undefined
    console.log(data.temp);
  }
  
  // Optional chaining
  // Access data.temp only if data is not undefined, otherwise return undefined
  console.log(data?.temp);
  
  // Define a function to handle the user input when they click the "Search" button
  function searchCity() {
    // Get the user input from the HTML element
    let input = document.getElementById("input").value;
  
    // Check if the input is not empty
    if (input) {
      // Call the function to get and display the weather data for that city
      getWeatherData(input);
    } else {
      // Alert the user to enter a valid city name
      alert("Please enter a city name!");
    }
  }