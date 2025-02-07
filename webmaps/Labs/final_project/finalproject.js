        var mymap = L.map("map").setView([54.35, -2.5420], 6);
        var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        });

        var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/light-v9',
            tileSize: 512,
            zoomOffset: -1
        });

        var topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
            layers: 'SRTM30-Colored-Hillshade'
        });

        streets.addTo(mymap);

        var baseLayers = {
            'Streets': streets,
            'Grayscale': grayscale,
            "Hillshade": topo
        };

L.control.layers(baseLayers, null, { collapsed: false }).addTo(mymap);
    
// Site data from the original question
    var siteData = [ 
                { name: "Paviland", coordinates: [51.550144, -4.255517], age: "Paleolithic", type: "Burial/Hoard" },
                { name: "Kents Cavern", coordinates: [50.46772, -3.502676], age: "Paleolithic", type: "Cave Shelter/Early Human Occupation" },
                { name: "Gough's Cave", coordinates: [51.2819, -2.7654], age: "Paleolithic", type: "Cave Shelter/Early Human Occupation" },
                { name: "Creswell Crags", coordinates: [53.26347, -1.193535], age: "Paleolithic", type: "Cave Shelter/Early Human Occupation" },
                { name: "Eartham Pit", coordinates: [50.869542, -0.689675], age: "Paleolithic", type: "Cave Shelter/Early Human Occupation" },
                { name: "Swanscombe", coordinates: [51.444256, 0.296609], age: "Paleolithic", type: "Cave Shelter/Early Human Occupation" },
                { name: "Happisburgh", coordinates: [52.825278, 1.535], age: "Paleolithic", type: "Cave Shelter/Early Human Occupation" },
                { name: "Star Carr", coordinates: [54.214167, -0.423333], age: "Mesolithic", type: "Settlement" },
                { name: "Howick", coordinates: [55.454, -1.593], age: "Mesolithic", type: "Settlement" },
                { name: "Oare Marshes", coordinates: [51.344, 0.886], age: "Mesolithic", type: "Settlement" },
                { name: "Low Hauxley", coordinates: [55.3184, -1.5512], age: "Mesolithic", type: "Settlement" },
                { name: "Llyn Fawr", coordinates: [51.719722, -3.568333], age: "Mesolithic", type: "Settlement" },
                { name: "Mount Sandel", coordinates: [55.1161, -6.6642], age: "Mesolithic", type: "Settlement" },
                { name: "Skara Brae", coordinates: [59.048714, -3.34175], age: "Neolithic", type: "Settlement" },
                { name: "Pentre Ifan", coordinates: [51.999, -4.77], age: "Neolithic", type: "Burial/Hoard" },
                { name: "Bryn Celli Ddu", coordinates: [53.2077, -4.2361], age: "Neolithic", type: "Burial/Hoard" },
                { name: "Stonehenge", coordinates: [51.178889, -1.826111], age: "Neolithic", type: "Ceremonial/Religious" },
                { name: "Avebury", coordinates: [51.428611, -1.854167], age: "Neolithic", type: "Ceremonial/Religious" },
                { name: "Silbury Hill", coordinates: [51.4157, -1.8574], age: "Neolithic", type: "Ceremonial/Religious" },
                { name: "Callanish Stones", coordinates: [58.197541, -6.745145], age: "Neolithic", type: "Ceremonial/Religious" },
                { name: "Ring of Brodgar", coordinates: [59.001482, -3.229723], age: "Neolithic", type: "Ceremonial/Religious" },
                { name: "Must Farm", coordinates: [52.555236, -0.177319], age: "Bronze Age", type: "Settlement" },
                { name: "Grimspound", coordinates: [50.61331, -3.83738], age: "Bronze Age", type: "Settlement" },
                { name: "Flag Fen", coordinates: [52.574, -0.19], age: "Bronze Age", type: "Ceremonial/Religious" },
                { name: "Beaghmore", coordinates: [54.701466, -6.938701], age: "Bronze Age", type: "Ceremonial/Religious" },
                { name: "Milton Keynes Hoard", coordinates: [52.033, -0.711], age: "Bronze Age", type: "Burial/Hoard" },
                { name: "Rillaton Barrow", coordinates: [50.5211, -4.4557], age: "Bronze Age", type: "Burial/Hoard" },
                { name: "Glastonbury Lake Village", coordinates: [51.163611, -2.725833], age: "Iron Age", type: "Settlement" },
                { name: "Carn Euny", coordinates: [50.10234, -5.63448], age: "Iron Age", type: "Settlement" },
                { name: "Old Oswestry Hillfort", coordinates: [52.87273, -3.04886], age: "Iron Age", type: "Castle/Fort" },
                { name: "Maiden Castle", coordinates: [50.695, -2.47], age: "Iron Age", type: "Castle/Fort" },
                { name: "Danebury Hill Fort", coordinates: [51.136681, -1.537569], age: "Iron Age", type: "Castle/Fort" },
                { name: "Honington Camp", coordinates: [52.969925, -0.580756], age: "Iron Age", type: "Castle/Fort" },
                { name: "Llyn Cerrig Bach", coordinates: [53.25885, -4.540288], age: "Iron Age", type: "Burial/Hoard" },
                { name: "Roman Temple of Mithras", coordinates: [51.5125, -0.0906], age: "Roman", type: "Ceremonial/Religious" },
                { name: "Roman Baths", coordinates: [51.3809, -2.3595], age: "Roman", type: "Ceremonial/Religious" },
                { name: "Hoxne Hoard", coordinates: [52.3425, 1.1875], age: "Roman", type: "Burial/Hoard" },
                { name: "Colchester Roman Town", coordinates: [51.891944, 0.898056], age: "Roman", type: "Settlement" },
                { name: "Vindolanda", coordinates: [54.9911, -2.3608], age: "Roman", type: "Castle/Fort" },
                { name: "Housesteads Roman Fort", coordinates: [55.013, -2.331], age: "Roman", type: "Castle/Fort" },
                { name: "Bamburgh Castle", coordinates: [55.608, -1.709], age: "Anglo-Saxon", type: "Castle/Fort" },
                { name: "Lindisfarne Priory", coordinates: [55.68, -1.8025], age: "Anglo-Saxon", type: "Ceremonial/Religious" },
                { name: "Repton Abbey", coordinates: [52.841308, -1.55102], age: "Anglo-Saxon", type: "Ceremonial/Religious" },
                { name: "Bedale Hoard", coordinates: [54.29, -1.59], age: "Anglo-Saxon", type: "Burial/Hoard" },
                { name: "Prittlewell Princely Burial", coordinates: [51.55391, 0.70873], age: "Anglo-Saxon", type: "Burial/Hoard" },
                { name: "Sutton Hoo", coordinates: [52.089, 1.338], age: "Anglo-Saxon", type: "Burial/Hoard" },
                { name: "Spong Hill", coordinates: [52.737, 0.934], age: "Anglo-Saxon", type: "Burial/Hoard" },
                { name: "Canterbury Cathedral", coordinates: [51.2797, 1.0831], age: "Medieval", type: "Ceremonial/Religious" },
                { name: "Salisbury Cathedral", coordinates: [51.064722, -1.7975], age: "Medieval", type: "Ceremonial/Religious" },
                { name: "York Minster", coordinates: [53.961944, -1.081944], age: "Medieval", type: "Ceremonial/Religious" },
                { name: "Bodiam Castle", coordinates: [51.0023, 0.5435], age: "Medieval", type: "Castle/Fort" },
                { name: "Caernarfon Castle", coordinates: [53.1393, -4.2769], age: "Medieval", type: "Castle/Fort" }
            ];
