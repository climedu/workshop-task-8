# workshop-task-8
Here is a URL to the webpage for this project: [link]( https://climedu.github.io/workshop-task-8/)

## Task
- Create a sketch that makes an API call to gather data from an external source. Here is a list of free-to-use APIsLinks to an external site.which do not require authentication.
- Visual elements of the sketch should be determined by data retrieved from the external source.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Overview
- Create poem generator and exploring rita.js library
- Explore on the noun, random, tokenized, verb, and pluralized features

## Workshop Notes (Text & Language)

### API
API often require authentication, which means we need to key an API key.
Make sure to not include the private key inside the code that going to be publicly visible.

ipify.org
API that allows to retrieve your IP adress

IP address ; unique identifier that given to any device, ot any computer that connected to intertnet connection

state the ip as variable
```ruby
let ip;
let ip_api = 'https://api.ipify.org?format=json';

async function getIP(){ //for asyncronous function;
 let data = await fetch(ip_api);//to hold the data from the website, that comes from the API
 let j_data = await data.json(); //holding the data that we request in json format
 ip = j_data.ip; // the whole data
}

function setup(){
  createCanvas(400,400);
  getIP();
}

function draw (){
  background(220);
  text(ip,20,100); //showing the ip data on canvas (ip address since dinamic and change )
}

```
List of Free Open APIs
mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

<img width="400" alt="Screenshot 2025-02-07 at 5 39 54 PM" src="https://github.com/user-attachments/assets/2bc8eb18-f184-4c0b-8c47-933df833d34d" />

v2.jokeapi.dev will give you a spcific URL, and if paste the URL to the browser, will able to see the Json data that we're going to receive 

<img width="400" alt="Screenshot 2025-02-08 at 12 14 17 PM" src="https://github.com/user-attachments/assets/9b86f2db-2dd8-486e-ab68-6f18bcc05908" />

<img width="276" alt="Screenshot 2025-02-08 at 12 16 15 PM" src="https://github.com/user-attachments/assets/804f1432-361f-425d-8016-983d95a75b4a" />

### Input the v2.jokeapi.dev 's joke
```ruby
let ip;
let ip_api = 'https://api.ipify.org?format==json';
let intro, punchlnine;
let joke_api = 'https://v2.joekapi.dev/joke/Any?safe-mode&type=twopart';

async function getIP(){ //for asyncronous function;
 let data = await fetch(ip_api);//to hold the data from the website, that comes from the API
 let j_data = await data.json(); //holding the data that we request in json format
 ip = j_data.ip; // the whole data
}

async function getJoke(){
  let data = await fetch(joke_api);
  let j_data = await data.json();
  let intro = j_data.setup; //refering from the jdata on the website 
  let punchline =  j_data.delivery;
}

function setup(){
  createCanvas(400,400);
  getIP();
  getJoke();
  // or if want to be changed every 1 second can change the getJoke() to setInterval(getJoke,1000)
}

function draw (){
  background(220);
  text(ip,20,100); //showing the ip data on canvas (ip address since dinamic and change )
  text(intro, 20,200);
  text(punchline, 20,220);
}
```
<img width="400" alt="Screenshot 2025-02-08 at 1 01 59 PM" src="https://github.com/user-attachments/assets/e886823f-55eb-4640-930b-33b8803686c2" />

### Input the weather data
```ruby
let ip;
let ip_api = 'https://api.ipify.org?format==json';
let intro, punchlnine;
let joke_api = 'https://v2.joekapi.dev/joke/Any?safe-mode&type=twopart';

//make a code based on weather
let currentTemp, dayNight;
let weather_api = '[https://apiopen-meteo.com/v1/forecast?](https://api.open-meteo.com/v1/forecast?latitude=-36.8545&longitude=174.7675&current=temperature_2m,is_day&hourly=temperature_2m&forecast_days=1)';

async function getIP(){ //for asyncronous function;
 let data = await fetch(ip_api);//to hold the data from the website, that comes from the API
 let j_data = await data.json(); //holding the data that we request in json format
 ip = j_data.ip; // the whole data
}

async function getJoke(){
  let data = await fetch(joke_api);
  let j_data = await data.json();
  let intro = j_data.setup; //refering from the jdata on the website 
  let punchline =  j_data.delivery;
}

async function getWeather(){
  let data = await fetch(joke_api);
  let j_data = await data.json();
  currentTemp = j_data.current.temperature_2m;
  dayNight = j_data.current.is_day;
  tempInTwoHours = j.data.hourly.temperature_2m[2]; //refer the data in 2 hours
}

function setup(){
  createCanvas(400,400);
  getIP();
  getJoke();
  // or if want to be changed every 1 second can change the getJoke() to setInterval(getJoke,1000)
  getWeather();
}

function draw (){
  background(220);
  text(ip,20,100); //showing the ip data on canvas (ip address since dinamic and change )
  text(intro, 20,200);
  text(punchline, 20,220);
  text("Current temperature is : " + currentTemp, 20,240);
  text("Day or night? " + dayNight, 200, 260);
  text("Temperature in 2 hours will be: " + tempInTwoHours, 20, 280);

  //show with an ellipse if it's day or night
  if(dayNight == 0){
    fill(0);
  } else {
    fill(255,0,0);
  }
  ellipse(300,100,40,40);
}
```

<img width="400" alt="Screenshot 2025-02-08 at 1 25 32 PM" src="https://github.com/user-attachments/assets/040c8557-6ac2-4539-a873-4efb45eadaee" />

After showing the data in 2 hours

<img width="400" alt="Screenshot 2025-02-08 at 3 10 06 PM" src="https://github.com/user-attachments/assets/a72f56c9-4128-4b1e-a24c-ef4f5858f7c8" />

## Task Journey
Looking which API sources that I'll use, and I decided to use the exchange rate API 

https://www.exchangerate-api.com/docs/standard-requests

### Process 1
Starting by testing putting NZD 
```ruby
let ip;
let ip_api = 'https://api.ipify.org?format==json';
let nzdRate;
let rates_api = 'https://open.er-api.com/v6/latest/USD';

async function getIP(){ //for asyncronous function;
 let data = await fetch(ip_api);//to hold the data from the website, that comes from the API
 let j_data = await data.json(); //holding the data that we request in json format
 ip = j_data.ip; // the whole data
}

async function getNZDRate() {
  let data = await fetch(rates_api);
  let j_data = await data.json();
  nzdRate = j_data.rates.NZD;
}

function setup() {
  createCanvas(400, 400);
  getIP();
  getNZDRate();
 // setInterval(getNZDRate, 1000); // Update NZD rate every second
}

function draw() {
  background(220);
  textSize(14);
  text('NZD Rate : ' + nzdRate, 20, 200); // Show NZD exchange rate
}
```
<img width="400" alt="Screenshot 2025-02-08 at 1 18 05 PM" src="https://github.com/user-attachments/assets/cd710954-7180-4b5b-83ad-288ef48f5187" />

### Process 2
Adding another exchanges rates and make it as a square
```ruby
let ip;
let ip_api = 'https://api.ipify.org?format==json';
let nzdRate;
let jpyRate;
let eurRate;
let rates_api = 'https://open.er-api.com/v6/latest/USD';

async function getIP(){ //for asyncronous function;
 let data = await fetch(ip_api);//to hold the data from the website, that comes from the API
 let j_data = await data.json(); //holding the data that we request in json format
 ip = j_data.ip; // the whole data
}

async function getRate() {
  let data = await fetch(rates_api);
  let j_data = await data.json();
  nzdRate = j_data.rates.NZD;
  jpyRate = j_data.rates.JPY;
  eurRate = j_data.rates.EUR;
}

function setup() {
  createCanvas(1200, 400);
  getIP();
  getRate();
 // setInterval(getNZDRate, 1000); // Update NZD rate every second
}

function draw() {
  background(220);
  textSize(14);
  text('US Rate Changes', 20, 20);
  text('NZD Rate : ' + nzdRate, 20, 60); // Show NZD exchange rate
  rect(20, 80, nzdRate * 2, 20);
  text('JPY Rate : ' + jpyRate, 20, 130);
  rect(20,150, jpyRate*2, 20);
  text('EUR Rate : ' + eurRate, 20, 200);
  rect(20, 220, eurRate * 2, 20);
}
```
<img width="400" alt="Screenshot 2025-02-08 at 11 06 42 PM" src="https://github.com/user-attachments/assets/a1194f9b-d5ec-4863-bb29-0451a567e4cb" />

### Commentaries
- It took a while to see which API sources that I could understand easily, and able to show the data visually instead of just showing the text


## Future Development
- Maybe make random exchage rate appear instead of just that 3
- Trying other API sources to see other possibilities
