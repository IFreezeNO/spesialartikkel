var mymap = L.map('mapid').setView([59.549821, 11.334214], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Kart over områder som har blitt rammet av coronaviruset',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
mymap.scrollWheelZoom.disable();


L.marker([59.549821, 11.334214]).addTo(mymap)
		.bindPopup("<b>Eidsberg ungdomsskole</b><center><br/><img src='./sources/images/forsidebilde.jpg' width='150px'></center>").openPopup();
       


//video
var vid = document.getElementById("video");
vid.volume = 0.2;