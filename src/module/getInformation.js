import clearDay from '../assets/icon/clear-day.svg';
import partlyCloudyDay from '../assets/icon/partly-cloudy-day.svg';
import cloudy from '../assets/icon/cloudy.svg';
import rain from '../assets/icon/rain.svg';
import snow from '../assets/icon/snow.svg';
import fog from '../assets/icon/fog.svg';
import wind from '../assets/icon/wind.svg';
import partlyCloudyNight from '../assets/icon/partly-cloudy-night.svg';


const iconMap = {
    'clear-day': clearDay,
    'partly-cloudy-day': partlyCloudyDay,
    'cloudy': cloudy,
    'rain': rain,
    'snow': snow,
    'fog': fog,
    'wind': wind,
    'partly-cloudy-night': partlyCloudyNight
}
const icon = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const detail = document.querySelector(".detail");


async function getInformation() {
    const inputSearch = document.querySelector("#search-box").value;
    let today = new Date();
    today = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputSearch}/${today}?unitGroup=metric&key=AKA5QQRDSASRW9PYVY86N9VSK`)
    const res = await response.json();
    console.log(res);
    const iconID = await res.days[0].icon;
    const imgSrc = iconMap[iconID] || iconMap['clear-day'];

    icon.src = imgSrc;
    temp.textContent = `${res.days[0].tempmin} - ${res.days[0].tempmax}\u00B0C`
    city.textContent = res.address;
    detail.textContent = res.days[0].description;


}

export { getInformation }