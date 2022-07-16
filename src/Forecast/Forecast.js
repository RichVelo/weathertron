import './forecast.css';

const Forecast = () => {

    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Great%20Missenden/next4days?unitGroup=metric&key=JRQGFHWMLJJEMRQJ9Z6GXQ8GC&contentType=json", {
        "method": "GET",
        "headers": {
        }
    }).then((response) => {
            console.log(response)
            return response.json()
        }).then((response) => {

        // displayWeatherData(response); //need to define the function here
    })



            return //returning the card to be displayed pulling everything together (format for readability)
    }

export default Forecast;