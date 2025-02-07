// Add SITE TYPE markers to a marker group
        var burialhoard = L.layerGroup([paviland, pentre, bryn, milton, rillaton, cerrig, hoxne, bedale, prittlewell, sutton, spong]); 
            burialhoard.addTo(mymap); // Add the marker group to the map
        var cave = L.layerGroup([kents, goughs, creswell, eartham, swanscombe, happisburgh]); 
            cave.addTo(mymap); // Add the marker group to the map
        var settlement = L.layerGroup([starcarr, howick, oare, hauxley, fawr, sandel, skarabrae, mustfarm, grimspound, glastonbury, carn, colchester]); 
            settlement.addTo(mymap); // Add the marker group to the map
        var ceremonial = L.layerGroup([stonehenge, avebury, silbury, callanish, brodgar, flag, beaghmore, romantemple, baths, lindisfarne, repton, canterbury, salisbury, york]); 
            ceremonial.addTo(mymap); // Add the marker group to the map
        var castlefort = L.layerGroup([oswestry, maiden, danebury, honington, vindolanda, housesteads, bamburgh, bodiam, caernarfon]); 
            castlefort.addTo(mymap); // Add the marker group to the map
    

// SITE TYPE OVERLAYS1
        var overlays1 = {
            "Burials/Hoards": burialhoard,
            "Cave Shelter/Early <br> &nbsp &nbsp &nbsp Human Occupation": cave,
            "Settlements": settlement,
            "Ceremonial/Religious": ceremonial,
            "Castles/Forts": castlefort            
        };