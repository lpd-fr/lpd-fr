/* map.js *
 Add leaflet map in a given id */

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        var popupContent = "\u003ca href=\"http://agendadulibre.org/events/" + feature.properties.id + "\"\u003e";
        popupContent += feature.properties.city + " : " + feature.properties.name + "\u003c/a\u003e\u003cbr\u003e";
        popupContent += feature.properties.place_name; // + ", ";
        // popupContent += feature.properties.start_time + " &ndash; " + feature.properties.end_time;
        layer.bindPopup(popupContent);
    }
}

var lpdmap = L.map('map').setView([46.498, -0.549], 6);
var geojsonLPD = [{"type":"Feature","properties":{"id":11126,"name":"Linux Presentation Day","start_time":"2016-04-30T13:00:00.000Z","end_time":"2016-04-30T16:00:00.000Z","place_name":"Salle de la Poésie","address":"9 rue de la Poésie","city":"Montpellier","locality":0,"tags":"atellibre montpel-libre atelier linux-presentation-day","popupContent":"\u003ca href=\"/events/11126\"\u003e2016-04-30 Montpellier: Linux Presentation Day #atellibre #montpelLibre #atelier #linuxPresentationDay\u003c/a\u003e"},"geometry":{"type":"Point","coordinates":[3.88187,43.6174]}},{"type":"Feature","properties":{"id":11134,"name":"Linux Presentation Day","start_time":"2016-04-30T14:00:00.000Z","end_time":"2016-04-30T20:00:00.000Z","place_name":"Linux Nantes","address":"17 rue Paul Bellamy","city":"Nantes","locality":0,"tags":"linux gnu-linux linux-nantes linux-presentation-day","popupContent":"\u003ca href=\"/events/11134\"\u003e2016-04-30 Nantes: Linux Presentation Day #linux #gnuLinux #linuxNantes #linuxPresentationDay\u003c/a\u003e"},"geometry":{"type":"Point","coordinates":[-1.55641,47.2219]}},{"type":"Feature","properties":{"id":11152,"name":"Linux Presentation Day","start_time":"2016-04-30T14:00:00.000Z","end_time":"2016-04-30T18:00:00.000Z","place_name":"Grand builder Ekito","address":"15 rue Gabriel Péri","city":"Toulouse","locality":0,"tags":"linux-presentation-day toulibre présentation logiciels-libres","popupContent":"\u003ca href=\"/events/11152\"\u003e2016-04-30 Toulouse: Linux Presentation Day #linuxPresentationDay #toulibre #présentation #logicielsLibres\u003c/a\u003e"},"geometry":{"type":"Point","coordinates":[1.45209,43.6059]}},{"type":"Feature","properties":{"id":10986,"name":"Journée mensuelle du Logiciel Libre [LPD]","start_time":"2016-04-30T14:00:00.000Z","end_time":"2016-04-30T18:00:00.000Z","place_name":"Rez de Chausée, Maison St Sever","address":"10-12 rue Saint-Julien","city":"Rouen","locality":0,"tags":"opensuse suse tumbleweed leap gnome kde libreoffice openstreetmap nui raspberry linux jmll lpd","popupContent":"\u003ca href=\"/events/10986\"\u003e2016-04-30 Rouen: Journée mensuelle du Logiciel Libre [LPD] #opensuse #suse #tumbleweed #leap #gnome #kde #libreoffice #openstreetmap #nui #raspberry #linux #jmll #lpd\u003c/a\u003e"},"geometry":{"type":"Point","coordinates":[1.08035,49.428]}},{"type":"Feature","properties":{"id":11009,"name":"Participation à la journée internationale Linux Presentation Day","start_time":"2016-04-30T09:00:00.000Z","end_time":"2016-04-30T12:00:00.000Z","place_name":"MAJI (Maison des Associations de la Jeunesse et des Initiatives)","address":"28 rue de Gascogne","city":"Beauvais","locality":0,"tags":"logiciels-libres lpd journee belug oisux","popupContent":"\u003ca href=\"/events/11009\"\u003e2016-04-30 Beauvais: Participation à la journée internationale Linux Presentation Day #logicielsLibres #lpd #journee #belug #oisux\u003c/a\u003e"},"geometry":{"type":"Point","coordinates":[2.09719,49.4358]}},{"type":"Feature","properties":{"id":11055,"name":"Install Party GNU/Linux","start_time":"2016-04-30T14:00:00.000Z","end_time":"2016-04-30T18:00:00.000Z","place_name":"Espace \u0026 Co","address":"24 rue Emile Zola","city":"Orléans","locality":0,"tags":"cenabumix install-party gnu-linux logiciels-libres","popupContent":"\u003ca href=\"/events/11055\"\u003e2016-04-30 Orléans: Install Party GNU/Linux #cenabumix #installParty #gnuLinux #logicielsLibres\u003c/a\u003e"},"geometry":{"type":"Point","coordinates":[1.91059,47.9155]}}];

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(lpdmap);

L.geoJson(geojsonLPD, {
    onEachFeature: onEachFeature
}).addTo(lpdmap);