// Time periods ordered from earliest to latest

const timePeriods = [
    "Paleolithic",
    "Mesolithic",
    "Neolithic",
    "Bronze Age",
    "Iron Age",
    "Roman",
    "Anglo-Saxon",
    "Medieval"
];
 

// Create markers and associate them with layers
let markers = [];

siteData.forEach(site => {
    const marker = L.marker(site.coordinates, {title: site.name})
        .bindPopup(`<strong>${site.name}</strong><br>${site.age}<br>${site.type}`);
   

// Add marker to an array with additional info
    markers.push({
        marker: marker,
        age: site.age,
        type: site.type
    });

});


// Function to update visible markers based on the slider and checkboxes
function updateMarkers() {
    const sliderValue = document.getElementById("timeSlider").value;
    const selectedPeriod = timePeriods[sliderValue];
    const selectedTypes = Array.from(document.querySelectorAll(".site-type:checked")).map(checkbox => checkbox.value);

    // Hide all markers first
    markers.forEach(obj => {
        if (mymap.hasLayer(obj.marker)) {
            mymap.removeLayer(obj.marker);
        }
    });

    // Show markers that meet the criteria
    markers.forEach(obj => {
        const periodIndex = timePeriods.indexOf(obj.age);
        if (periodIndex <= sliderValue && selectedTypes.includes(obj.type)) {
            obj.marker.addTo(mymap);
        }
    });

    // Update label to show selected period
    document.getElementById("currentPeriod").innerText = `Current Period: ${selectedPeriod}`;
}


// Add event listeners to checkboxes to trigger the updateMarkers function when they change
document.querySelectorAll(".site-type").forEach(checkbox => {
    checkbox.addEventListener("change", updateMarkers);
});


// Initialize map and markers
document.getElementById("timeSlider").addEventListener("input", updateMarkers);
    
// Initially update markers based on the default slider value and selected checkboxes
updateMarkers();

    
// BASELAYER CONTROLS
L.control.layers(baseLayers).addTo(mymap);
    
</script>