// fetch("https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca", {
//   method: "GET",
//   headers: { 
//     Host: "weather-ydn-yql.media.yahoo.com",
//     "X-Yahoo-App-Id" : "WeatherDashboard",
//     Authorization : "OAuth",
//     oauth_consumer_key : "dj0yJmk9bUxVM1I3c0VRMTlRJmQ9WVdrOVRVMUZOVEZOTlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTQw",
//     oauth_signature_method : "HMAC-SHA1",
//     oauth_timestamp : "YOUR_TIMESTAMP",
//     oauth_nonce : "YOUR_NONCE",
//     oauth_version : "1.0",
//     oauth_signature : "YOUR_GENERATED_SIGNATURE",
//     "cache-control" : "no-cache"
// }
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
// 	console.log(err);
// });

// "oauth_consumer_key" : "dj0yJmk9bUxVM1I3c0VRMTlRJmQ9WVdrOVRVMUZOVEZOTlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTQw",
// "oauth_consumer_secret" : "187eb309226641edc46b46b46e159f58da29956a",

// var OAuth = require('oauth')
// var header = {
//     "X-Yahoo-App-Id": "WeatherDashboard"
// };
// var request = new OAuth.OAuth(
//     null,
//     null,
//     'dj0yJmk9bUxVM1I3c0VRMTlRJmQ9WVdrOVRVMUZOVEZOTlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTQw',
//     '187eb309226641edc46b46b46e159f58da29956a',
//     '1.0',
//     null,
//     'HMAC-SHA1',
//     null,
//     header
// );
// request.get(
//     'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
//     null,
//     null,
//     function (err, data, result) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data)
//         }
//     }
// );

let key = "482a4e3afc3eec8d25d4a69a32e36417"

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=92704&appid=${key}`)
.then(res=>res.json())
.then(data =>{
console.log(data)
}).catch(err=>console.log(err))
