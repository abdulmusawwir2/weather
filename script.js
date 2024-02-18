const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dc1d586c74mshf16d4ba62b5a80fp147985jsnd0f4208f8b0f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    cityname.innerHTML=city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
    //   cloud_pct.innerText = response.cloud_pct;
      temp.innerText = response.temp;
      temp2.innerText = response.temp;
      feels_like.innerText = response.feels_like;
      humidity.innerText = response.humidity;
      humidity2.innerText = response.humidity;
      min_temp.innerText = response.min_temp;
      max_temp.innerText = response.max_temp;
      wind_speed.innerText = response.wind_speed;
      wind_speed2.innerText = response.wind_speed;
      wind_degrees.innerText = response.wind_degrees;
      sunrise.innerText = response.sunrise;
      sunset.innerText = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value)
})

getWeather("delhi");

const common= (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
        c_p.innerText=response.cloud_pct;
        f_l.innerText=response.feels_like;
        h.innerText=response.humidity;
        ma_t.innerText=response.max_temp;
        mi_t.innerText=response.min_temp;
         te.innerText=response.temp;

        w_d.innerText=response.wind_degrees;
    })
    .catch((err) => console.error(err));
};
common("shangai");

const common2= (city) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
          c_pk.innerText=response.cloud_pct;
          f_lk.innerText=response.feels_like;
          hk.innerText=response.humidity;
          ma_tk.innerText=response.max_temp;
          mi_tk.innerText=response.min_temp;
        tek.innerText=response.temp;
          w_dk.innerText=response.wind_degrees;
      })
      .catch((err) => console.error(err));
  };
common2("Kolkata")

const common3= (city) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
          c_pm.innerText=response.cloud_pct;
          f_lm.innerText=response.feels_like;
          hm.innerText=response.humidity;
          ma_tm.innerText=response.max_temp;
          mi_tm.innerText=response.min_temp;
           tem.innerText=response.temp;
          w_dm.innerText=response.wind_degrees;
      })
      .catch((err) => console.error(err));
  };
common3("Mumbai")



// console.log("hello")

// let url="https://cat-fact.herokuapp.com/facts"
// let p=document.querySelector("p");
// let btn=document.querySelector("button")

// const getFacts=async()=>{
// 	console.log("getting data");
// 	let response=await fetch(url);
// 	console.log(response)
// 	let data=await response.json();
// 	console.log(data[0].text);

// 	btn.addEventListener("click",()=>{
// 		p.innerText=`cat fact is hii ${data[0].text} `
// 	})
// }

// getFacts();
// p.innerText=`cat fact is hii ${data[0].text} `
