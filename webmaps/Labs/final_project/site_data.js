/*
var siteData = {
    "type": "FeatureCollection",
    "features": [{
            "type": "Feature",
            "properties": {
                "NAME": "Paviland Cave",
                "TYPE": "Burial/Hoard",
                "TIME": "Paleolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.550144, -4.255517]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Kents Cavern",
                "TYPE": "Cave Shelter/Early Human Occupation",
                "TIME": "Paleolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.46772, -3.502676]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Gough's Cave",
                "TYPE": "Cave Shelter/Early Human Occupation",
                "TIME": "Paleolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.2819, -2.7654]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Creswell Crags",
                "TYPE": "Cave Shelter/Early Human Occupation",
                "TIME": "Paleolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [53.26347, -1.193535]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Eartham Pit",
                "TYPE": "Cave Shelter/Early Human Occupation",
                "TIME": "Paleolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.869542, -0.689675]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Swanscombe",
                "TYPE": "Cave Shelter/Early Human Occupation",
                "TIME": "Paleolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.444256, 0.296609]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Happisburgh",
                "TYPE": "Cave Shelter/Early Human Occupation",
                "TIME": "Paleolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.825278, 1.535]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Star Carr",
                "TYPE": "Settlement",
                "TIME": "Mesolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [54.214167, -0.423333]
            }
        },         
        {
            "type": "Feature",
            "properties": {
                "NAME": "Howick",
                "TYPE": "Settlement",
                "TIME": "Mesolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [55.454, -1.593]
            }
        },  
        {
            "type": "Feature",
            "properties": {
                "NAME": "Oare Marshes",
                "TYPE": "Settlement",
                "TIME": "Mesolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.344, 0.886]
            }
        },  
        {
            "type": "Feature",
            "properties": {
                "NAME": "Low Hauxley",
                "TYPE": "Settlement",
                "TIME": "Mesolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [55.3184, -1.5512]
            }
        },  
        {
            "type": "Feature",
            "properties": {
                "NAME": "LLyn Fawr",
                "TYPE": "Settlement",
                "TIME": "Mesolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.719722, -3.568333]
            }
        },  
        {
            "type": "Feature",
            "properties": {
                "NAME": "Mount Sandel",
                "TYPE": "Settlement",
                "TIME": "Mesolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [55.1161, -6.6642]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Skara Brae",
                "TYPE": "Settlement",
                "TIME": "Neolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [59.048714, -3.34175]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Pentre Ifan",
                "TYPE": "Burial/Hoard",
                "TIME": "Neolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.999, -4.77]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Bryn Celli Ddu",
                "TYPE": "Burial/Hoard",
                "TIME": "Neolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [53.2077, -4.2361]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Stonehenge",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Neolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.178889, -1.826111]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Avebury",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Neolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.428611, -1.854167]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Silbury Hill",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Neolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.4157, -1.8574]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Callanish Stones",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Neolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [58.197541, -6.745145]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Ring of Brodgar",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Neolithic"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [59.001482, -3.229723]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Must Farm",
                "TYPE": "Settlement",
                "TIME": "Bronze Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.555236, -0.177319]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Grimspound",
                "TYPE": "Settlement",
                "TIME": "Bronze Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.61331, -3.83738]
            }
        }, 
        {
            "type": "Feature",
            "properties": {
                "NAME": "Flag Fen",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Bronze Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.574, -0.19]
            }
        },    
        {
            "type": "Feature",
            "properties": {
                "NAME": "Beaghmore",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Bronze Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [54.701466, -6.938701]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Milton Keynes Hoard",
                "TYPE": "Burial/Hoard",
                "TIME": "Bronze Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.033, -0.711]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Rillaton Barrow",
                "TYPE": "Burial/Hoard",
                "TIME": "Bronze Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.5211, -4.4557]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Glastonbury Lake Village",
                "TYPE": "Settlement",
                "TIME": "Iron Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.163611, -2.725833]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Carn Euny",
                "TYPE": "Settlement",
                "TIME": "Iron Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.10234, -5.63448]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Old Oswestry Hillfort",
                "TYPE": "Castle/Fort",
                "TIME": "Iron Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.87273, -3.04886]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Maiden Castle",
                "TYPE": "Castle/Fort",
                "TIME": "Iron Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.695, -2.47]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Danebury Hill Fort",
                "TYPE": "Castle/Fort",
                "TIME": "Iron Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.136681, -1.537569]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Honington Camp",
                "TYPE": "Castle/Fort",
                "TIME": "Iron Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.969925, -0.580756]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Llyn Cerrig Bach",
                "TYPE": "Burial/Hoard",
                "TIME": "Iron Age"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [53.25885, -4.540288]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Roman Temple of Mithras",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Roman"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.5125, -0.0906]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Roman Baths",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Roman"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.3809, -2.3595]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Hoxne Hoard",
                "TYPE": "Burial/Hoard",
                "TIME": "Roman"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.3425, 1.1875]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Colchester Roman Town",
                "TYPE": "Settlement",
                "TIME": "Roman"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.891944, 0.898056]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Vindolanda",
                "TYPE": "Castle/Fort",
                "TIME": "Roman"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [54.9911, -2.3608]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Housesteads Roman Fort",
                "TYPE": "Castle/Fort",
                "TIME": "Roman"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [55.013, -2.331]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Bamburgh Castle",
                "TYPE": "Castle/Fort",
                "TIME": "Anglo-Saxon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [55.608, -1.709]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Lindisfarne Priory",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Anglo-Saxon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [55.68, -1.8025]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Repton Abbey",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Anglo-Saxon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.841308, -1.55102]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Bedale Hoard",
                "TYPE": "Burial/Hoard",
                "TIME": "Anglo-Saxon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [54.29, -1.59]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Prittlewell Princely Burial",
                "TYPE": "Burial/Hoard",
                "TIME": "Anglo-Saxon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.55391, 0.70873]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Sutton Hoo",
                "TYPE": "Burial/Hoard",
                "TIME": "Anglo-Saxon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.089, 1.338]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Spong Hill",
                "TYPE": "Burial/Hoard",
                "TIME": "Anglo-Saxon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.737, 0.934]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Canterbury Cathedral",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Medieval"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.2797, 1.0831]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Salisbury Cathedral",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Medieval"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.064722, -1.7975]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "York Minster",
                "TYPE": "Ceremonial/Religious",
                "TIME": "Medieval"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [53.961944, -1.081944]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Bodiam Castle",
                "TYPE": "Castle/Fort",
                "TIME": "Medieval"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.0023, 0.5435]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "NAME": "Caernarfon Castle",
                "TYPE": "Castle/Fort",
                "TIME": "Medieval"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [53.1393, -4.2769]
            }
        },
            
    ]
};


// SITE TYPE GROUPS
    // Set up overlay groups
    var burialhoard = L.layerGroup();
    var cave = L.layerGroup();
    var settlement = L.layerGroup();
    var ceremonial = L.layerGroup();
    var castlefort = L.layerGroup();
    // Create menu items for overlay groups
    var overlays = {
        'Burials/Hoards': burialhoard,
        'Cave Shelter/Early <br> &nbsp &nbsp &nbsp Human Occupation': cave,
        'Settlements': settlement,
        'Ceremonial/Religious': ceremonial,
        'Castles/Forts': castlefort,
    };
    // Add layer control
    L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);
*/    
    
    // Set up site variables and individual sites
    // Paleolithic Sites
    var paviland = L.marker([51.550144, -4.255517]).bindPopup('Paviland').addTo(burialhoard);
    var kents = L.marker([50.46772, -3.502676]).bindPopup('Kents Cavern').addTo(cave);
    var goughs = L.marker([51.2819, -2.7654]).bindPopup('Gough\'s Cave').addTo(cave);
    var creswell = L.marker([53.26347, -1.193535]).bindPopup('Creswell Crags').addTo(cave);
    var eartham = L.marker([50.869542, -0.689675]).bindPopup('Eartham Pit').addTo(cave);
    var swanscombe = L.marker([51.444256, 0.296609]).bindPopup('Swanscombe').addTo(cave);
    var happisburgh = L.marker([52.825278, 1.535]).bindPopup('Happisburgh').addTo(cave);
    // Mesolithic Sites
    var starcarr = L.marker([54.214167, -0.423333]).bindPopup('Star Carr').addTo(settlement);
    var howick = L.marker([55.454, -1.593]).bindPopup('Howick').addTo(settlement);
    var oare = L.marker([51.344, 0.886]).bindPopup('Oare Marshes').addTo(settlement);
    var hauxley = L.marker([55.3184, -1.5512]).bindPopup('Low Hauxley').addTo(settlement);
    var fawr = L.marker([51.719722, -3.568333]).bindPopup('Llyn Fawr').addTo(settlement);
    var sandel = L.marker([55.1161, -6.6642]).bindPopup('Mount Sandel').addTo(settlement);
    // Neolithic Sites
    var skarabrae = L.marker([59.048714, -3.34175]).bindPopup('Skara Brae').addTo(settlement);
    var pentre = L.marker([51.999, -4.77]).bindPopup('Pentre Ifan').addTo(burialhoard);
    var bryn = L.marker([53.2077, -4.2361]).bindPopup('Bryn Celli Ddu').addTo(burialhoard);
    var stonehenge = L.marker([51.178889, -1.826111]).bindPopup('Stonehenge').addTo(ceremonial);
    var avebury = L.marker([51.428611, -1.854167]).bindPopup('Avebury').addTo(ceremonial);
    var silbury = L.marker([51.4157, -1.8574]).bindPopup('Silbury Hill').addTo(ceremonial);
    var callanish = L.marker([58.197541, -6.745145]).bindPopup('Callanish Stones').addTo(ceremonial);
    var brodgar = L.marker([59.001482, -3.229723]).bindPopup('Ring of Brodgar').addTo(ceremonial);
    // Bronze Age Sites
    var mustfarm = L.marker([52.555236, -0.177319]).bindPopup('Must Farm').addTo(settlement);
    var grimspound = L.marker([50.61331, -3.83738]).bindPopup('Grimspound').addTo(settlement);
    var flag = L.marker([52.574, -0.19]).bindPopup('Flag Fen').addTo(ceremonial);
    var beaghmore = L.marker([54.701466, -6.938701]).bindPopup('Beaghmore').addTo(ceremonial);
    var milton = L.marker([52.033, -0.711]).bindPopup('Milton Keynes Hoard').addTo(burialhoard);
    var rillaton = L.marker([50.5211, -4.4557]).bindPopup('Rillaton Barrow').addTo(burialhoard);
    // Iron Age Sites
    var glastonbury = L.marker([51.163611, -2.725833]).bindPopup('Glastonbury Lake Village').addTo(settlement);
    var carn = L.marker([50.10234, -5.63448]).bindPopup('Carn Euny').addTo(settlement);
    var oswestry = L.marker([52.87273, -3.04886]).bindPopup('Old Oswestry Hillfort').addTo(castlefort);
    var maiden = L.marker([50.695, -2.47]).bindPopup('Maiden Castle').addTo(castlefort);
    var danebury = L.marker([51.136681, -1.537569]).bindPopup('Danebury Hill Fort').addTo(castlefort);
    var honington = L.marker([52.969925, -0.580756]).bindPopup('Honington Camp').addTo(castlefort);
    var cerrig = L.marker([53.25885, -4.540288]).bindPopup('Llyn Cerrig Bach').addTo(burialhoard);
    // Roman Sites
    var romantemple = L.marker([51.5125, -0.0906]).bindPopup('Roman Temple of Mithras').addTo(ceremonial);
    var baths = L.marker([51.3809, -2.3595]).bindPopup('Roman Baths').addTo(ceremonial);
    var hoxne = L.marker([52.3425, 1.1875]).bindPopup('Hoxne Hoard').addTo(burialhoard);
    var colchester = L.marker([51.891944, 0.898056]).bindPopup('Colchester Roman Town').addTo(settlement);
    var vindolanda = L.marker([54.9911, -2.3608]).bindPopup('Vindolanda').addTo(castlefort);
    var housesteads = L.marker([55.013, -2.331]).bindPopup('Housesteads Roman Fort').addTo(castlefort);
    // Anglo-Saxon Sites
    var bamburgh = L.marker([55.608, -1.709]).bindPopup('Bamburgh Castle').addTo(castlefort);
    var lindisfarne = L.marker([55.68, -1.8025]).bindPopup('Lindisfarne Priory').addTo(ceremonial);
    var repton = L.marker([52.841308, -1.55102]).bindPopup('Repton Abbey').addTo(ceremonial);
    var bedale = L.marker([54.29, -1.59]).bindPopup('Bedale Hoard').addTo(burialhoard);
    var prittlewell = L.marker([51.55391, 0.70873]).bindPopup('Prittlewell Princely Burial').addTo(burialhoard);
    var sutton = L.marker([52.089, 1.338]).bindPopup('Sutton Hoo').addTo(burialhoard);
    var spong = L.marker([52.737, 0.934]).bindPopup('Spong Hill').addTo(burialhoard);
    // Medieval Sites
    var canterbury = L.marker([51.2797, 1.0831]).bindPopup('Canterbury Cathedral').addTo(ceremonial);
    var salisbury = L.marker([51.064722, -1.7975]).bindPopup('Salisbury Cathedral').addTo(ceremonial);
    var york = L.marker([53.961944, -1.081944]).bindPopup('York Minster').addTo(ceremonial);
    var bodiam = L.marker([51.0023, 0.5435]).bindPopup('Bodiam Castle').addTo(castlefort);
    var caernarfon = L.marker([53.1393, -4.2769]).bindPopup('Caernarfon Castle').addTo(castlefort);

