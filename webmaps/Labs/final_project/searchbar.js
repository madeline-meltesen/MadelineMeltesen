        var siteLayer = L.layerGroup().addTo(mymap);

        var sites = [
            { title: "Paviland", location: [51.550144, -4.255517] },
            { title: "Kents Cavern", location: [50.46772, -3.502676] },
            { title: "Gough's Cave", location: [51.2819, -2.7654] },
            { title: "Creswell Crags", location: [53.26347, -1.193535] },
            { title: "Eartham Pit", location: [50.869542, -0.689675] },
            { title: "Swanscombe", location: [51.444256, 0.296609] },
            { title: "Happisburgh", location: [52.825278, 1.535] },
            { title: "Star Carr", location: [54.214167, -0.423333] },
            { title: "Howick", location: [55.454, -1.593] },
            { title: "Oare Marshes", location: [51.344, 0.886] },
            { title: "Low Hauxley", location: [55.3184, -1.5512] },
            { title: "Llyn Fawr", location: [51.719722, -3.568333] },
            { title: "Mount Sandel", location: [55.1161, -6.6642] },
            { title: "Skara Brae", location: [59.048714, -3.34175] },
            { title: "Pentre Ifan", location: [51.999, -4.77] },
            { title: "Bryn Celli Ddu", location: [53.2077, -4.2361] },
            { title: "Stonehenge", location: [51.178889, -1.826111] },
            { title: "Avebury", location: [51.428611, -1.854167] },
            { title: "Silbury Hill", location: [51.4157, -1.8574] },
            { title: "Callanish Stones", location: [58.197541, -6.745145] },
            { title: "Ring of Brodgar", location: [59.001482, -3.229723] },
            { title: "Must Farm", location: [52.555236, -0.177319] },
            { title: "Grimspound", location: [50.61331, -3.83738] },
            { title: "Flag Fen", location: [52.574, -0.19] },
            { title: "Beaghmore", location: [54.701466, -6.938701] },
            { title: "Milton Keynes Hoard", location: [52.033, -0.711] },
            { title: "Rillaton Barrow", location: [50.5211, -4.4557] },
            { title: "Glastonbury Lake Village", location: [51.163611, -2.725833] },
            { title: "Carn Euny", location: [50.10234, -5.63448] },
            { title: "Old Oswestry Hillfort", location: [52.87273, -3.04886] },
            { title: "Maiden Castle", location: [50.695, -2.47] },
            { title: "Danebury Hill Fort", location: [51.136681, -1.537569] },
            { title: "Honington Camp", location: [52.969925, -0.580756] },
            { title: "Llyn Cerrig Bach", location: [53.25885, -4.540288] },
            { title: "Roman Temple of Mithras", location: [51.5125, -0.0906] },
            { title: "Roman Baths", location: [51.3809, -2.3595] },
            { title: "Hoxne Hoard", location: [52.3425, 1.1875] },
            { title: "Colchester Roman Town", location: [51.891944, 0.898056] },
            { title: "Vindolanda", location: [54.9911, -2.3608] },
            { title: "Housesteads Roman Fort", location: [55.013, -2.331] },
            { title: "Bamburgh Castle", location: [55.608, -1.709] },
            { title: "Lindisfarne Priory", location: [55.68, -1.8025] },
            { title: "Repton Abbey", location: [52.841308, -1.55102] },
            { title: "Bedale Hoard", location: [54.29, -1.59] },
            { title: "Prittlewell Princely Burial", location: [51.55391, 0.70873] },
            { title: "Sutton Hoo", location: [52.089, 1.338] },
            { title: "Spong Hill", location: [52.737, 0.934] },
            { title: "Canterbury Cathedral", location: [51.2797, 1.0831] },
            { title: "Salisbury Cathedral", location: [51.064722, -1.7975] },
            { title: "York Minster", location: [53.961944, -1.081944] },
            { title: "Bodiam Castle", location: [51.0023, 0.5435] },
            { title: "Caernarfon Castle", location: [53.1393, -4.2769] }
        ];

    sites.forEach(function(site) {
        var marker = L.marker(site.location, { icon: myIcon, title: site.title }).bindPopup(site.title);
        marker.addTo(siteLayer);
    });

    var searchControl = new L.Control.Search({
        position: 'topright',
        layer: siteLayer,
        propertyName: 'title',
        marker: false,
        moveToLocation: function(latlng, title, map) {
            console.log("Moving to location: ", latlng, "Title: ", title);  // Debugging output
            map.setView(latlng, 12); // Set the zoom level here
            var marker = siteLayer.getLayers().find(m => m.getPopup().getContent() === title);
            if (marker) {
                marker.openPopup();
            } else {
                console.log("Marker not found for title: ", title);  // Debugging output
            }
        }
    });

    searchControl.on('search:locationfound', function(e) {
        console.log("Search location found: ", e);  // Debugging output
    });

    mymap.addControl(searchControl);