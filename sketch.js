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