let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
  let info = JSON.stringify(data, null, 2);

  let country_code = (JSON.parse(info).country_code);
  if(country_code == "VN"){
      location.replace("VI.html");
  }else{
      location.replace("EN.html");
  }
});