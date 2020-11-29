       //Klargjør variabler for
       //-map: selve kartet
       //-loaded: true/false, sjekk om kartet er tegnet opp allerede
       //-marker: et layer i kartet med markører
       //-cssmarker: et layer i kartet med egenlagde css-markører for uthevelse av aktivt sted
       var map, loaded, marker, cssmarker = {};

       //Definer et eget CSS-ikon for uthevelse
       //(pulserende ringer rundt marker)
       //Funnet gjennom Leaflet Documentation: https://leafletjs.com/reference-1.7.1.html#divicon
       //og Googlesøket "pulsating icon css3 animation leaflet": https://stackoverflow.com/questions/31961549/pulsating-leaflet-marker-using-css3-animations
       var cssIcon = L.divIcon({
           className: 'css-icon',
           html: '<div class="gps_ring"></div>',
           iconSize: [22, 22]
       });
       //PS: Dette ikonet krever også CSS, se <style>-tagen i <head> i toppen av dokumentet.

       function getMap(coordinate) {
           //Testutskrift av koordinater
           console.log(coordinate);

           //Hvis kartet er lastet inn, skal vi kun panorere kartet til nye koordinater,
           //Ikke tegne det opp på nytt
           if (loaded) {
               //flytt center i kartet til nye koordinater
               map.panTo(coordinate, 7);

               //fjern de aktive/eksisterende cssikonene:
               if (cssmarker != undefined) {
                   map.removeLayer(cssmarker);
               }
               //legg til cssikon på aktivt punkt:
               cssmarker = L.marker(coordinate, {
                   icon: cssIcon
               }).addTo(map);

               //Egenlaget icon:
               var MoIcon = L.icon({
                   iconUrl: 'kilder/bilder/mohammed-pin.png',
                   iconSize: [60, 88],
                   iconAnchor: [28, 84],
                   popupAnchor: [-3, -76],
                   shadowUrl: 'kilder/bilder/pin-shadow.png',
                   shadowSize: [0, 98],
                   shadowAnchor: [32, 82]
               });
               //tegn en markør på kartet for det aktive punktet
               //Dette må gjøres etter css-ikonet, slik at hovedmarkøren tegnes over css-ikonet
               marker = L.marker(coordinate, {
                   icon: MoIcon
               }).addTo(map);
           } else {
               //Hvis loaded er false, er ikke kartet tegnet. Da må vi tegne det på startpunktet (Stavanger)
               map = new L.map('map', {
                   'center': [34.52556006767288,38.28560023671878],
                   'zoom': 7,
                   'layers': [
                       new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                           'attribution': '&copy <a href="https://openstreetmap.org">OpenStreetMap</a>'
                       })
                   ],
                   'scrollWheelZoom': false
               });
               //Egenlaget icon:
               var MoIcon = L.icon({
                   iconUrl: 'kilder/bilder/mohammed-pin.png',
                   iconSize: [60, 88],
                   iconAnchor: [28, 84],
                   popupAnchor: [-3, -76],
                   shadowUrl: 'kilder/bilder/pin-shadow.png',
                   shadowSize: [0, 98],
                   shadowAnchor: [32, 82]
               });
               //Plasser en markør på startpunktet
               marker = L.marker([34.52556006767288,38.28560023671878], {
                   icon: MoIcon
               }).addTo(map);
               //Kartet er tegnet. Da setter vi loaded til true!
               loaded = true;
           }
       }

       //Kjør funksjonen ved oppstart, slik at kartet tegnes når siden lastes.
       window.onload = getMap();