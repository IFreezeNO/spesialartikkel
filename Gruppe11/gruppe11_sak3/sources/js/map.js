var mymap = L.map('mapid').setView([64.90491, 13.227539], 4);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Data hentet 24/10/2020 15:00 fra <a href="https://www.vg.no/spesial/2020/corona">VG</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);










	//oslo
	L.circle([59.908222, 10.733643], {
		color: '#fed79c',
		fillColor: '#fed79c',
		fillOpacity: 0.5,
		radius: 11100
	}).addTo(mymap);
    
    L.marker([59.908222, 10.733643]).bindPopup('<h4>Oslo</h4><br/><img src="https://i.imgur.com/yWFisaA.png" width="150">').addTo(mymap);
    
    	//bergen
	L.circle([60.403002, 5.29541], {
		color: '#ff6600',
		fillColor: '#ff6600',
		fillOpacity: 0.5,
		radius: 11100
	}).addTo(mymap);
    
    L.marker([60.403002, 5.29541]).bindPopup('<h4>Bergen </h4><br/><img src="https://i.imgur.com/rzLYP9v.png" width="150">').addTo(mymap);

    	//trondheim
	L.circle([63.421031, 10.437012], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 11100
	}).addTo(mymap);
    
        L.marker([63.421031, 10.437012]).bindPopup('<h4>Trondheim </h4><br/><img src="https://i.imgur.com/XdP9wSc.png" width="150">').addTo(mymap);
        
        //Tromsø
	L.circle([69.59589, 19.072266], {
		color: '#84b4bc',
		fillColor: '#84b4bc',
		fillOpacity: 0.5,
		radius: 11100
	}).addTo(mymap);
    
        L.marker([69.59589, 19.072266]).bindPopup('<h4>Tromsø </h4><br/><img src="https://i.imgur.com/vPFug11.png" width="150">').addTo(mymap);
