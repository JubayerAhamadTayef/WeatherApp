const apiKey=`27887ba926cfd4c2f4257df171d0010f`;
const searchTemperature=()=>{
const cityname=document.getElementById("city").value;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&unit=metric`;
fetch(url)
.then(res=>res.json())
.then(data=>displayTemparature(data))
}
const setInnerText=(id,text)=>{
document.getElementById(id).innerText=text;
}
const displayTemparature=temparature=>{
setInnerText('city-name',temparature.name);
setInnerText('temperature',temparature.main.temp);
setInnerText('condition',temparature.weather[0].main);
setInnerText('situation',temparature.weather[0].description);
setInnerText('feels',temparature.main.feels_like);
setInnerText('max',temparature.main.temp_max);
setInnerText('min',temparature.main.temp_min);
setInnerText('country',temparature.sys.country);
const iconUrl=`https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
const imgIcon=document.getElementById("weather-ico")
imgIcon.setAttribute('src',iconUrl)
}