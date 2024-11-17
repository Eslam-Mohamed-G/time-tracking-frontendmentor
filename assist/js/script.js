// Fetch data using
let infoData = [];
fetch('./assist/js/data.json').then((response) => {
  if(!response.ok){
    throw new Error("something error")
  }
  return response.json()
}).then((data)=>{
  infoData = data;
}).catch((error) => console.error(error))


var info = document.querySelectorAll(".box");
var daily = document.getElementById("daily");
var weekly = document.getElementById("weekly");
var monthly = document.getElementById("monthly");

window.onload = weeklyData();


function dailyData(){
  daily.classList.add("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");

  if(!infoData.length) return;

  for(i=0; i< infoData.length; i++){
    info[i].innerHTML =
    `<p>
      ${infoData[i].timeframes.daily.current + (infoData[i].timeframes.daily.current > 1 ? "hrs" : "hr")}
    </p>
    <p>Yesterday - 
      ${infoData[i].timeframes.daily.previous + (infoData[i].timeframes.daily.previous > 1 ? 'hrs' : 'hr')} 
    </p>`
  }
}

function weeklyData(){
  weekly.classList.add("active");
  daily.classList.remove("active");
  monthly.classList.remove("active");
  if(!infoData.length) return;

  for (i=0; i< infoData.length; i++){
    info[i].innerHTML = 
    `<p>
         ${infoData[i].timeframes.weekly.current + (infoData[i].timeframes.weekly.current > 1 ? "hrs" : 'hr')}
      </p>
      <p>last Week - 
         ${infoData[i].timeframes.weekly.previous + (infoData[i].timeframes.weekly.previous > 1 ? 'hrs' : 'hr')}
      </p>`
  }
}

function monthlyData(){
  monthly.classList.add("active");
  daily.classList.remove("active");
  weekly.classList.remove("active");

  if(!infoData.length) return;

  for (i = 0; i < infoData.length; i++) {
    info[i].innerHTML =
      `<p>
         ${infoData[i].timeframes.monthly.current + (infoData[i].timeframes.monthly.current > 1 ? "hrs" : 'hr')}
      </p>
      <p>last Month - 
         ${infoData[i].timeframes.monthly.previous + (infoData[i].timeframes.monthly.previous > 1 ? 'hrs' : 'hr')}
      </p>`
  }
}