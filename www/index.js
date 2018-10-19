var url = "/api/dashboard";

fetch(url).then(r => r.json())
  .then(data => console.log("Hi, Jake! Data is ready for you", data))
  .catch(e => console.log("Booo"));