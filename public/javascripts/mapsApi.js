
                var map;
                var CDMX = {lat: 19.431966, lng: -99.153268};
                var marker , i ;
                //var infoTextSon = new google.maps.InfoWindow();

                var locationsSidney = [
                        ['Bondi Beach', 18.0271848,-93.5588527, 4],
                        ['Coogee Beach', 17.9928451,-92.9881406, 5],
                        ['Manly Beach',17.9192529,-93.5728211, 2]
                    ];

            

                function initialize()
                {
                    map = new google.maps.Map(document.getElementById('map-canvas'), {
                            center: CDMX, //Setting Initial Position
                            zoom: 10,
                    });
                    marker = new google.maps.Marker({
                            position: CDMX,
                            map: map,
                            draggable:true,
                            title:"Drag me!",
                            animation: google.maps.Animation.DROP,
                    });

                    var geocoder = new google.maps.Geocoder();

                    $("#dropdown").change(function() {
                        address = $("#dropdown :selected")[0].text;
                        geocodeAddress(address, geocoder, map);
                    });

                    var address = $("#dropdown :selected")[0].text;
                    geocodeAddress(address, geocoder, map);

                };


                function geocodeAddress(address, geocoder, resultsMap) {
                  document.getElementById('info').innerHTML = address;
                  geocoder.geocode({
                    'address': address,

                  }, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                      resultsMap.fitBounds(results[0].geometry.viewport);
                      document.getElementById('info').innerHTML += "<br>" + results[0].geometry.location.toUrlValue(6);
                    } else {
                      alert('Geocode was not successful for the following reason: ' + status);
                    }
                  });
                }




                function toggleBounce() {
                  if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                  } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                  }
                }




                function newLocation(newLat,newLng)
                {
                    map.setCenter({
                        lat : newLat,
                        lng : newLng
                    });
                 
                };

                function placeMarker(newLat,newLng) {
                    marker.setPosition({
                        lat : newLat,
                        lng : newLng
                    });
                    marker.addListener('click', toggleBounce);
                };


                function placeMarkersSidney(newLat,newLng) {
                    marker.setPosition({
                        lat : newLat,
                        lng : newLng
                    });
                    for (i = 0; i < locationsSidney.length; i++) {  
                        marker = new google.maps.Marker ({
                            position: new google.maps.LatLng(locationsSidney[i][1], locationsSidney[i][2]),
                            map: map
                        });
                        marker.addListener('click', toggleBounce);
                    };

                };








                document.getElementById("1").addEventListener("click", tabasco);
                function tabasco() {
                    document.getElementById("1").innerHTML = "Ñam!";
                    newLocation(18.0271848,-93.5588527);
                    placeMarkersSidney(18.0271848,-93.5588527);
                };

                document.getElementById("2").addEventListener("click", colima);
                function colima() {
                    document.getElementById("1").innerHTML = "Ñam!";
                    newLocation(19.0975078,-104.6489415);
                    placeMarker(19.0975078,-104.6489415);
                };

                document.getElementById("3").addEventListener("click", magamex);
                function magamex() {
                    document.getElementById("1").innerHTML = "Ñam!";
                    newLocation(19.527213, -99.067301);
                    placeMarker(19.527213, -99.067301);
                };

                google.maps.event.addDomListener(window, 'load', initialize);
