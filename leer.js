const getValueInput = () =>{

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if(req.readyState == 4) {
            var response = JSON.parse(req.responseText);
            document.getElementById('container').innerHTML = '<img id="pic" src=""  width="100%" /> ';
            document.getElementById("pic").src = response.url;
        } else {
            document.getElementById('container').innerHTML = '<div class="loader"></div>';
        }
    }

    var url = "https://api.nasa.gov/planetary/earth/assets?";
    var coordinates = document.getElementById("Coordenadas").value;
    const [lat, lon] = coordinates.split(',');
    var api_key = "PT9xDosnbfG4Re08XZOaZTRxaBMCFEr2a6fSrYcm";

    req.open("GET", url + 
    "lon="+ lon + 
    "&lat=" + lat + 
    "&date=2021-02-01&dim=0.1" + 
    "&api_key=" + api_key);

    req.send();

}