// SITE AGE GROUPS
    // Set up overlay groups
    var paleosites = L.layerGroup();
    var mesosites = L.layerGroup();
    var neosites = L.layerGroup();
    var bronzesites = L.layerGroup();
    var ironsites = L.layerGroup();
    var romansites = L.layerGroup();
    var anglosites = L.layerGroup();
    var medsites = L.layerGroup();
    // Create menu items for overlay groups
    var overlays = {
        'Paleolithic Sites': paleosites,
        'Mesolithic Sites': mesosites,
        'Neolithic Sites': neosites,
        'Bronze Age Sites': bronzesites,
        'Iron Age Sites': ironsites,
        'Roman Sites': romansites,
        'Anglo-Saxon Sites': anglosites,
        'Medieval Sites': medsites
    };
    // Add layer control
    L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);
    // Set up site variables and individual sites
    // Paleolithic Sites
    var paviland = L.marker([51.550144, -4.255517]).bindPopup('Paviland').addTo(paleosites);
    var kents = L.marker([50.46772, -3.502676]).bindPopup('Kents Cavern').addTo(paleosites);
    var goughs = L.marker([51.2819, -2.7654]).bindPopup('Gough\'s Cave').addTo(paleosites);
    var creswell = L.marker([53.26347, -1.193535]).bindPopup('Creswell Crags').addTo(paleosites);
    var eartham = L.marker([50.869542, -0.689675]).bindPopup('Eartham Pit').addTo(paleosites);
    var swanscombe = L.marker([51.444256, 0.296609]).bindPopup('Swanscombe').addTo(paleosites);
    var happisburgh = L.marker([52.825278, 1.535]).bindPopup('Happisburgh').addTo(paleosites);
    // Mesolithic Sites
    var starcarr = L.marker([54.214167, -0.423333]).bindPopup('Star Carr').addTo(mesosites);
    var howick = L.marker([55.454, -1.593]).bindPopup('Howick').addTo(mesosites);
    var oare = L.marker([51.344, 0.886]).bindPopup('Oare Marshes').addTo(mesosites);
    var hauxley = L.marker([55.3184, -1.5512]).bindPopup('Low Hauxley').addTo(mesosites);
    var fawr = L.marker([51.719722, -3.568333]).bindPopup('Llyn Fawr').addTo(mesosites);
    var sandel = L.marker([55.1161, -6.6642]).bindPopup('Mount Sandel').addTo(mesosites);
    // Neolithic Sites
    var skarabrae = L.marker([59.048714, -3.34175]).bindPopup('Skara Brae').addTo(neosites);
    var pentre = L.marker([51.999, -4.77]).bindPopup('Pentre Ifan').addTo(neosites);
    var bryn = L.marker([53.2077, -4.2361]).bindPopup('Bryn Celli Ddu').addTo(neosites);
    var stonehenge = L.marker([51.178889, -1.826111]).bindPopup('Stonehenge').addTo(neosites);
    var avebury = L.marker([51.428611, -1.854167]).bindPopup('Avebury').addTo(neosites);
    var silbury = L.marker([51.4157, -1.8574]).bindPopup('Silbury Hill').addTo(neosites);
    var callanish = L.marker([58.197541, -6.745145]).bindPopup('Callanish Stones').addTo(neosites);
    var brodgar = L.marker([59.001482, -3.229723]).bindPopup('Ring of Brodgar').addTo(neosites);
    // Bronze Age Sites
    var mustfarm = L.marker([52.555236, -0.177319]).bindPopup('Must Farm').addTo(bronzesites);
    var grimspound = L.marker([50.61331, -3.83738]).bindPopup('Grimspound').addTo(bronzesites);
    var flag = L.marker([52.574, -0.19]).bindPopup('Flag Fen').addTo(bronzesites);
    var beaghmore = L.marker([54.701466, -6.938701]).bindPopup('Beaghmore').addTo(bronzesites);
    var milton = L.marker([52.033, -0.711]).bindPopup('Milton Keynes Hoard').addTo(bronzesites);
    var rillaton = L.marker([50.5211, -4.4557]).bindPopup('Rillaton Barrow').addTo(bronzesites);
    // Iron Age Sites
    var glastonbury = L.marker([51.163611, -2.725833]).bindPopup('Glastonbury').addTo(ironsites);
    var carn = L.marker([50.10234, -5.63448]).bindPopup('Carn Euny').addTo(ironsites);
    var oswestry = L.marker([52.87273, -3.04886]).bindPopup('Old Oswestry Hillfort').addTo(ironsites);
    var maiden = L.marker([50.695, -2.47]).bindPopup('Maiden Castle').addTo(ironsites);
    var danebury = L.marker([51.136681, -1.537569]).bindPopup('Danebury Hill Fort').addTo(ironsites);
    var honington = L.marker([52.969925, -0.580756]).bindPopup('Honington Camp').addTo(ironsites);
    var cerrig = L.marker([53.25885, -4.540288]).bindPopup('Llyn Cerrig Bach').addTo(ironsites);
    // Roman Sites
    var romantemple = L.marker([51.5125, -0.0906]).bindPopup('Roman Temple of Mithras').addTo(romansites);
    var baths = L.marker([51.3809, -2.3595]).bindPopup('Roman Baths').addTo(romansites);
    var hoxne = L.marker([52.3425, 1.1875]).bindPopup('Hoxne Hoard').addTo(romansites);
    var colchester = L.marker([51.891944, 0.898056]).bindPopup('Colchester Roman Town').addTo(romansites);
    var vindolanda = L.marker([54.9911, -2.3608]).bindPopup('Vindolanda').addTo(romansites);
    var housesteads = L.marker([55.013, -2.331]).bindPopup('Housesteads Roman Fort').addTo(romansites);
    // Anglo-Saxon Sites
    var bamburgh = L.marker([55.608, -1.709]).bindPopup('Bamburgh Castle').addTo(anglosites);
    var lindisfarne = L.marker([55.68, -1.8025]).bindPopup('Lindisfarne Priory').addTo(anglosites);
    var repton = L.marker([52.841308, -1.55102]).bindPopup('Repton Abbey').addTo(anglosites);
    var bedale = L.marker([54.29, -1.59]).bindPopup('Bedale Hoard').addTo(anglosites);
    var prittlewell = L.marker([51.55391, 0.70873]).bindPopup('Prittlewell Princely Burial').addTo(anglosites);
    var sutton = L.marker([52.089, 1.338]).bindPopup('Sutton Hoo').addTo(anglosites);
    var spong = L.marker([52.737, 0.934]).bindPopup('Spong Hill').addTo(anglosites);
    // Medieval Sites
    var canterbury = L.marker([51.2797, 1.0831]).bindPopup('Canterbury Cathedral').addTo(medsites);
    var salisbury = L.marker([51.064722, -1.7975]).bindPopup('Salisbury Cathedral').addTo(medsites);
    var york = L.marker([53.961944, -1.081944]).bindPopup('York Minster').addTo(medsites);
    var bodiam = L.marker([51.0023, 0.5435]).bindPopup('Bodiam Castle').addTo(medsites);
    var caernarfon = L.marker([53.1393, -4.2769]).bindPopup('Caernarfon Castle').addTo(medsites); */