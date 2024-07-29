let cityName=document.getElementById("cityName");
let city1=document.getElementById("city");
let temp=document.getElementById("temp");
let humidity=document.getElementById("humidity");
let wind=document.getElementById("wind");
 async function fetchCityName();
{
    let city=cityName.ariaValueMax;
    if(city== "")
    {
        alert("Enter City Name");
    }
    else
    {
        let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7720e9c72cf6d36a128ab6626855cb98`;
        let data=await fetch(api);
        let dt=await (data.json());
        console.log(dt);
    }
    cityName.value = "";
}